const http = require('http');
const router = require('./router.js');
const uuid = require('uuid');

var simpleResource = {id: 1, name: "Megan", age: 25, content: "hey I'm Meg"}

// function Note(id, name, content) {
//   this.id = id;
//   this.name = name;
//   this.content = content;
// }

router.get('/api', (request, response) => {
  if(!request.url.query.id){
    response.writeHead(400);
    response.end();
    return;
  }

  if(!simpleResource[request.url.query.id]){
    response.writeHead(404);
    response.end();
    return;
  }

  response.writeHead(200, {
    'Content-Type': 'application/json',
  });
  response.write(JSON.stringify(simpleResource[request.url.query.id]));
  response.end();
  return;
});

module.exports = http.createServer(router.route);