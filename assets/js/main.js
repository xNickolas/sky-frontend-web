// const url = 'https://sky-frontend.herokuapp.com/movies'


// const app = document.getElementById('page-content');

// const container = document.createElement('div');
// container.setAttribute('class', 'container');

// app.appendChild(container);


// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://sky-frontend.herokuapp.com/movies');

request.onload = function () {
 // Begin accessing JSON data here
  var data = JSON.parse(this.response);

  data.forEach(movies => {

      let element = document.getElementById('page-content')
      element.innerHTML = `<p>${movies.movies}</p>`

    // Log each movie's title
  // const card = document.createElement('div');
  // card.setAttribute('class', 'card');


  // const h3 = document.createElement('h3');
  // h3.textContent = movies.title;

  // const img = document.createElement('img');
  // img.src = movies.movies.images;
  
  // container.appendChild(card);
  // card.appendChild(h3);
  // card.appendChild(img)

  console.log(movies);
  });

}

// Send request
request.send();





















// fetch(url)
// .then(response => response.json())
// .then(data => {

//   let element = document.getElementById('page-content')
//   element.innerHTML = `<p>${data.movies.title}</p>`

//   console.log(data)
// })
// .catch(err=>console.log(err))
