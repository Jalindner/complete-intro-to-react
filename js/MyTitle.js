var React = require('react')
var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  render () {
    const propfn = {color: this.props.color}
    return (
      <div>
        <h1 style={propfn}>
          {this.props.title}
        </h1>
      </div>
    )
  }
})

module.exports = MyTitle
