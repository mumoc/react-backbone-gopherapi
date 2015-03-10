GopherApi.Collections.Products = Backbone.Collection.extend({
  url: GopherApi.Config.host + '/api/products',
  model: GopherApi.Models.Product,

  parse: function(response, options) {
    this.pagination = _.omit(response, 'products');
    return response.products;
  }
});
