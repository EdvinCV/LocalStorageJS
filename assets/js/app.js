const listaTweets = document.getElementById('lista-tweets');

// Event Listeners
eventListeners();

function eventListeners(){
    document.querySelector("#formulario").addEventListener('submit', agregarTweet);
}

// Function
function agregarTweet(e) {
    e.preventDefault();
    // Obtener el tweet.
    const tweet = document.getElementById("tweet").value;
    // Borrar tweet.
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = "borrar-tweet";
    botonBorrar.innerText = "X";
    // Agrega el tweet como un elemento li.
    const li = document.createElement('li');
    li.innerText = tweet;
    li.appendChild(botonBorrar);
    // Agregar el li al elemento lista tweets.
    listaTweets.appendChild(li);
    // Eliminar contenido del textarea.
    tweet.innerText = '';
}