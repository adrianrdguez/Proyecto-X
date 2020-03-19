(function () {
  const api = axios.create({
    baseURL: 'api/',
    timeout: 1000
  })

  /*if (localStorage.getItem('token')) {
    document.getElementById('username').innerText = localStorage.getItem('email')
  } else {
    location.href = 'auth.html'
  }*/
  
  /*api.get('eBooks')
    .then( response => {
      response.data.forEach( elem => {
        showEBook(elem)
      })
    })
    .catch( err => console.log(err))*/

  document.getElementById('logout').addEventListener('click', () => {
    localStorage.clear()
    location.assign('index.html')
  })
  
  /*function showEBook (eBook) {
    const myBookList = document.getElementById('...') // falta id
    const container = document.createElement('div')
    . . .
    myBookList.appendChild(container)
  }*/

})()
