GopherApi.Collections.Taxonomies = Backbone.Collection.extend({
  url: GopherApi.Config.host + '/api/taxonomies',
  model: GopherApi.Models.Taxonomy,

  parse: function(response, options) {
    this.pagination = _.omit(response, 'taxonomies');
    return response.taxonomies;
  }
})
