module.exports = async function detoxGlobalTeardown() {
  const instance = global['detox'];

  if (instance) {
    await instance.cleanup();
  }
};
