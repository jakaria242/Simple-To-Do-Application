


let input = document.querySelector(".input")
let addbtn = document.querySelector(".add_btn")
let delbtn = document.querySelector(".del_btn")
let error = document.querySelector(".error")
let ol = document.querySelector(".ol")
let olerror = document.querySelector(".olerror")
let todoarr = [];
let arrindex ;


  // ====================== Add Button Start ===============================
addbtn.addEventListener("click", function(){
    if (input.value == "") {
        error.innerHTML ="Enter Youe text" 
    }else{

        if(addbtn.innerHTML == "Add"){
          error.innerHTML ="" 
          todoarr.push(input.value)
          input.value = "" 
          todocall()
        }else{
            todoarr[arrindex] = input.value;
            todocall();
            addbtn.innerHTML = "Add";
            input.value = "";
        }
   
    }
})

window.addEventListener("load", function(){
    todocall()
})

 function todocall(){
    ol.innerHTML = ""
    if(todoarr.length > 0){
         todoarr.map((item)=>{
            ol.innerHTML +=`<li> ${item} <button class="edit">Edit</button> <button class="item_del">Delet</button></li>`

            // Delet oparetion start
            let item_del = document.querySelectorAll(".item_del")
            let deletarr = Array.from(item_del)
             deletarr.map((delitem,index) =>{
                delitem.addEventListener("click", function(){
                    todoarr.splice(index,1);
                    todocall()
                })
             })
             // Delet oparetion start

             // Edit oparetion start
             let editbtn = document.querySelectorAll(".edit")
                 let newedit = Array.from(editbtn)
                 newedit.map((edititem,index) =>{
                   edititem.addEventListener("click",function(){
                    addbtn.innerHTML = "Update";
                    input.value = todoarr[index];
                       arrindex = index;
                   })
                 })

             // Edit oparetion start
        })
        olerror.innerHTML = ""
    }
    else{
       olerror.innerHTML = "There are no list Here......."
    }
       
 }
   // ====================== Add Button End ===============================


  // ====================== Delet Button Start ===============================
 delbtn.addEventListener("click", function(){
    let delett = input.value
    let nelnew = delett.slice(0, -1)
    input.value = nelnew
 })
  // ====================== Delet Button End ===============================