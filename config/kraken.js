'use strict'

const Env = use('Env')

module.exports = {

  /**
   * The access key credentials created through the Kraken dashboard
   */
  credentials: {
    api_key: Env.get('KRAKEN_API_KEY') || null,
    secret: Env.get('KRAKEN_SECRET') || null
  }

}
