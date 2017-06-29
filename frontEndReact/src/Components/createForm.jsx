var React = require('react')
var ReactDOM = require('react-dom')

var CreateForm = React.createClass({
  getValue(e){
    e.preventDefault()
    const obj = {
      name: this.refs.name.value,
      price: this.refs.price.value,
      description: this.refs.description.value,
      imageURL: this.refs.image.value
    }
    this.props.handleCreate(obj)
    this.clear();
  },
  clear(){
    console.log(this);
    this.refs.name.value = '';
    this.refs.price.value = '';
    this.refs.description.value = '';
    this.refs.image.value = '';
  },
  render: function(){

    return (
      <div>
        <h2>Create a new product</h2>
        <br />
  <form method="post">

    <h3>Enter product name:</h3>
      <input type="text" ref="name" placeholder="Book name" /><br />
    <h3>Enter product price:</h3>
      <input type="text" ref="price" placeholder="Book price" /><br />
    <h3>Enter product description:</h3>
      <input type="text" ref="description" placeholder="Book description" /><br />
    <h3>Enter link to product image</h3>
      <input type="text" ref="image" placeholder="image URL" /><br />
      <input type="submit" onClick={this.getValue} />

   </form>
   </div>
    )
  }
});

export default CreateForm