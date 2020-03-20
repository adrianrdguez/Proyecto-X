(function () {
  const api = axios.create({
    baseURL: 'api/',
    timeout: 1000
  })

  document.getElementById('read4').addEventListener('click', () => {
    location.assign('inicio.html')
  })
  document.getElementById('logout').addEventListener('click', () => {
    localStorage.clear()
    location.assign('index.html')
  })

  const userId = localStorage.getItem('userId')

  api.get(`users/${userId}`, { headers: { token: localStorage.getItem('token')}})
    .then(response => {
      console.log(response)
      response.data.user_Ebooks.forEach(elem => {
        showEBook(elem)
      })
    })
    .catch(err => console.log(err))


  function showEBook(ebook) {
    const myBookList = document.getElementById('user_eBooks')
    const container = document.createElement('li')

    const input = document.createElement('input')
    input.setAttribute('type', 'checkbox')
    container.appendChild(input)

    const label = document.createElement('label')
    label.innerText = ebook.Id.eBook_Name
    container.appendChild(label)
    myBookList.appendChild(container)
  }
})()