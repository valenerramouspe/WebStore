var React = require('react')
var ReactDOM = require('react-dom')
var Link = require('react-router').Link;

var Home = React.createClass({
  render: function(){
    return (
    	<div class="jumbotron homepage">
    		<div id="home_half_container">
      			<h1 class="display-3">Book Store</h1>
      			<p class="lead">Reading is dreaming with open eyes</p>
      			<Link to='/'><button type="submit">Book Store</button></Link>
            <Link to='/allproducts'><button type="submit">All Products</button></Link>
            <Link to='/createproduct'><button type="submit">Create Product</button></Link>
    		</div>
  		</div>
    )
  }
});

export default Home