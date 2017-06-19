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
  console.log('asdasd');
  let productTemplate = `<h1>Nuestros productos</h1><div class="container"><div class="row">`;

  for (let i = 0; i < product.length; i++) {
    productTemplate +=
    `<div class="col-4">
    <a>
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
  console.log(element.target.attributes[1].value)
  /*$('.imgLink').each(function(element) {
    element.click(function(event) {
      console.log(event);
      $('.controlContainer').html(`
        <div> </div>
     `);
  })

})*/
});

/* Create product form click event*/
$('#linkToCreate').click(function(event) {
  console.log("fdjfjkhkdsj");
  $('.controlContainer').html(`
    <div id="form_container"><br>

    	<h2>Create a new product</h2><br>
    	<form action="/products" method="post">

    		<h4>Enter product name:</h4>
    		<input type="text" name="name" placeholder="Book name"><br><br>
    		<h4>Enter product price:</h4>
    		<input type="text" name="price" placeholder="Book price"><br><br>
    		<h4>Enter product description:</h4>
    		<input type="text" name="description" placeholder="Book description"><br><br>
    		<h4>Enter link to product image</h4>
    		<input type="text" name="image" placeholder="image URL"><br><br>
    		<input type="submit" name="submit">

    	</form>

    </div>
 `);
});
