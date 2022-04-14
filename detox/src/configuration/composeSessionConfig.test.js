const DetoxConfigErrorComposer = require('../errors/DetoxConfigErrorComposer');

describe('composeSessionConfig', () => {
  let composeSessionConfig;
  let cliConfig, globalConfig, localConfig;
  /** @type {DetoxConfigErrorComposer} */
  let errorComposer;

  beforeEach(() => {
    composeSessionConfig = require('./composeSessionConfig');
    errorComposer = new DetoxConfigErrorComposer();
    cliConfig = {};
    globalConfig = {};
    localConfig = {};
  });

  const compose = () => composeSessionConfig({
    cliConfig,
    globalConfig,
    localConfig,
    errorComposer,
  });

  it('should generate a default config', async () => {
    expect(await compose()).toEqual({
      debugSynchronization: 10000,
      server: undefined,
      sessionId: expect.any(String),
    });
  });

  describe('sessionId', function() {
    describe('by default', () => {
      it('should be autogenerated GUID', async () => {
        expect(await compose()).toMatchObject({
          sessionId: expect.stringMatching(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/i),
        });
      });
    });

    it('should pass validations', async () => {
      globalConfig.session = { sessionId: 1234 };
      await expect(compose()).rejects.toThrowError(errorComposer.invalidSessionIdProperty());

      globalConfig.session = { sessionId: '' };
      await expect(compose()).rejects.toThrowError(errorComposer.invalidSessionIdProperty());
    });

    describe('when defined in global config', () => {
      beforeEach(() => {
        globalConfig.session = { sessionId: 'someSessionId' };
      });

      it('should use the specified value', async () => {
        expect((await compose()).sessionId).toBe('someSessionId');
      });

      describe('and in local config', () => {
        beforeEach(() => {
          localConfig.session = { sessionId: 'otherSessionId' };
        });

        it('should use the specified value', async () => {
          expect((await compose()).sessionId).toBe('otherSessionId');
        });
      });
    });
  });

  describe('server', function() {
    describe('by default', () => {
      it('should be undefined', async () => {
        expect(await compose()).not.toHaveProperty('server');
      });
    });

    it('should pass validations', async () => {
      globalConfig.session = { server: 1234 };
      await expect(compose()).rejects.toThrowError(errorComposer.invalidServerProperty());

      globalConfig.session = { server: 'http://invalid-protocol.com' };
      await expect(compose()).rejects.toThrowError(errorComposer.invalidServerProperty());
    });

    describe('when defined in global config', () => {
      beforeEach(() => {
        globalConfig.session = { server: 'ws://myserver:1100' };
      });

      it('should use the specified value', async () => {
        expect(await compose()).toMatchObject({
          server: 'ws://myserver:1100',
        });
      });

      describe('and in local config', () => {
        beforeEach(() => {
          localConfig.session = { server: 'ws://otherserver:1100' };
        });

        it('should use the specified value', async () => {
          expect(await compose()).toMatchObject({
            server: 'ws://otherserver:1100',
          });
        });
      });
    });
  });

  describe('debugSynchronization', function () {
    describe('by default', () => {
      it('should be 10000ms', async () => {
        expect(await compose()).toMatchObject({
          debugSynchronization: 10000,
        });
      });
    });

    it('should pass validations', async () => {
      globalConfig.session = { debugSynchronization: -1 };
      await expect(compose()).rejects.toThrowError(errorComposer.invalidDebugSynchronizationProperty());

      globalConfig.session = { debugSynchronization: '3000' };
      await expect(compose()).rejects.toThrowError(errorComposer.invalidDebugSynchronizationProperty());
    });

    describe('when defined in global config', () => {
      beforeEach(() => {
        globalConfig.session = { debugSynchronization: 9999 };
      });

      it('should use that value', async () => {
        expect(await compose()).toMatchObject({
          debugSynchronization: 9999,
        });
      });

      describe('and in local config', () => {
        beforeEach(() => {
          localConfig.session = { debugSynchronization: 20000 };
        });

        it('should use that value', async () => {
          expect(await compose()).toMatchObject({
            debugSynchronization: 20000,
          });
        });

        describe('and in CLI config', () => {
          it('should use that value if it is valid', async () => {
            cliConfig.debugSynchronization = '0';
            expect(await compose()).toMatchObject({
              debugSynchronization: 0,
            });
          });

          it('should ignore that value if it is invalid', async () => {
            cliConfig.debugSynchronization = 'true';
            expect(await compose()).toMatchObject({
              debugSynchronization: 20000,
            });
          });

          it('should ignore that value if it is empty', async () => {
            cliConfig.debugSynchronization = '';
            expect(await compose()).toMatchObject({
              debugSynchronization: 20000,
            });
          });
        });
      });
    });
  });
});

