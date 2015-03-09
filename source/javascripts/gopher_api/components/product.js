var ProductListItem = React.createClass({
  render: function() {
    return (
      React.DOM.div({ className: 'col-md-3 product-list-item'},
        React.DOM.div({ className: 'panel panel-default' },
          React.DOM.div({ className: 'panel-body text-center product-body' },
            React.DOM.a({ href: '/products/' + this.props.product.slug },
              React.DOM.img({ alt: this.props.product.name, src: this.props.product.master.images[0].small_url }, null)
            ),
            React.DOM.br({}, null),
            React.DOM.a({ className: 'info', title: this.props.product.name, href: '/products/' + this.props.product.slug },
              this.props.product.name
            )
          ),
          React.DOM.div({ className: 'panel-footer text-center' },
            React.DOM.span({},
              React.DOM.span({ className: 'price' }, this.props.product.price)
            )
          )
        )
      )
    )
  }
});

var ProductsList = React.createClass({
  mixins: [Backbone.React.Component.mixin],

  render: function() {
    var products = [];

    this.getCollection().forEach(function(product){
      products.push(React.createElement(ProductListItem, { product: product.attributes, key: product.attributes.id }))
    });

    return (
      React.DOM.div({ id: 'products', className: 'row' }, products)
    )
  }
});

var ProductsSection = React.createClass({
  mixins: [Backbone.React.Component.mixin],

  render: function() {
    return (
      React.DOM.div({ 'data-hook': 'homepage_products' },
        React.createElement(ProductsList),
        React.createElement(Paginator, { pagination: this.state.pagination })
      )
    )
  }
});

