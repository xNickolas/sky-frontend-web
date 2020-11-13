// JQuerySlider
// ------------------------------------------------------------------------
$(document).ready(function() {
  $('#autoWidth0,#autoWidth1,#autoWidth2,#autoWidth3,#autoWidth4').lightSlider({
      autoWidth:true,
      loop:true,
      onSliderLoad: function() {
          $('#autoWidth0, #autoWidth1,#autoWidth2,#autoWidth3,#autoWidth4').removeClass('cS-hidden');
      } 
  });  
});
// ------------------------------------------------------------------------

// API SKY
// ------------------------------------------------------------------------
fetch('https://sky-frontend.herokuapp.com/movies')
.then(res => res.json()).then(json => {
    json[0].items.forEach(item => {
        let idx = item.action.indexOf("play")
        if(idx != -1){
            $(".cs-hidden0").prepend(
                `<li class="item-a">
                  <div class="banner-box">
                    <img src="${item.images[0].url}" title="${item.title}">
                  </div>
                </li>`
            )
        }
    })
}).catch(() => {
    $('.card-deck').html('Nenhum resultado encontrado!')
})
fetch('https://sky-frontend.herokuapp.com/movies')
.then(res => res.json()).then(json => {
    json[2].movies.forEach(item => {
        let idx = item.categories.indexOf("Ação")
        if(idx != -1){
            $(".cs-hidden1").prepend(
                `<li class="item-a">
                  <div class="action-box">
                    <div class="showcase-box">
                      <img src="${item.images[0].url}" title="${item.title}">
                    </div>
                  </div>
                </li>`
            )
        }
    })
}).catch(() => {
    $('.card-deck').html('Nenhum resultado encontrado!')
})
fetch('https://sky-frontend.herokuapp.com/movies')
    .then(res => res.json()).then(json => {
        json[2].movies.forEach(item => {
            let idx = item.categories.indexOf("Suspense, Terror")
            if(idx != -1){
                $(".cs-hidden2").prepend(
                    `<li class="item-a">
                      <div class="action-box">
                        <div class="showcase-box">
                          <img src="${item.images[0].url}" title="${item.title}">
                        </div>
                      </div>
                    </li>`
                )
            }
        })
    }).catch(() => {
        $('.card-deck').html('Nenhum resultado encontrado!')
    })
    fetch('https://sky-frontend.herokuapp.com/movies')
    .then(res => res.json()).then(json => {
        json[2].movies.forEach(item => {
            let idx = item.categories.indexOf("Drama")
            if(idx != -1){
                $(".cs-hidden3").prepend(
                    `<li class="item-a">
                      <div class="action-box">
                        <div class="showcase-box">
                          <img src="${item.images[0].url}" title="${item.title}">
                        </div>
                      </div>
                    </li>`
                )
            }
        })
    }).catch(() => {
        $('.card-deck').html('Nenhum resultado encontrado!')
    })
    fetch('https://sky-frontend.herokuapp.com/movies')
    .then(res => res.json()).then(json => {
        json[2].movies.forEach(item => {
            let idx = item.categories.indexOf("Fantasia")
            if(idx != -1){
                $(".cs-hidden4").prepend(
                    `<li class="item-a">
                      <div class="action-box">
                        <div class="showcase-box">
                          <img src="${item.images[0].url}" title="${item.title}">
                        </div>
                      </div>
                    </li>`
                )
            }
        })
    }).catch(() => {
        $('.card-deck').html('Nenhum resultado encontrado!')
    })












// ------------------------------------------------------------------------














// const app = document.getElementById('page-content');

// const container = document.createElement('div');
// container.setAttribute('class', 'container');

// app.appendChild(container);


// Create a request variable and assign a new XMLHttpRequest object to it.
// var request = new XMLHttpRequest();

// // // Open a new connection, using the GET request on the URL endpoint
// request.open('GET', 'https://sky-frontend.herokuapp.com/movies', true);

// request.onload = function () {
//  // Begin accessing JSON data here
//   var data = JSON.parse(this.response);

  
//   data.forEach(movies => {

//     let element = document.getElementById('page-content')
//     element.innerHTML = `<p>${movies.movies}</p>`

//     console.log(movies);
//   });

//   // Log each movie's title
//   // const card = document.createElement('div');
//   // card.setAttribute('class', 'card');


//   // const h3 = document.createElement('h3');
//   // h3.textContent = movies.title;

//   // const img = document.createElement('img');
//   // img.src = movies.movies.images;
  
//   // container.appendChild(card);
//   // card.appendChild(h3);
//   // card.appendChild(img)

// }

// // Send request
// request.send();






















