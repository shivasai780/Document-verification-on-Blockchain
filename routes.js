const routes = require("next-routes")();

routes
  .add("/Org/new", "/Org/new")
  .add("/Org/:address", "/Org/show")
  .add("/Org/:address/Add", "/Org/Add")
  .add("/Org/:address/Delete", "/Org/Delete")
  .add("/Org/:address/Verify", "/Org/Verify"); //: this part will be wild card a variable of source
//.add("/Banks/:address/new", "/Banks/Customersadd")
//.add("/Banks/:address/Customers/new", "/Banks/requests/new");
module.exports = routes;
