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
  render: function() {
    var products = [];

    this.props.products.forEach(function(product){
      products.push(React.createElement(ProductListItem, { product: product, key: product.id }))
    });

    return (
      React.DOM.div({ id: 'products', className: 'row' }, products)
    )
  }
});

var ProductsSection = React.createClass({
  loadProducts: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',

      success: function(response) {
        products = response.products;
        delete response.products;
        this.setState({ products: products, pagination: response });
      }.bind(this),

      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  //This method is called once in the divfetime of the class
  getInitialState: function() {
    return { products: [], pagination: {} };
  },

  //This method is called when the component is rendered
  componentDidMount: function() {
    this.loadProducts();
  },

  render: function() {
    return (
      React.DOM.div({ "data-hook": 'homepage_products' },
        React.createElement(ProductsList, { products: this.state.products })
        //React.createElement(Paginator, { pagination: this.state.pagination })
      )
    )
  }
});
