const DetoxGlobalContext = require('../../src/DetoxGlobalContext');
const configuration = require('../../src/configuration');

module.exports = async function detoxGlobalSetup(override) {
  const config = await configuration.composeDetoxConfig({ override });

  const globalContext = global['detox'] = new DetoxGlobalContext(config);
  try {
    await globalContext.setup();
  } catch (e) {
    try {
      await globalContext.teardown();
      throw e; // TODO: check if global teardown is called on failure? if yes, cleanup() there instead
    } finally {
      delete global['detox'];
    }
  }
};
