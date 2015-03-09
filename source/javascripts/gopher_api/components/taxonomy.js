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
  render: function() {
    var taxonomies = [];

    this.props.taxonomies.forEach(function(taxonomy) {
      taxonomies.push(React.createElement(Taxonomy, { taxonomy: taxonomy, key: taxonomy.id }))
    });

    return (
      React.DOM.nav({ id: 'taxonomies', className: 'sidebar-item' }, taxonomies)
    )
  }
});

var TaxonomiesSection = React.createClass({
  loadTaxons: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',

      success: function(response) {
        this.setState({ taxonomies: response.taxonomies });
      }.bind(this),

      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  getInitialState: function() {
    return { taxonomies: [] };
  },

  componentDidMount: function() {
    this.loadTaxons();
  },

  render: function() {
    return (
      React.DOM.div({ id: 'taxonomies-list' },
        React.createElement(TaxonomiesList, { taxonomies: this.state.taxonomies })
      )
    )
  }
});

