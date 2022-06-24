const api_list=document.querySelector(".container");
const arr=[];



if(localStorage.arr){
    console.log("ya no consumo la api");
    let varia=[];
    varia = JSON.parse(localStorage.arr);
    component(varia) ;
}else{
    
    console.log("primera vez");
    for( let i = 1; i<=2 ; i++){
        fetch(`https://reqres.in/api/users?page=${i}`)
        .then((response)=>response.json())
        .then((users)=>{
                (users.data).forEach(element => {
                    arr.push(element);  
                   
                }); 
                if(i==2){
                    localStorage.arr=JSON.stringify(arr); 
                    component(arr); 
                }
        });
    }
}


function component(contenedor){
    console.log(contenedor);
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
                <button onclick="modal(${element.id})"  >Open Modal</button>
            </div>
        </div>
    </div>` 
       
    });
}





function modal(id)
{ 
    let modals=document.querySelector(".modal");
    modals.style.display="flex";

    let body=document.querySelector(".bodymodal");
    let varias=[];
    varias = JSON.parse(localStorage.arr);
    console.log(id);
    let datos=varias.filter(varia=>varia.id == id)
   console.log(datos[0].avatar);
   
   body.innerHTML+=` <div class="bg">
        <div class="container-m ">
            
            
                    <img  src="${datos[0].avatar}" alt="">
                
            
        </div>
        <div class=" ">
            <div class="espacio">
                <h3>usuario:
                   ${datos[0].id}
                   ${datos[0].first_name}
                   ${datos[0].last-name}
                </h3>
               
                <div>
                <p>${datos[0].email}</p>
                </div>
            </div>
        </div>
    </div>` ;
}
function cerramodal(){
    let body=document.querySelector(".bodymodal").innerHTML="";
   
    let modals=document.querySelector(".modal");
    modals.style.display="none";
} 