# Install
```
npm install make-sure-auth
```
# Description
Use it as a Middleware to protect your private page.
# Example
You need to use your users session as user.
This is the example of your session
```
req.user.role = 'admin';

```
Example of how to use.

```
const make_sure_auth = require('make_sure_auth');

app.use('/admin', make_sure_auth.isAdmin, function(req, res, next){
   // only admin and developer can acess.
   //Otherwise redirect to /not-allow page.
};
app.use('/worker', make_sure_auth.isWorker, function(req, res, next){
  // only admin, developer, worker can access
  //Otherwise redirect to /not-allow page.
};
app.use('/user', make_sure_auth.isUser, function(req, res, next){
  // admin, worker, developer, user can access.
  //Otherwise redirect to /login page.
};

```
