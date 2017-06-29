var React = require('react')
var ReactDOM = require('react-dom')
import CreateForm from '../Components/createForm.jsx';



var Create = React.createClass({

  handleCreate: function(input){
    console.log(input)
    fetch('http://localhost:3000/products', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          name: input.name,
          price: Number(input.price),
          description: input.description,
          imageURL: input.imageURL
        })
    })
  },
  render: function(){
    console.log('this',this)
    return (
      <div>
        <div>
          <CreateForm
          handleCreate = {this.handleCreate}
          />
        </div>

      </div>
    )
  }
})

export default Create;