let totalll = 0
let lista = []


class produ{
    constructor(nombre,precio,id){
        this.nombre=nombre
        this.precio=precio
        this.id=id
    }
}

function mostrarCarrito(producto){
    const carrito = document.getElementById('lista')
    let li = document.createElement('li')
    li.innerHTML += `${producto.nombre} ${producto.precio}`
    carrito.appendChild(li)
    
  sessionStorage.setItem('carrito', JSON.stringify(lista))
  }

function recuperar() {
   
   let crecuperado = JSON.parse(sessionStorage.getItem('carrito')) || []

   crecuperado.forEach(item=>{
    lista.push(item)
    mostrarCarrito(item)
   })
   


}
recuperar()
const prod1 = new produ("Burger",10,1);
const prod2 = new produ("Pizza",8,2);
const prod3 = new produ("Pasta",15,3);
const prod4 = new produ("Agua",5,4);
const prod5 = new produ("Jugo",6,5);
const prod6 = new produ("Gaseosa",6,6);
const prod7 = new produ("Papas Frita",8,7);
const prod8 = new produ("Pure",8,8);
const prod9 = new produ("Ensalada",6,9);



const burger = document.getElementById("burger")
burger.onclick=()=>{
    lista.push(prod1)
    mostrarCarrito(prod1)
}

const pizza = document.getElementById("pizza")
pizza.onclick=()=>{
    lista.push(prod2)
    mostrarCarrito(prod2)
}
const pasta = document.getElementById("pasta")
pasta.onclick=()=>{
    lista.push(prod3)
    mostrarCarrito(prod3)
}
const agua = document.getElementById("agua")
agua.onclick=()=>{
    lista.push(prod4)
    mostrarCarrito(prod4)
}
const jugo = document.getElementById("jugo")
jugo.onclick=()=>{
    lista.push(prod5)
    mostrarCarrito(prod5)
}
const gaseosa = document.getElementById("gaseosa")
gaseosa.onclick=()=>{
    lista.push(prod6)
    mostrarCarrito(prod6)
}
const papasF = document.getElementById("papasF")
papasF.onclick=()=>{
    lista.push(prod7)
    mostrarCarrito(prod7)
}
const pure = document.getElementById("pure")
pure.onclick=()=>{
    lista.push(prod8)
    mostrarCarrito(prod8)
}
const ensalada = document.getElementById("ensalada")
ensalada.onclick=()=>{
    lista.push(prod9)
    mostrarCarrito(prod9)
}


const mostrar = document.getElementById("mostrar")
mostrar.onclick=()=>{
   

    lista.forEach((lis)=>{
        totalll=totalll + lis.precio
        const ubicT = document.getElementById("total")
        ubicT.innerText="El total es $"+ totalll
    })
    lista.length=0
}

