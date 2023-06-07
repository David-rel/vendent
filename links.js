const aws4 = require('aws4')
const axios = require('axios')

// Your AWS credentials
const credentials = {
  accessKeyId: 'AKIARV2I7LKAJTSG3EY4',
  secretAccessKey: 'fvG44YCXmydM0tieGry6jNkmJgLWGJr61lLF4xFL',
}

// The service information
const service = {
  host: 'webservices.amazon.com',
  path: '/',
  service: 'ProductAdvertisingAPI',
  region: 'us-east-1',
  method: 'POST',
  body: JSON.stringify({
    Keywords: 'Harry Potter',
    Marketplace: 'www.amazon.com',
    PartnerTag: 'vendent-20',
    PartnerType: 'Associates',
    Resources: [
      'Images.Primary.Small',
      'ItemInfo.Title',
      'Offers.Listings.Price',
    ],
    SearchIndex: 'All',
  }),
  headers: {
    'content-type': 'application/json; charset=utf-8',
    'content-encoding': 'amz-1.0',
    'x-amz-target': 'com.amazon.paapi5.v1.ProductAdvertisingAPIv1.SearchItems',
  },
}

// Sign the request
const signed = aws4.sign(service, credentials)

// Send the request
axios(signed)
  .then((response) => {
    console.log(response.data)
  })
  .catch((error) => {
    console.error(error)
  })
