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

  api.get('eBooks')
    .then(response => {
      response.data.forEach(elem => {
        showEBook(elem)
      })
    })
    .catch(err => console.log(err))

  /*api.post('search')
    .then(response => {
      response.data.forEach(elem => {
        showEBook(elem)
      })
    })
    .catch(err => console.log(err))*/
  const userId = localStorage.getItem('userId')

  document.getElementById('logout').addEventListener('click', () => {
    localStorage.clear()
    location.assign('index.html')
  })

  function showEBook(eBook) {
    const myBookList = document.getElementById('libros') // falta id
    const container = document.createElement('li')

    const input = document.createElement("input")
    input.setAttribute('id', eBook._id)
    input.setAttribute("type", "checkbox")
    container.appendChild(input)

    const label = document.createElement("label")
    label.innerText = eBook.eBook_Name
    container.appendChild(label)
    myBookList.appendChild(container)
  }

  document.getElementById("shop").addEventListener("click", (event) => {
    const inputs = document.getElementsByTagName('input')

    for (var i = 1; i < inputs.length; i++) {
      console.log(inputs[i].checked)
      console.log(inputs[i].id)
      if (inputs[i].checked == true) {

        const user_Ebooks = {
          book: inputs[i].id
        }

        api.post(`users/${userId}`, user_Ebooks)
          .then(response => console.log(response))
          .catch(err => console.log(err))
      }

    }

    //location.assign('collection.html')
  })







})()
