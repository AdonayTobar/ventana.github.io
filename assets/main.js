//obteniendo el boton para editar los campos
const btnEditar = document.querySelector('.bg-green-500');

//Creando el contenedor de edicion de lo campos

//Creando un div con sus clases
const contenedorEdicion = document.createElement('div');
contenedorEdicion.classList.add(
    'bg-white', 'rounded-lg', 'w-full', 'py-4', 'mb-4', 'mx-auto', 'md:max-w-screem', 'shadow-2xl', 'px-4', 'flex', 'flex-col', 'justify-center', 'items-center', 'text-center', 'z-50', 'absolute', 'top-0', 'right-0', 'left-0', 'z-50',  'h-screen','my-0', 'hidden', 'gap-2'
  );

//Creando un input para editar el nombre
const inputNombre = document.createElement('input');
inputNombre.classList.add('custom-input','text-sm', 'font-medium', 'text-gray-400', 'mb-4','p-2','border-2', 'border-gray-400', 'rounded-md' );
inputNombre.setAttribute('type', 'text');
inputNombre.setAttribute('placeholder', 'Nombre Completo');
inputNombre.value = '';

//Creando un select radial para el nivel
const selectNivel = document.createElement('div');
selectNivel.classList.add('flex', 'flex-row', 'gap-2', 'md:gap-4', 'text-sm', 'font-medium', 'text-gray-400', 'mb-4');

// Variable para guardar la selección del usuario
let nivelSeleccionado;

const niveles = ['Nivel 1', 'Nivel 2', 'Nivel 3', 'Nivel 4'];
for (let nivel of niveles) {
  const label = document.createElement('label');
  label.classList.add('inline-flex', 'items-center', 'mt-3');

  const input = document.createElement('input');
  input.type = 'radio';
  input.name = 'niveles';
  input.value = nivel;
  input.classList.add('form-radio', 'text-indigo-600', 'h-3', 'w-3', 'px-6', 'mx-1');

  // Agregar evento change para guardar la selección del usuario
  input.addEventListener('change', (event) => {
    nivelSeleccionado = event.target.value;
    console.log(nivelSeleccionado);
  });

  const text = document.createTextNode(nivel);

  label.appendChild(input);
  label.appendChild(text);

  selectNivel.appendChild(label);
}


//Creando otro input para guardar el correo
const inputCorreo = document.createElement('input');
inputCorreo.classList.add('text-sm', 'font-medium', 'text-gray-400', 'mb-2','p-2', 'border-2', 'border-gray-400', 'rounded-md');
inputCorreo.setAttribute('type', 'email');
inputCorreo.setAttribute('placeholder', 'ejemplo@gmail.com');
inputCorreo.value = '';
let contrasena  = "";


//Creando otro input para guardar la contrase;a
const inputContrasena = document.createElement('input');
inputContrasena.classList.add('text-sm', 'font-medium', 'text-gray-400', 'mb-2', 'custom-input', 'relative','p-2', 'border-2', 'border-gray-400', 'rounded-md');
inputContrasena.setAttribute('type', 'password');
inputContrasena.setAttribute('placeholder', 'Contraseña');
inputContrasena.value = contrasena;


//codigo para mostrar la contrase;a si mantengo un boton

//Creando boton mostrar contrase;a
const botonMostrarContrasena = document.createElement('button');
botonMostrarContrasena.classList.add('text-sm', 'font-medium', 'text-gray-700');
botonMostrarContrasena.textContent = 'Mostrar';
botonMostrarContrasena.addEventListener('mousedown', function() {
  inputContrasena.setAttribute('type', 'text');
});
botonMostrarContrasena.addEventListener('mouseup', function() {
  inputContrasena.setAttribute('type', 'password');
});


//Creando un input para editar el numero de telefono
const inputTelefono = document.createElement('input');
inputTelefono.classList.add('text-sm', 'font-medium', 'text-gray-400', 'mb-2', 'custom-input','p-2', 'border-2', 'border-gray-400', 'rounded-md');
inputTelefono.setAttribute('type', 'tel');
inputTelefono.setAttribute('placeholder', 'Número de teléfono');
inputTelefono.value = '';

// Crear el div contenedor de los botones
const divBotones = document.createElement('div');
divBotones.classList.add('flex', 'justify-center', 'gap-6');

//Creando el boton guardar cambios
const btnGuardar = document.createElement('button');
btnGuardar.classList.add('bg-green-500', 'text-white', 'py-2', 'px-4', 'rounded-lg', 'mt-4', 'w-24');
btnGuardar.textContent = 'Guardar';

