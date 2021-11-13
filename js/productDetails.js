
/*let mainImg=document.querySelector(".main-img");
let smallImg=document.querySelectorAll(".small-img");
    for(let i=0;i<smallImg.length;i++){
       smallImg[i].addEventListener("click",function(){
           mainImg.src=smallImg[i].src;
       })
       }*/
      /* <div class="small-img-group ">
       <div class="small-img-col">
         <img src="imgs/shop/1.jpg" class="small-img" width="100%" alt="" >
       </div>
       <div class="small-img-col">
         <img src="imgs/shop/24.jpg"class="small-img"  width="100%" alt="" >
       </div>
       <div class="small-img-col">
         <img src="imgs/shop/25.jpg"class="small-img"  width="100%" alt="" >
       </div>
       <div class="small-img-col">
         <img src="imgs/shop/26.jpg"class="small-img"  width="100%" alt="" >
       </div>
    
     </div>*/

       let title="";
       let imgUrl='';
       let price='';
       const details=document.querySelector('.row');
       
  function productDetail(event){
    
        title=event.target.parentNode.children[2].innerText;
        imgUrl=event.target.parentNode.children[0].src;
        price=event.target.parentNode.children[3].innerText;
        
      
        const detailContent=`
        <div class="col-lg-5 col-md-12 col-sm-12">
        <img src=${imgUrl} class="img-fluid w-100 pb-1 main-img" alt="" >
    
      </div>
      
      <div class="col-lg-6 col-md-12 col-sm-12">
             <h6 class=" mt-3 title">Home / ${title}</h6>
             <h3 class="my-3 py-3">${title}</h3>
             <h2>${price}</h2>
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
        `
        
        details.innerHTML=detailContent;
        console.log(details)
       
     
    };


