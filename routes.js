/* ---------------------
routes.js 

For web clients (http and https) you can define an optional RESTful mapping to help route requests to actions.
If the client doesn't specify and action in a param, and the base route isn't a named action, the action will attempt to be discerned from this routes.js file.

- routes remain optional
- actions defiend in params directly `action=theAction` or hitting the named URL for an action `/api/theAction` will always override RESTful routing 
- the hierarchy of the routes object is prefix --> REST verb -> data
- you can mix explicitly defined params with route-defined params.  If there is an overlap, the explicitly defined params win
- data contains the 'action' to map to, and then an optional urlMap (api.params.mapParamsFromURL)
- only single depth routes are supported at this time

---------------------- */

/////////////
// EXAMPLE //
/////////////

exports.routes = {

  get: [
    { path: "/users", action: "usersList" }, // (GET) /api/users
    { path: "/search/:term/limit/:limit/offset/:offset", action: "usersList" }, // (GET) /api/search/car/limit/10/offset/100
  ],

  post: [
    { path: "/login/:userID", action: "login" } // (POST) /api/login/123
  ],

  all: [
    { path: "/user/:userID", action: "user" } // (*) / /api/user/123
  ]

};
