
//== retrieve item
// localStorage.setItem("id","0");
// localStorage.setItem("tocken","abc");
// localStorage.setItem("name","hashir");

//== retrieve key (key & value'le key kittan, 0th indexil ulla)
// console.log(localStorage.key(0))

//== remove item
// localStorage.removeItem("name");

//== clear all storage
// localStorage.clear()

// document.write(localStorage.getItem("id"));
// document.write(localStorage.getItem("name"))

// let myObj = {
//     id : 0,
//     name: "hashir"
// }

// localStorage.setItem("data",JSON.stringify(myObj));

// let myNewObj =JSON.parse(localStorage.getItem("data"));

// localStorage.clear()


let input = document.querySelector("input");
let loginBtn = document.querySelector("#login");
let logoutBtn = document.querySelector("#logout");
let h1 = document.querySelector("h1");


loginBtn.addEventListener('click', ()=>{
    if(input.value) {
        localStorage.setItem("tocken",input.value);
        h1.innerText = `Welcome ${localStorage.getItem("tocken")}`
    }
})

logoutBtn.addEventListener('click', ()=>{
    localStorage.clear();
    location.reload();
})

if(localStorage.getItem("tocken")) {
    h1.innerText = `Welcome ${localStorage.getItem("tocken")}`;
    input.value = localStorage.getItem("tocken");
    input.focus();
}                                                             
