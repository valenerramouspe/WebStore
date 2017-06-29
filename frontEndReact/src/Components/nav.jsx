var React = require('react')
var ReactDOM = require('react-dom')
var Link = require('react-router').Link;
var Nav = React.createClass({

  render: function(){
    return (

<div>      
      <div>
    	<Link to='/'><button type="submit">Book Store</button></Link>
      <button>
 All products
       </button>
      <Link to='/createproduct'><button type="submit">Create Product</button></Link>
       </div>
  	 
</div> 
    )
  }
});

export default Nav;