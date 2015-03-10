var Taxonomy = React.createClass({
  render: function() {
    return (
      //There is no way to return more than one element
      //(I like it, but spree is not so good speaking of html structure)
      //That's the reasong of the extra div here
      React.DOM.div({ },
        React.DOM.h4({ className: 'taxonomy-root' }, 'Shop by ' + this.props.taxonomy.name),
        React.createElement(TaxonTree, { taxon: this.props.taxonomy.root })
      )
    )
  }
});

var TaxonomiesList = React.createClass({
  mixins: [Backbone.React.Component.mixin],

  render: function() {
    var taxonomies = [];

    this.getCollection().forEach(function(taxonomy) {
      taxonomies.push(React.createElement(Taxonomy, { taxonomy: taxonomy.attributes }))
    });

    return (
      React.DOM.nav({ id: 'taxonomies', className: 'sidebar-item' }, taxonomies)
    )
  }
});

var TaxonomiesSection = React.createClass({
  mixins: [Backbone.React.Component.mixin],

  render: function() {
    return (
      React.DOM.div({ id: 'taxonomies-list' },
        React.createElement(TaxonomiesList)
      )
    )
  }
});

