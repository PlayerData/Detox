// @ts-nocheck
const { URL } = require('url');
const util = require('util');

const _ = require('lodash');

const DetoxServer = require('./server/DetoxServer');
const logger = require('./utils/logger');
const log = logger.child({ __filename });

class DetoxGlobalContext {
  constructor(config) {
    log.trace(
      { event: 'DETOX_CREATE', config },
      'created Detox server with config:\n%s',
      util.inspect(_.omit(config, ['errorComposer']), {
        getters: false,
        depth: Infinity,
        maxArrayLength: Infinity,
        maxStringLength: Infinity,
        breakLength: false,
        compact: false,
      })
    );

    this._artifactsConfig = config.artifactsConfig;
    this._sessionConfig = config.sessionConfig;

    this._wss = null;
    this._ipc = null; // TODO: implement IPC bus
  }

  async setup() {
    const sessionConfig = this._sessionConfig;

    this._wss = new DetoxServer({
      port: sessionConfig.server
        ? new URL(sessionConfig.server).port
        : 0,
      standalone: false,
    });

    await this._wss.open();

    if (!sessionConfig.server) {
      sessionConfig.server = `ws://localhost:${this._wss.port}`;
    }

    // TODO: think if we need it to be encapsulated
    process.env.DETOX_WSS_ADDRESS = sessionConfig.server;
  }

  async teardown() {
    if (this._wss) {
      await this._wss.close();
      this._wss = null;
    }
  }
}

module.exports = DetoxGlobalContext;
