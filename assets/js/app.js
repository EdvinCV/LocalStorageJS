const listaTweets = document.getElementById('lista-tweets');

// Event Listeners
eventListeners();

function eventListeners(){
    document.querySelector("#formulario").addEventListener('submit', agregarTweet);
    

    // Eliminar tweet.
    listaTweets.addEventListener('click', borrarTweet);

    // Mostrar tweets al cargar la página
    document.addEventListener('DOMContentLoaded', localStorageListo);
}

// Function
function localStorageListo(){
    let tweets;

    tweets = obtenerTweets();
    tweets.forEach(function(tweet) {
        const botonBorrar = document.createElement('a');
        botonBorrar.classList = "borrar-tweet";
        botonBorrar.innerText = "X";
        // Agrega el tweet como un elemento li.
        const li = document.createElement('li');
        li.innerText = tweet;
        li.appendChild(botonBorrar);
        // Agregar el li al elemento lista tweets.
        listaTweets.appendChild(li);
    });

}

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
    // Agregar tweet al localStorage.
    agregarTweetLS(tweet);
}

// Elimina el tweet
function borrarTweet(e) {
    e.preventDefault();
    // Obtener el elemento.
    if(e.target.className === "borrar-tweet"){
        e.target.parentElement.remove();
        borrarTweetLS(e.target.parentElement.innerText);
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Tweet eliminado correctamente.',
            showConfirmButton: false,
            timer: 1500
          })
    }
}

// Agrega el tweet al local storage.
function agregarTweetLS(tweet){
    let tweets;

    tweets = obtenerTweets();
    tweets.push(tweet);
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

// Obtener tweets de local storage
function obtenerTweets(){
    let tweets;

    if(localStorage.getItem('tweets') === null){
        tweets = [];
    }else {
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }
    return tweets;
}

// Eliminar tweet del local storage
function borrarTweetLS(tweet){

    let tweets, tweetBorrar;

    tweetBorrar = tweet.substring(0, tweet.length - 1);
    tweets = obtenerTweets();

    tweets.forEach(function(tweet, index){
        if(tweetBorrar === tweet) {
            tweets.splice(index,1);
        }
    });

    localStorage.setItem('tweets', JSON.stringify(tweets));

}