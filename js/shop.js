let products=[
    {
        id:1,
        name:'T-shirt',
        price:"49.00",
        imgURL:"../imgs/shop/1.jpg",
        type:'men',
        cartCount:0
    },
    {
        id:2,
        name:'Sports Sneakers',
        price:"100.00",
        imgURL:"../imgs/shop/2.jpg",
        type:'shoes'
        ,
        cartCount:0
    },
    {
        id:3,
        name:'GYM Bag',
        price:"65.50",
        imgURL:"../imgs/shop/3.jpg",
        type:'bags'
        ,
        cartCount:0
    },
    {
        id:4,
        name:'Blue Shoes',
        price:"49.00",
        imgURL:"../imgs/shop/4.jpg",
        type:'shoes',
        cartCount:0
    },
    {
        id:5,
        name:'bandana',
        price:"5.00",
        imgURL:"../imgs/shop/5.jpg",
        type:'men',
        cartCount:0
    },
    {
        id:6,
        name:'Coat',
        price:"220.00",
        imgURL:"../imgs/shop/6.jpg",
        type:'women',
        cartCount:0
    },
    {
        id:7,
        name:'Shoes',
        price:"70.00",
        imgURL:"../imgs/shop/7.jpg",
        type:'shoes',
        cartCount:0
    },
    {
        id:8,
        name:'Jacket',
        price:"130.00",
        imgURL:"../imgs/shop/8.jpg",
        type:'men',
        cartCount:0
    },
    {
        id:9,
        name:'Backbag',
        price:"40.00",
        imgURL:"../imgs/shop/9.jpg",
        type:'bags',
        cartCount:0
    },
    {
        id:10,
        name:'Silver Watch',
        price:"300.00",
        imgURL:"../imgs/shop/10.jpg",
        type:'watches',
        cartCount:0
    },
    {
        id:11,
        name:'Hat',
        price:"35.00",
        imgURL:"../imgs/shop/11.jpg",
        type:'men',
        cartCount:0
    },
    {
        id:12,
        name:'White Sneakers',
        price:"130.00",
        imgURL:"../imgs/shop/12.jpg",
        type:'shoes',
        cartCount:0
    },
    {
        id:13,
        name:'Digital Watch',
        price:"350.00",
        imgURL:"../imgs/shop/13.jpg",
        type:'watches',
        cartCount:0
    },
    {
        id:14,
        name:'Brown Boots',
        price:"78.00",
        imgURL:"../imgs/shop/14.jpg",
        type:'shoes',
        cartCount:0
    },
    {
        id:15,
        name:'Ice cap',
        price:"12.00",
        imgURL:"../imgs/shop/15.jpg",
        type:'men',
        cartCount:0
    },
    {
        id:16,
        name:'Purpule T-shirt',
        price:"25.00",
        imgURL:"../imgs/shop/16.jpg",
        type:'men',
        cartCount:0
    },
    {
        id:17,
        name:'Colorful Sweater',
        price:"80.00",
        imgURL:"../imgs/shop/17.jpg",
        type:'women',
        cartCount:0
    },
    {
        id:18,
        name:'Yellow cap',
        price:"15.00",
        imgURL:"../imgs/shop/18.jpg",
        type:'men',
        cartCount:0
    },
    {
        id:19,
        name:'Black Sweater',
        price:"100.00",
        imgURL:"../imgs/shop/19.jpg",
        type:'men',
        cartCount:0
    },
    {
        id:20,
        name:'Musturd Cardigan',
        price:"85.00",
        imgURL:"../imgs/shop/20.jpg",
        type:'women',
        cartCount:0
    },
    {
        id:21,
        name:'Black Coat',
        price:"250.00",
        imgURL:"../imgs/shop/21.jpg",
        type:'men',
        cartCount:0
    },
    {
        id:22,
        name:'Blue Backbag',
        price:"35.00",
        imgURL:"../imgs/shop/22.jpg",
        type:'bags',
        cartCount:0
    },
    {
        id:23,
        name:'Green Shirt',
        price:"33.00",
        imgURL:"../imgs/shop/1.jpg",
        type:'men',
        cartCount:0
    }
    ,
    {
        id:24,
        name:'Black Watch',
        price:"330.00",
        imgURL:"../imgs/watches/1.jpg",
        type:'watches',
        cartCount:0
    }
    ,
    {
        id:25,
        name:'Leather Watch',
        price:"500.00",
        imgURL:"../imgs/watches/2.jpg",
        type:'watches',
        cartCount:0
    }
    ,
    {
        id:26,
        name:'Silver Watch',
        price:"330.00",
        imgURL:"../imgs/watches/3.jpg",
        type:'watches',
        cartCount:0
    }
    ,
    {
        id:27,
        name:'Black & Gold Watch',
        price:"800.00",
        imgURL:"../imgs/watches/4.jpg",
        type:'watches',
        cartCount:0
    }
 
]

