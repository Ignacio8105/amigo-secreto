// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//variables
let amigos=[];

function agregarAmigo(){
    let nombreUsuario = document.getElementById('amigo').value;
    //verificar campo vacio
    if (nombreUsuario.trim() === ""){
       alert('Por favor, inserte un nombre');
    }else {
    //El nombre es agregado en la lista   
    amigos.push(nombreUsuario);
       
    limpiarCaja();
    actualizaListaAmigos();
    }
}

const lista = document.getElementById('listaAmigos');
//Funcion para mostrar la lista de amigos
function actualizaListaAmigos(){
    // Crear elemento
    const ul = document.createElement('ul');
   
    //Recorrer el array
    for (let i = 0; i < amigos.length;i++){
        //Limpiar lista
        ul.innerHTML = "";
        //Crear elemento para cada item del array
        let elemento = document.createElement('elemento');
        //Añadir el texto del item al <elemento>
        elemento.textContent = amigos[i];
        //Añadir el <elemento> al <ul>
        ul.appendChild(elemento);
        //Añadir la lista al contenedor
        lista.appendChild(ul);
    }
}

//funcion para elegir el amigo secreto
function sortearAmigo(){
    if (amigos.length>0){
        //crear elementos
        let mostrarResultado = document.getElementById('resultado');
        let ul = document.createElement('ul')
        let resultado = Math.floor(Math.random() * amigos.length);
           
        //Crear elemento para cada item del array
       let li = document.createElement('li');
       //Añadir el texto del item al <elemento>
       li.textContent = amigos[resultado];
       //Añadir el <li> al <ul>
       ul.appendChild(li);
       //Añadir la lista al contenedor
       mostrarResultado.appendChild(ul);
        //Mostrar resultado en el contenedor
       document.getElementById("resultado").textContent = `El amigo secreto es: ${ul.textContent}`;
       //Limpiar lista
       lista.innerHTML = "";
    }
}

function limpiarCaja(){
    document.querySelector('#amigo').value="";
}
