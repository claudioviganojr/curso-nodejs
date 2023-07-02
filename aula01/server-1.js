// const http = require('http')

import http from 'http'


http.createServer((req, res) => {
  
  res.end('Ola mundo - aula')

}).listen(3033)
