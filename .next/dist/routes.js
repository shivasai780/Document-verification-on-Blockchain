"use strict";

var routes = require("next-routes")();

routes.add("/Org/new", "/Org/new").add("/Org/:address", "/Org/show").add("/Org/:address/Add", "/Org/Add").add("/Org/:address/Delete", "/Org/Delete").add("/Org/:address/Verify", "/Org/Verify"); //: this part will be wild card a variable of source
//.add("/Banks/:address/new", "/Banks/Customersadd")
//.add("/Banks/:address/Customers/new", "/Banks/requests/new");
module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUNHLEFBREgsSUFDTyxBQURQLFlBQ21CLEFBRG5CLFlBRUcsQUFGSCxJQUVPLEFBRlAsaUJBRXdCLEFBRnhCLGFBR0csQUFISCxJQUdPLEFBSFAscUJBRzRCLEFBSDVCLFlBSUcsQUFKSCxJQUlPLEFBSlAsd0JBSStCLEFBSi9CLGVBS0csQUFMSCxJQUtPLEFBTFAsd0JBSytCLEFBTC9CLEEsZ0JBSytDO0FBQy9DO0FBQ0E7QUFDQSxPQUFPLEFBQVAsVUFBaUIsQUFBakIiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3NoaXZhL0RvY3VtZW50cy9yZWFjdF9yZXZpY2UvY2VydGlmaWNhdGVfdmVyaWZ5In0=