//Creando el boton cancelar cambios
const btnCancelar = document.createElement('button');
btnCancelar.classList.add('bg-green-500', 'text-white', 'py-2', 'px-4', 'rounded-lg', 'mt-4', 'btnCancelar', 'w-24');
btnCancelar.textContent = 'Cancelar';

// Agregar los botones al div
divBotones.appendChild(btnGuardar);
divBotones.appendChild(btnCancelar);

//Agregando todos los elementos al contenedor principal
contenedorEdicion.appendChild(inputNombre);
contenedorEdicion.appendChild(selectNivel);
contenedorEdicion.appendChild(inputCorreo);
contenedorEdicion.appendChild(inputContrasena);
contenedorEdicion.appendChild(botonMostrarContrasena);
contenedorEdicion.appendChild(inputTelefono);
contenedorEdicion.appendChild(divBotones);

//Agregando el contenedor principal al body
document.querySelector('body').appendChild(contenedorEdicion);

//Haciendo visible la ventana de estitar datos
btnEditar.addEventListener('click', () => {
  console.log('Botón de editar clickeado');
  contenedorEdicion.classList.toggle('hidden');
});

//Declarando variables fuera de funciones para utilizarlas en cualquier parte.
contrasena = inputContrasena.value;
let nombreOriginal ="";
let nivelOriginal = "";
let correoOriginal = "";
let contrasenaOriginal = "";
let telefonoOriginal = "";


//Creando el evento click del boton guardar
btnGuardar.addEventListener('click', () => {
//Validando que no haya ningun campo vacio.
  if (!inputNombre.value || !nivelSeleccionado || !inputCorreo.value || !inputContrasena.value || !inputTelefono.value) {
    alert('Por favor, llene todos los campos antes de guardar los cambios.');
    return;
  }

//Validando la contrase;a editada
  if (!/(?=.*[a-zA-Z])/i.test(inputContrasena.value)) {
    alert('La contraseña debe tener al menos una letra.');
    return;
  }

  if (inputContrasena.value.length < 8) {
    alert('La contraseña debe tener al menos 8 caracteres.');
    return;
  }

  if (!/\d+/.test(inputContrasena.value)) {
    alert('La contraseña debe tener al menos un número.');
    return;
  }

  if (!/\W+/.test(inputContrasena.value)) {
    alert('La contraseña debe tener al menos un caracter especial.');
    return;
  }

  //Validando el numero de telefono

  if (!/^\d{8,}$/.test(inputTelefono.value)) {
    alert('El teléfono debe tener al menos 8 números y sin letras ni guiones');
    return;
  }

  //validando el correo

const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!correoRegex.test(inputCorreo.value)) {
  alert('Por favor, ingrese un correo electrónico válido.');
  return;
}

if (!inputCorreo.value.endsWith('.com')) {
  alert('Por favor, ingrese un correo electrónico con el dominio .com.');
  return;
}

//guardando los datos y mostrandolos en el contenedor de detalles
    nombreOriginal  =  inputNombre.value;
    document.querySelector("h2").textContent = nombreOriginal;

    nivelOriginal = nivelSeleccionado;
    document.querySelector(".nivel").textContent = nivelOriginal; 

    correoOriginal = inputCorreo.value;
    document.querySelector(".correo").textContent = correoOriginal;
    contrasena = inputContrasena.value;

    //mostrando en el contenedor de detalles la contrase;a con *****
const contrasenaOculta = contrasena.replace(/./g, "*");
    contrasenaOriginal = contrasena;
document.querySelector(".contra").textContent = contrasenaOculta;


    telefonoOriginal = inputTelefono.value;
    document.querySelector(".tel").textContent = telefonoOriginal;
    contenedorEdicion.classList.add('hidden'); // Ocultar el formulario de edición
  });



  //Boton cancelar

// Creando el evento click del botón de cancelar
btnCancelar.addEventListener('click', () => {

  // Ocultar el formulario de edición
  contenedorEdicion.classList.add('hidden');

  // Mantener los campos con los datos guardador sin cambios hechos.
 inputNombre.value = nombreOriginal;
 selectNivel.querySelector(`[value="${nivelOriginal}"]`).checked = true;
  inputCorreo.value = correoOriginal;
  inputContrasena.value = contrasenaOriginal;
  inputTelefono.value = telefonoOriginal;
});