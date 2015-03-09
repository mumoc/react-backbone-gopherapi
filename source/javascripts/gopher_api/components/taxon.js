var Taxon = React.createClass({
  render: function() {
    return (
      React.DOM.a(
        { className: 'list-group-item', href: '/t/' + this.props.taxon.permalink },
        this.props.taxon.name))
  }
});

var TaxonTree = React.createClass({
  render: function() {
    var taxons = [];

    this.props.taxon.taxons.forEach(function(taxon){
      taxons.push(React.createElement(Taxon, { taxon: taxon, key: taxon.id}))
    });

    return (
      React.DOM.div(
        { className: 'list-group' },
        taxons)
    )
  }
});

