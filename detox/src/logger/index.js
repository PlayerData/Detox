function resolveLoggerClass() {
  switch (process.env.DETOX_LOGGER_IMPL) {
    case 'bunyan': return require('./BunyanLogger');
    case 'ipc': return require('./IPCLogger');
    default: return require('./NullLogger');
  }
}

const Logger = resolveLoggerClass();
module.exports = new Logger();
