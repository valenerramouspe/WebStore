/* Homepage */
const loadHome = function () {
 $(".controlContainer").html(`
  <div class="jumbotron homepage">

    <div id="home_half_container">
      <h1 class="display-3">Book Store</h1>
      <p class="lead">Reading is dreaming with open eyes</p>
      <div id="home_button_container">
        <button class="button" id="linkToAllProductsButton" type="button">See All Books</button>
      </div>
    </div>

  </div>
`);
  $('#linkToAllProductsButton').click(function(){
    loadProducts();
  });
};

loadHome();

/* Load All Products functionality to be used by NavBar link and Button */
const loadProducts = function() {
  let productTemplate = `<h1 id="all_products_h1">The Book Store's Books</h1><div class="container"><div class="row">`;

  jQuery.ajax({
    method:'GET',
    url:'http://localhost:3001/products',
    success: function(data, textStatus) {
      //console.log(data, textStatus)
      let products = data;
      for (let i = 0; i < products.length; i++) {
        productTemplate +=
        `<div class="col-4">
        <a class="linkToSingleProduct" data-idProduct="${products[i]._id}">
          <div class="thumbnail a thumbnail_allproducts">
            <img class="imgLink img_style_in_allproducts_view" src="${products[i].imageURL}">
              <div class="caption">
                <p class="info"><strong>Name:</strong> ${products[i].name}</p>
                <p class="info"><strong>Price:</strong> ${products[i].price}</p>
                <p class="info"><strong>Description:</strong> ${products[i].description}</p>
            </div>
          </div>
        </a>
        </div>`
        /*
        The data-* (data-[blank]) attributes gives us the ability to embed custom data attributes on all HTML elements. The stored (custom) data can then be used in the page's JavaScript to create a more engaging user experience (without any Ajax calls or server-side database queries).
        getAttribute() method gets the value of any data-* attribute (~Using native JS, that is, no jQuery/ JS independent of host environment)
        */
      }

      productTemplate += `</div></div>`
      $(".controlContainer").html(productTemplate);
      $('.linkToSingleProduct').click(function(){
        // Attaching event handler to every element with class="linkToSingleProduct"
        // HERE: 'this' refers to the native object representation of <a> element in the DOM
        const productClickedOn = this.getAttribute('data-idProduct');
        loadSingleProduct(productClickedOn);
      });
    }
  });
};


const loadSingleProduct = function (productId) {
  jQuery.ajax({
    method:'GET',
    url:'http://localhost:3001/products/' + productId,
    success: function(product) {
      //console.log(productData);
      $(".controlContainer").html(`
        <div class="container">

          <div class="row">

            <div class="col-md-3">

                <h1>Book Store</h1>
                <p>Follow us on Instagram!</p>
                <img class="sidebar_image" src="http://cdn-img.instyle.com/sites/default/files/styles/original/public/images/2017/04/042617-french-bookstore-instagram.jpg?itok=ah56g8z5">

            </div>

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
                </div>
            </div>

            <hr>

            <div class="row">
                <div class="col-md-12">
                    <span class="pull-right">Comment date here</span>
                    <p>Comment (2) here</p>
                </div>
            </div>

            <hr>

            <div class="row">
                <div class="col-md-12">
                    <span class="pull-right">Comment date here</span>
                    <p>Comment (3) here</p>
                </div>
            </div>

            <hr>

            </div>

            </div>

            </div>

        </div>
        `)
    }
  });
};


/* Homepage click event */
$('#linkToHome').click(function(event) {
  loadHome();
});



/* All Products page click event */
$('#linkToAllProducts').click(function() {
  loadProducts();
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
