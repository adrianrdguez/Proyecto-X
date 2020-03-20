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

  document.getElementById('logout').addEventListener('click', () => {
    localStorage.clear()
    location.assign('index.html')
  })

  document.getElementById('library').addEventListener('click', () => {
    location.assign('library.html')
  })
  document.getElementById('collection').addEventListener('click', () => {
    location.assign('collection.html')
  })
})()