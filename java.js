const total = "total: "+0

const burger =  document.getElementById("burger")
burger.onclick=()=> {
    const array = []
    array.push("Hamburguesa $10")
    for(const recorrido of array){    //ciclo for para agregar los productos elegidos a un ticket
    let ubicacion = document.getElementById("lista")
    let li = document.createElement("li")
    li.innerHTML = recorrido
    ubicacion.append(li)
    total= total + 10

};
}

const pizza =  document.getElementById("pizza")
pizza.onclick=()=> {
    const array = []
    array.push("Pizza $8")
    for(const recorrido of array){    //ciclo for para agregar los productos elegidos a un ticket
    let ubicacion = document.getElementById("lista")
    let li = document.createElement("li")
    li.innerHTML = recorrido
    ubicacion.append(li)
}
}

const pasta =  document.getElementById("pasta")
pasta.onclick=()=> {
    const array = []
    array.push("pasta $15")
    for(const recorrido of array){    //ciclo for para agregar los productos elegidos a un ticket
    let ubicacion = document.getElementById("lista")
    let li = document.createElement("li")
    li.innerHTML = recorrido
    ubicacion.append(li)
}
}

const agua =  document.getElementById("agua")
agua.onclick=()=> {
    const array = []
    array.push("agua $5")
    for(const recorrido of array){    //ciclo for para agregar los productos elegidos a un ticket
    let ubicacion = document.getElementById("lista")
    let li = document.createElement("li")
    li.innerHTML = recorrido
    ubicacion.append(li)
}
}
const jugo =  document.getElementById("jugo")
jugo.onclick=()=> {
    const array = []
    array.push("jugo $6")
    for(const recorrido of array){    //ciclo for para agregar los productos elegidos a un ticket
    let ubicacion = document.getElementById("lista")
    let li = document.createElement("li")
    li.innerHTML = recorrido
    ubicacion.append(li)
}
}
const gaseosa =  document.getElementById("gaseosa")
gaseosa.onclick=()=> {
    const array = []
    array.push("gaseosa $6")
    for(const recorrido of array){    //ciclo for para agregar los productos elegidos a un ticket
    let ubicacion = document.getElementById("lista")
    let li = document.createElement("li")
    li.innerHTML = recorrido
    ubicacion.append(li)
}
}
const papasF =  document.getElementById("papasF")
papasF.onclick=()=> {
    const array = []
    array.push("Papas Fritas $8")
    for(const recorrido of array){    //ciclo for para agregar los productos elegidos a un ticket
    let ubicacion = document.getElementById("lista")
    let li = document.createElement("li")
    li.innerHTML = recorrido
    ubicacion.append(li)
}
}
const pure =  document.getElementById("pure")
pure.onclick=()=> {
    const array = []
    array.push("Pure de papa $8")
    for(const recorrido of array){    //ciclo for para agregar los productos elegidos a un ticket
    let ubicacion = document.getElementById("lista")
    let li = document.createElement("li")
    li.innerHTML = recorrido
    ubicacion.append(li)
}
}
const ensalada =  document.getElementById("ensalada")
ensalada.onclick=()=> {
    const array = []
    array.push("Ensalada $6")
    for(const recorrido of array){    //ciclo for para agregar los productos elegidos a un ticket
    let ubicacion = document.getElementById("lista")
    let li = document.createElement("li")
    li.innerHTML = recorrido
    ubicacion.append(li)
}
}

const totall = document.getElementById("total")
totall.innerText=total