/*const saveData=(products)=>{
     const finished=(error)=>{
         if(error){
             console.log(error);
             return;
         }
     }
    let data=JSON.stringify(products);
    writeFile('./data.json',data,finished)
}


saveData(products);*/

let ProductsDiv=document.querySelector(".my-products")
function viewProducts(text){

   if(text!=='all' ){
     let filtered=products.filter(product=>{
      return  product.type==text;
    
  })
 
    let filteredUi=filtered.map(item=>{
        return ` <div class="product text-center mx-auto col-lg-3 col-md-4 col-sm-12">
                <img src=${item.imgURL} class="img-fluid mb-3" alt="">
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h5 class="pro-name">${item.name}</h5>
                <h4 class="pro-price">${item.price}</h4>
               
                <button class="buy-btn"  onclick="window.location.href='../productDetails.html'">View Details</button>
            </div> `
        
    })
 
    ProductsDiv.innerHTML= filteredUi;
}else{
    let productUi=products.map(item=>{
        return ` <div class="product text-center mx-auto col-lg-3 col-md-4 col-sm-12"  >
                <img src=${item.imgURL} class="img-fluid mb-3" alt="">
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h5 class="pro-name">${item.name}</h5>
                <h4 class="pro-price">${item.price}</h4>
                <button class="buy-btn"  onclick="window.location.href='../productDetails.html'">View Details</button>
            </div> `
        
    })

    ProductsDiv.innerHTML=  productUi;
}
}

window.onload(viewProducts("all"));

/*----------------------------------*/
 /* let productDetail=[
    {
        title:' Home/T-shirt',
        subTitle:"Men's Fashion T shirt",
        price:'$49.00',
        main_Img:"../imgs/shop/1.jpg",
        small_Imgs:['../imgs/shop/1.jpg','../imgs/shop/24.jpg','../imgs/shop/25.jpg','../imgs/shop/26.jpg']
    },
    {
        title:' Sport Sneakers',
        subTitle:"Men's Fashion Sport Sneakers",
        price:'$100.00',
        main_Img:"../imgs/shop/2.jpg",
        small_Imgs:['../imgs/shop/2.jpg','../imgs/shop/24.jpg','../imgs/shop/25.jpg','../imgs/shop/26.jpg']
    }
]


     let detail=document.querySelector("#single-product");

      function product_details(url){
      
          if(url===productDetail.main_Img){
        
              let details=productDetail.map(pro=>{
                return`<div class="row mt-5 ">
                <div class="col-lg-5 col-md-12 col-sm-12">
                  <img src=${pro.main_Img} class="img-fluid w-100 pb-1 main-img" alt="" >
                
                </div>
                
                <div class="col-lg-6 col-md-12 col-sm-12">
                       <h6 class=" mt-3 title">${pro.title}</h6>
                       <h3 class="my-3 py-3">${pro.subTitle}</h3>
                       <h2>${pro.price}</h2>
                       <select class="my-3">
                         <option value="">Select size</option>
                         <option value="">XL</option>
                         <option value="">XXL</option>
                         <option value="">Small</option>
                         <option value="">Large</option>
                       </select>
                       <input type="number" value="1">
                       <button class="buy-btn">Add To Cart</button>
                       <h4 class="mt-5">Product Details</h4>
                       <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo minus fugiat, suscipit vel, repellat, dolorum molestias sapiente exercitationem asperiores provident odio ea blanditiis assumenda ex et voluptate repudiandae soluta facere!</span>
                </div>
              </div>
                `
               
              })
              detail.innerHTML=details;
          }
        
         
      }*/
    





