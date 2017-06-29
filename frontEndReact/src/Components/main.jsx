var React = require('react')
var ReactDOM = require('react-dom')
import Nav from './nav.jsx';

var Main = React.createClass({
  render: function(){
    return (
      <div>
        Este es el main!!
        <div id="nav">
        	<Nav />
          {this.props.children}
        </div>
      </div>
    )
  }
});

export default Main;