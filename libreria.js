const confirmacion = document.querySelector(".confirmaciones")

const boton_cargar = document.getElementById("cargar")
const boton_refrescar = document.getElementById("refrescar")

const lista_desordenada = document.querySelector("#lista_desordenada")
//inputs
const nombre_libro = document.getElementById("nombre_libro")
const nombre_autor = document.getElementById("nombre_autor")
const direccion_comprador = document.getElementById("direccion_comprador")

const pedidosLimite = []; // array que almacena pedidos (max 5)
const span = document.querySelector(".numero_Aleatorio")
const datosPedido = document.querySelector(".datos-pedido")




class Pedido {
    constructor(titulo, autor, direccion) {
        this.titulo = titulo;
        this.autor = autor;
        this.direccion = direccion;
        this.cargarItems(titulo, autor, direccion);
    }
    cargarItems(titulo, autor, direccion){
        let li = document.createElement("li");
        li.textContent ="-EL LIBRO TITULADO: " + titulo + " DEL AUTOR: " + autor + " SERA LLEVADO A LA DIRECCION: " + direccion;
        lista_desordenada.appendChild(li);
    }
}

   boton_cargar.addEventListener("click", ()=>{
    if (pedidosLimite.length === 5) {
        alert('Límite de ítems superado (máx 5)')
    } else if (nombre_libro.value && nombre_autor.value && direccion_comprador.value) {
        const obj = new Pedido(nombre_libro.value, nombre_autor.value, direccion_comprador.value);
        pedidosLimite.push(obj);
        //limpiar input
        nombre_libro.value = ""
        nombre_autor.value=""
        direccion_comprador.value=""
    }  if (pedidosLimite.length === 1) {
        numeroPedido()}
   })

   boton_refrescar.addEventListener("click", ()=>{
    let eliminarLi = document.querySelectorAll('div.confirmaciones li');
    for (let i = 0; i < eliminarLi.length; i++) {
        eliminarLi[i].remove()
        nombre_libro.value = ""
        nombre_autor.value=""
        direccion_comprador.value=""
        span.remove()
        
        
    }
   })

// genera un número random del 1 al 1000
function numeroPedido() {
    let numero = Math.round(Math.random() * 1001);
    span.textContent=numero
}




    
