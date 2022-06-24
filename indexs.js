
const API_URL ="https://reqres.in/api/users?page=1";
const API_URL2 ="https://reqres.in/api/users?page=2";

/*  */
const api_list=document.querySelector(".container");
if(localStorage.arr){
    console.log("ya no consumo la api");
    let varia=[];
    varia = JSON.parse(localStorage.arr);
    console.log(varia);
    component(varia) ;
}else{
    let arr=[];
    console.log("primera vez");
    fetch(`${API_URL}`)
    .then((response)=>response.json())
    .then((users)=>{
        (users.data).forEach(element => {
            arr.push(element); 
              
        });
        
})
fetch(`${API_URL2}`)
    .then((response)=>response.json())
    .then((users)=>{ 
        (users.data).forEach(element => {
            arr.push(element);
            
        });
        localStorage.arr=JSON.stringify(arr);    
        
        component(arr) ;
})


}


function component(contenedor){
    
    contenedor.forEach(element => {
         api_list.innerHTML+=` <div class="card">
        <div class="slide slide1">
            <div class="content">
                <div class="icon">
                    <img  src="${element.avatar}" alt="">
                </div>
            </div>
        </div>
        <div class="slide slide2">
            <div class="content">
                <h3>
                   ${element.id}
                   ${element.first_name}
                   ${element.last-name}
                </h3>
               
                <div>
                <p>${element.email}</p>
                </div>
                <button id="btn" >Open Modal</button>
            </div>
        </div>
    </div>` 
       
    });
}

/* const $btn=document.getElementById("btn");
const $cerrar=document.getElementById("cerrar");

const $modal=document.getElementById("modals");

$btn.addEventListener("click", modals);
$cerrar.addEventListener("click", cerramodal);
function modals(){
   $modal.classList.replace("d-none","d-flex")
}
function cerramodal(){
    $modal.classList.replace("d-flex","d-none")
} */