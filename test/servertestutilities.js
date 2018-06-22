const _ = require('lodash')

module.exports = {
  startServerP: function startServerP (port, settings) {
    const Server = require('../lib')
    var opts = {
      config: {
        defaults: {
          vessels: {
            self: {
              uuid: 'urn:mrn:signalk:uuid:c0d79334-4e25-4245-8892-54e8ccc8021d'
            }
          }
        },
        settings: {
          port,
          pipedProviders: [
            {
              id: 'deltaFromHttp',
              pipeElements: [
                {
                  type: 'test/httpprovider'
                }
              ]
            }
          ],
          interfaces: {
            plugins: false
          }
        }
      }
    }
    if (!_.isUndefined(settings)) {
      _.merge(opts.config.settings, settings)
    }
    const server = new Server(opts)
    return server.start()
  }
}
