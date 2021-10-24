const requestParse = require('./request-parse.js');
const routes = {
  GET: {}
};

const router = module.exports = {}; //how is this being defined in exports already if it is empty?

// this makes a new key "get", which has a value that is a callback, and assigns a new array value that is the callback function
router.get = (pathname, callback) => {
  routes.GET[pathname] = callback;
}

//so with lines 33-37 in server.js, it would nlook like this
/*
 router = {
  get: [GET '/api/simple-resource',]
}

routes = {
  GET: {
    response.writeHead(200, {
    'Content-Type': 'application/json',
       });
   response.write(JSON.stringify(simpleResource[request.url.query.id]));
   response.end();
    return;
  }
}
*/


router.route = (request, response) => {
  requestParse(request, (error) => {
    if (error) {
      response.writeHead(400);
      response.end();
      return;
    }
    let routeHandler = routes[request.method][request.url.pathname];
    if (routeHandler) {
      routeHandler(request, response);
      response.end();
      return;
    } else {
      response.writeHead(404);
      response.end();
      return;
    }
  });
};