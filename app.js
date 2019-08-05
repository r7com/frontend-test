var app         = require('connect')()
var serveStatic = require('serve-static')

app.use(serveStatic('public'))

console.log(' ➜   Open: http://localhost:7007')
app.listen(7007)
