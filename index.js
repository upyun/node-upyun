'use strict'
var UpyunV1 = require('upyun-legacy')
var UpyunV2 = require('./lib/api.js')

module.exports = exports.UPYUN = function (bucket, operator, password, endpoint, apiVersion) {
    // wait for the latest api online
  apiVersion = apiVersion || 'legacy'

  var client = null

  switch (apiVersion.toLowerCase()) {
    case 'legacy':
      client = new UpyunV1(bucket, operator, password, endpoint)
      break
    case 'latest':
      client = new UpyunV2(bucket, operator, password, endpoint)
      break
    default:
      client = new UpyunV1(bucket, operator, password, endpoint)
      break
  }

  client._apiVersion = apiVersion

  return client
}
