/* Homepage */
const loadHome = function () {
 $(".controlContainer").html(`
  <div class="jumbotron homepage">

    <div id="home_half_container">
      <h1 class="display-3">Book Store</h1>
      <p class="lead">Reading is dreaming with open eyes</p>
      <div id="home_button_container">
        <button class=button type="button">See All Books</button>
      </div>
    </div>

  </div>
`);
};

loadHome();

/* Homepage click event */
$('#linkToHome').click(function(event) {
  loadHome();
});

/* All Products page click event */
const product = [
  {
    id: 1,
    imageURL: 'https://about.canva.com/wp-content/uploads/sites/3/2015/01/creative_bookcover.png',
    name: 'asdas',
    price: 12,
    description: 'description'
  },

{
  id : 2,
  imageURL : "http://www.creativindie.com/wp-content/uploads/2013/10/Enchantment-Book-Cover-Best-Seller1.jpg",
  name : "zxczcxz",
  price : 12,
  description : "asd"
},
{
  id : 3,
  imageURL : "https://about.canva.com/wp-content/uploads/sites/3/2015/01/vintage_bookcover.png",
  name : "asdas",
  price : 12,
  description : "asd"
},
{
  id : 4,
  imageURL : "https://about.canva.com/wp-content/uploads/sites/3/2015/01/children_bookcover.png",
  name : "asdas",
  price : 12,
  description : "asd"
},
{
  id : 5,
  imageURL : "asd",
  name : "asdas",
  price : 12,
  description : "asd"
},
{
  id : 6,
  imageURL : "asd",
  name : "asdas",
  price : 12,
  description : "asd"
},
{
  id : 7,
  imageURL : "asd",
  name : "asdas",
  price : 12,
  description : "asd"
},
{
  id : 8,
  imageURL : "asd",
  name : "asdas",
  price : 12,
  description : "asd"
}

];

$('#linkToAllProducts').click(function() {
  let productTemplate = `<h1>Nuestros productos</h1><div class="container"><div class="row">`;

  for (let i = 0; i < product.length; i++) {
    productTemplate +=
    `<div class="col-md-4">
    <a id="singleBook">
      <div class="thumbnail a">
        <img class = "imgLink" data-idProduct = "${product[i].id}" src="${product[i].imageURL}">
          <div class="caption">
            <p class="info"><strong>Name:</strong> ${product[i].name}</p>
            <p class="info"><strong>Price:</strong> ${product[i].price}</p>
            <p class="info"><strong>Description:</strong> ${product[i].description}</p>
        </div>
      </div>
    </a>
    </div>`
  }

  productTemplate += `</div></div>`
  $(".controlContainer").html(productTemplate);
});



$('.controlContainer').on('click', '.imgLink', function(element){
  getSingleProduct(element.target.attributes[1].value)
  .done(function(product) {
    const productSingleTemplate = `<div class="container">

  <div class="row">
    <div class="col-md-9">
    <div class="thumbnail">
        <img class="img-responsive" src="${product.imageURL}" alt="">
        <div class="caption-full">
            <h4 class="pull-right">$ ${product.price}</h4><br>
            <h4>${product.name}</h4>
            <p>${product.description}</p>
        </div>
    </div>
    <div class="comments">
        <p class="pull-right">Comments</p>
    </div>
    <div class="well">
    <div class="text-right">
        <a class="btn btn-success">Leave a Comment</a>
    </div>
    <hr>
    <div class="row">
        <div class="col-md-12">
            <span class="pull-right">Comment date here</span>
            <p>Comment (1) here</p>
            <input>
        </div>
    </div>
    <hr>
    <div class="row">
        <div class="col-md-12">
            <span class="pull-right">Comment date here</span>
            <p>Comment (2) here</p>
            <input>
        </div>
    </div>
    <hr>
    <div class="row">
        <div class="col-md-12">
            <span class="pull-right">Comment date here</span>
            <p>Comment (3) here</p>
            <input>
        </div>
    </div>
    <hr>
    </div>
    </div>
    </div>
</div>
`
   $(".controlContainer").html(productSingleTemplate); 
  })
  .fail(function(data) {
    console.log('fail');
  })
  
});

/* Create product form click event*/
$('#linkToCreate').click(function(event) {
  $('.controlContainer').html(`
    <div id="form_container"><br>

    	<h2>Create a new product</h2><br>
    <form id = "formCreate">
    		<h4>Enter product name:</h4>
    		<input type="text" id = "name" name="name" placeholder="Book name"><br><br>
    		<h4>Enter product price:</h4>
    		<input type="text" name="price" id = "price" placeholder="Book price"><br><br>
    		<h4>Enter product description:</h4>
    		<input type="text" name="description" id = "description" placeholder="Book description"><br><br>
    		<h4>Enter link to product image</h4>
    		<input type="text" name="image" id = "image" placeholder="image URL"><br><br>
    		<button type="submit" id='formButton'>Enviar</button>
        </form>
    </div>
 `);
});


$('.controlContainer').on('click', '#formButton',function(event) {
  event.preventDefault();
  const product = {
    name : $('#formCreate #name').val(),
    price : $('#formCreate #price').val(),
    description : $('#formCreate #description').val(),
    imageURL :$('#formCreate #image').val()
  } 

  $.post( "http://localhost:3000/products", product,function( data ) {
    alert('Producto creado' + data);
    $('#formCreate #name').val('');
    $('#formCreate #price').val('');
    $('#formCreate #description').val('');
    $('#formCreate #image').val('');
  });

})

const getSingleProduct = function(id) {
  return $.get('products/'+id)
}


const createProduct = function(id) {
  return $.post('products/',{})
}


