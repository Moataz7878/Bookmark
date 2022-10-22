var siteName=document.getElementById("siteName");
var siteUrl=document.getElementById("siteUrl"); 
var ProductsContainer =[];

if (localStorage.getItem("Products") !=null) {
    ProductsContainer = JSON.parse(localStorage.getItem("Products"));
    displayData();
  }

function addProduct() {
    var Product = {
        name:siteName.value,
        url:siteUrl.value,
    }
    ProductsContainer.push(Product);
    localStorage.setItem('Products', JSON.stringify(ProductsContainer))
    clearForm()
    displayData()
}

function clearForm() {
    siteName.value="";
    siteUrl.value="";
    console.log("holle")
}



function displayData() {
    var cartona = ``;
    for (var i = 0; i < ProductsContainer.length; i++) {
         cartona += `<div class="d-flex justify-content-between w-50  box-shadow: 2px 5px 3px 0px #888;">
         <div class="d-flex align-content-center">
         <h3 >${ProductsContainer[i].name}</h3>
         </div>
         <div>
         <a  onclick="deleteProduct(${i})" class="btn btn-primary " href="http:${i}" target="_blank">visit</a> 
         <button onclick="deleteProducts(${i})" class="btn btn-danger btndelete ">Delete</button> 
         </div>
         </div>
          `;

    }
    document.getElementById('tableBody').innerHTML = cartona
}
function deleteProducts(deleteIndex) {
    ProductsContainer.splice(deleteIndex,1);
    localStorage.setItem('Products', JSON.stringify(ProductsContainer));
    displayData(); 
   }
