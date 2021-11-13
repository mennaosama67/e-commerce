




/* Set the width of the sidebar to 300px (show it) */
function openNav() {
    document.getElementById("mySidepanel").style.width = "300px";
    let ele=document.querySelector(".card")
    console.log(ele)
  }
  
  /* Set the width of the sidebar to 0 (hide it) */
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }


  function onLoadCart (){
    let productNumber=localStorage.getItem('cartNumber')
    if(productNumber){
      document.querySelector('.cart').textContent=productNumber;
    }
  }
 function AddCart(event){
  let _imgSrc=event.target.parentNode.children[0].src;
  let title=event.target.parentNode.children[1].innerText;
  let price=event.target.parentNode.children[2].innerText;
  let quantity=event.target.parentNode.children[3].value;
   let productNumber=localStorage.getItem('cartNumber')
   
   productNumber=parseInt(productNumber);
   quantity=parseInt(quantity)
   if(productNumber&&quantity==1){
    localStorage.setItem('cartNumber',productNumber+quantity);
    document.querySelector('.cart').textContent=productNumber+quantity;
  }
    else if(productNumber&&quantity>1){
      localStorage.setItem('cartNumber',productNumber+(quantity-1));
      document.querySelector('.cart').textContent=productNumber+(quantity-1);
    }
   else{
    localStorage.setItem('cartNumber',quantity);
    document.querySelector('.cart').textContent=quantity;
   }
 
   setItems(title,price,quantity);
   totalCost(price,quantity);
 }

 function setItems(title,price,quantity){
  let cartItem=[];
  let stored=localStorage.getItem('productInCart');
  cartItem=stored?JSON.parse(stored):[];

   if(cartItem&&title!==cartItem.title){
    cartItem.quantity+=1;
    cartItem=[
     ...cartItem,
    { title,price,quantity}
  ]

  }
  else{
      quantity=1;
      cartItem=[
        {title,price,quantity}
      ]
  }
        localStorage.setItem('productInCart',JSON.stringify (cartItem))
 }
onLoadCart();
function totalCost (price,quantity){
  let total=localStorage.getItem('total');
   price=parseInt(price);
   quantity=parseInt(quantity)
   total=parseInt(total)
  if(total){
  let totalPrice=total+( price * quantity);
     localStorage.setItem('total',totalPrice)}
     else{
      let totalPrice=price * quantity;
      localStorage.setItem('total',totalPrice)
     }
}



function viewDetails(event){
   
  let _img=event.target.parentNode.children[0].src;
  let proName=event.target.parentNode.children[2].innerText;
  let proPrice=event.target.parentNode.children[3].innerText;
  let modal=document.querySelector(".modal-container");



let htmlString = `<div id="extraLargeModal" class="modal fade bd-example-modal-lg" >
<div class="modal-dialog modal-lg">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title">Product Details</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"><i class="fas fa-times"></i></button>
        </div>
        <div class="modal-body">
          <section id="single-product" class="container mb-5">
            <div class="row mt-5 ">
              <div class="col-lg-5 col-md-12 col-sm-12">
              
                <img src= ${_img} class="img-fluid w-100 pb-1 main-img" >
             
            
              </div>
              
              <div class="col-lg-6 col-md-12 col-sm-12">
                     <h6 class=" mt-3 title">Home /${proName}</h6>
                     <h3 class="my-3 py-3">${proName}</h3>
                     <h2>${proPrice}</h2>
                       
                     <input type="number" value="1">
                     <button class="buy-btn add-cart" onClick="AddCart(event)">Add To Cart</button>
                     <h4 class="mt-5">Product Details</h4>
                     <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo minus fugiat, suscipit vel, repellat, dolorum molestias sapiente exercitationem asperiores provident odio ea blanditiis assumenda ex et voluptate repudiandae soluta facere!</span>
              </div>
            </div>
           
          </section>
          
        </div>
       
    </div>
</div>
</div>`
   modal.innerHTML= htmlString;
  

}
