#= require_self
#
#= require_tree './models'
#= require_tree './collections'
#= require_tree './components'

LocalConfig = {
  token: 'd89ffcec5c8adfc0992c58968f5efa14bab1ee5d3c3f625e',
  host: 'http://localhost:5000'
}

window.GopherApi =
  Models: {}
  Collections: {}
  Views: {}
  Mixins: {}
  Config: LocalConfig

