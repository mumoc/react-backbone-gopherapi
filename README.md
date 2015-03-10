## Backbone + React + GopherApi(Spree)

This is just a testing app for backbone + react + gopherApi. It is based on the basic template from [jbhatab](https://github.com/jbhatab/middleman-backbone-react-template)

### Installation

```
git clone https://github.com/mumoc/react-backbone-gopherapi barego
cd barego
bundle install
bower install
middleman s
```

### Configuration

Right now, you'll need to modify the [gopher-api/index.js](https://github.com/mumoc/react-backbone-gopherapi/blob/master/source/javascripts/gopher_api/index.js.coffee) to include a valid ```Spree::User#token``` and the host where the ```GopherApi``` is runing
