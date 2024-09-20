let Cantidad = document.getElementById('cantidad');
let Boton = document.getElementById('generar');
let Contraseña = document.getElementById('contrasena')
let Limpiar = document.getElementById('limpiar')

const cadenadecaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()'

function generar(){

    let Numerodigitado = parseInt (Cantidad.value); 
    
    if(Numerodigitado < 8){
        alert("Son minimo 8 caracteres");
    }

    
    let password = '';
    for(let i= 0; i < Numerodigitado; i++){

        let Caracteraleatoreo = cadenadecaracteres[Math.floor(Math.random() * cadenadecaracteres.length)]; 
        console.log(Caracteraleatoreo);

        password+= Caracteraleatoreo;
       

    }

    Contraseña.value = password;
}







