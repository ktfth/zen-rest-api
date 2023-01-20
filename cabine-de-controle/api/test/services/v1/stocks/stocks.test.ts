// For more information about this file see https://dove.feathersjs.com/guides/cli/service.test.html
import assert from 'assert'
import { app } from '../../../../src/app'
import nock from 'nock'

describe('v1/stocks service', () => {
  it('registered the service', () => {
    const service = app.service('v1/stocks')

    assert.ok(service, 'Registered the service')
  })

  it('should retrieve time series', async () => {
    const service = app.service('v1/stocks')

    const financialData = app.get('financialData')

    const scope = nock(financialData.url)
      .get(`/time_series?symbol=ETH/BTC&interval=1min&apikey=${financialData.apiKey}`)
      .reply(200, {
        "meta": {
          "symbol": "ETH/BTC",
          "interval": "1min",
          "currency_base": "Ethereum",
          "currency_quote": "Bitcoin",
          "exchange": "Huobi",
          "type": "Digital Currency"
        },
        "values": [
          {
            "datetime": "2023-01-20 17:26:00",
            "open": "0.07444",
            "high": "0.07444",
            "low": "0.07444",
            "close": "0.07444"
          },
          {
            "datetime": "2023-01-20 17:25:00",
            "open": "0.07444",
            "high": "0.07444",
            "low": "0.07444",
            "close": "0.07444"
          },
          {
            "datetime": "2023-01-20 17:24:00",
            "open": "0.07444",
            "high": "0.07444",
            "low": "0.07444",
            "close": "0.07444"
          },
          {
            "datetime": "2023-01-20 17:23:00",
            "open": "0.07436",
            "high": "0.07436",
            "low": "0.07436",
            "close": "0.07436"
          },
          {
            "datetime": "2023-01-20 17:22:00",
            "open": "0.07436",
            "high": "0.07436",
            "low": "0.07436",
            "close": "0.07436"
          },
          {
            "datetime": "2023-01-20 17:21:00",
            "open": "0.07436",
            "high": "0.07436",
            "low": "0.07436",
            "close": "0.07436"
          },
          {
            "datetime": "2023-01-20 17:20:00",
            "open": "0.07436",
            "high": "0.07436",
            "low": "0.07436",
            "close": "0.07436"
          },
          {
            "datetime": "2023-01-20 17:19:00",
            "open": "0.07436",
            "high": "0.07436",
            "low": "0.07436",
            "close": "0.07436"
          },
          {
            "datetime": "2023-01-20 17:18:00",
            "open": "0.07436",
            "high": "0.07436",
            "low": "0.07436",
            "close": "0.07436"
          },
          {
            "datetime": "2023-01-20 17:17:00",
            "open": "0.07436",
            "high": "0.07436",
            "low": "0.07436",
            "close": "0.07436"
          },
          {
            "datetime": "2023-01-20 17:16:00",
            "open": "0.07436",
            "high": "0.07436",
            "low": "0.07436",
            "close": "0.07436"
          },
          {
            "datetime": "2023-01-20 17:15:00",
            "open": "0.07436",
            "high": "0.07436",
            "low": "0.07436",
            "close": "0.07436"
          },
          {
            "datetime": "2023-01-20 17:14:00",
            "open": "0.07435",
            "high": "0.07436",
            "low": "0.07435",
            "close": "0.07436"
          },
          {
            "datetime": "2023-01-20 17:13:00",
            "open": "0.07435",
            "high": "0.07435",
            "low": "0.07435",
            "close": "0.07435"
          },
          {
            "datetime": "2023-01-20 17:12:00",
            "open": "0.07435",
            "high": "0.07435",
            "low": "0.07435",
            "close": "0.07435"
          },
          {
            "datetime": "2023-01-20 17:11:00",
            "open": "0.07426",
            "high": "0.07435",
            "low": "0.07426",
            "close": "0.07435"
          },
          {
            "datetime": "2023-01-20 17:10:00",
            "open": "0.07426",
            "high": "0.07426",
            "low": "0.07426",
            "close": "0.07426"
          },
          {
            "datetime": "2023-01-20 17:09:00",
            "open": "0.07426",
            "high": "0.07426",
            "low": "0.07426",
            "close": "0.07426"
          },
          {
            "datetime": "2023-01-20 17:08:00",
            "open": "0.07438",
            "high": "0.07438",
            "low": "0.07427",
            "close": "0.07427"
          },
          {
            "datetime": "2023-01-20 17:07:00",
            "open": "0.07438",
            "high": "0.07438",
            "low": "0.07438",
            "close": "0.07438"
          },
          {
            "datetime": "2023-01-20 17:06:00",
            "open": "0.07438",
            "high": "0.07438",
            "low": "0.07438",
            "close": "0.07438"
          },
          {
            "datetime": "2023-01-20 17:05:00",
            "open": "0.07438",
            "high": "0.07438",
            "low": "0.07438",
            "close": "0.07438"
          },
          {
            "datetime": "2023-01-20 17:04:00",
            "open": "0.07439",
            "high": "0.07439",
            "low": "0.07439",
            "close": "0.07439"
          },
          {
            "datetime": "2023-01-20 17:03:00",
            "open": "0.07439",
            "high": "0.07439",
            "low": "0.07439",
            "close": "0.07439"
          },
          {
            "datetime": "2023-01-20 17:02:00",
            "open": "0.07440",
            "high": "0.07440",
            "low": "0.07440",
            "close": "0.07440"
          },
          {
            "datetime": "2023-01-20 17:01:00",
            "open": "0.07443",
            "high": "0.07443",
            "low": "0.07440",
            "close": "0.07440"
          },
          {
            "datetime": "2023-01-20 17:00:00",
            "open": "0.07436",
            "high": "0.07443",
            "low": "0.07436",
            "close": "0.07443"
          },
          {
            "datetime": "2023-01-20 16:59:00",
            "open": "0.07436",
            "high": "0.07436",
            "low": "0.07436",
            "close": "0.07436"
          },
          {
            "datetime": "2023-01-20 16:58:00",
            "open": "0.07436",
            "high": "0.07436",
            "low": "0.07436",
            "close": "0.07436"
          },
          {
            "datetime": "2023-01-20 16:57:00",
            "open": "0.07436",
            "high": "0.07436",
            "low": "0.07436",
            "close": "0.07436"
          }
        ],
        "status": "ok"
      })

    const result = await service.find({
      query: {
        symbol: 'ETH/BTC',
      }
    })
    
    assert.ok(result)
  })
})
