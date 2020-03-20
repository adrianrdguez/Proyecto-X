(function () {
  const api = axios.create({
    baseURL: 'api/',
    timeout: 1000
  })

  if (localStorage.getItem('token')) {
    document.getElementById('username').innerText = localStorage.getItem('email')
  } else {
    location.href = 'auth.html'
  }

  function populateLibrary() {
    api.get('eBooks', { headers: { token: localStorage.getItem('token') } })
      .then(response => {
        const myBookList = document.getElementById('libros')
        myBookList.innerHTML = ''
        response.data.forEach(elem => {
          showEBook(elem)
        })
      })
      .catch(err => console.log(err))
  }

  populateLibrary()


  document.getElementById("searchBook").addEventListener("keypress", e => {
    const mySearch = document.getElementById('searchBook').value
    if (e.keyCode == 13 && mySearch != '') {
      api.post('search', { search: mySearch }, { headers: { token: localStorage.getItem('token') } })
        .then(response => {
          const myBookList = document.getElementById('libros')
          myBookList.innerHTML = ''
          response.data.ebook.forEach(objBook => {
            showEBook(objBook)
          })

          response.data.author.forEach(objBook => {
            showEBook(objBook)
          })
        })
        .catch(err => console.log(err))
    } else if (e.keyCode == 13) populateLibrary()
  })

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
      if (inputs[i].checked == true) {
        const user_Ebooks = {
          book: inputs[i].id
        }
        api.post(`users/${userId}`, user_Ebooks, { headers: { token: localStorage.getItem('token') } })
          .then(response => console.log(response))
          .catch(err => console.log(err))
      }
    }
  })
})()
