# HPD Violations Web

A website to easily look up housing violations for any building in NYC.

See it in action: [violations.nycchr.org](https://violations.nycchr.org/)

There are two companion projects that this relies on:

[hpd-violations](https://github.com/aepyornis/hpd-violations) - A postgres database built from HPD open data.

[hpd-violations-server](https://github.com/aepyornis/hpd-violations-server) - A simple nodejs server serving JSON from the database

### Develop:

This is a react/redux app. 

Install dependencies: ``` npm install ```

Develop: ``` npm start ``` and ``` npm run test:watch ``` 

Test: ``` npm test ```

Build: ``` npm run prod ``` and then host the dist/ folder.

#### config.js:

``` javascript

module.exports = {
  geoclient: {
    appid: 'your-nyc-developer-geoclient-app-id',
    appkey: 'your-nyc-developer-geoclient-appkey',
    proxyurl: 'geoclient proxy url'
  },
  violations: {
    url: 'url-to-hpd-violations-server'
  }
};


```

#### NYC GEOCLIENT proxy pass

The [geoclient api](https://api.cityofnewyork.us/geoclient/v1/doc) does not accept [cross-origin requests](http://enable-cors.org/). I proxy pass the requests via ngnix using this configuration:

``` 
location / {
                proxy_pass https://api.cityofnewyork.us/geoclient/v1/address.json;
                add_header 'Access-Control-Allow-Origin' '*';
                add_header 'Access-Control-Allow-Credentials' 'true';
                add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
                add_header 'Access-Control-Allow-Headers' 'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type';
        }

```




