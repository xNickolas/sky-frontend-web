const url = 'https://sky-frontend.herokuapp.com/movies'


fetch(url)
.then(response => response.json())
.then(data => {

  // let element = document.getElementById('')
  // element.innerHTML = `<p>${data}</p>`

  console.log(data)
})
.catch(err=>console.log(err))