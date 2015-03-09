GopherApi.Collections.Products = Backbone.Collection.extend({
  url: 'http://localhost:5000/api/products?token=d89ffcec5c8adfc0992c58968f5efa14bab1ee5d3c3f625e',
  model: GopherApi.Models.Product,

  parse: function(response, options) {
    return response.products;
  }
});
