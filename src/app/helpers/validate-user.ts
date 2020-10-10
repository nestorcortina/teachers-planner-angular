const users = [
  {
    name: 'Nestor Cortina',
    email: 'nestor@gmail.com',
    password: '2020',
    image: 'https://avatars3.githubusercontent.com/u/50475272?s=400&u=ba6483159c5bd3908d886e613e1fba3e0d6e0bc2&v=4'
  },
  {
    name: 'Juan',
    email: 'juanrp@gmail.com',
    password: '2020',
    image: 'https://aulavirtual.itsa.edu.co/pluginfile.php/67330/user/icon/boost/f1?rev=322356'
  }
]

export const validateUser = (email: string, password?: string) => {
  let user: any = false
  if (password) {
    for (let i = 0; i < users.length; i++) {
      if (email.toLowerCase() === users[i].email.toLowerCase() && password === users[i].password) {
        delete users[i].password
        user = JSON.stringify(users[i])
        break
      }
    }
  } else {
    for (let i = 0; i < users.length; i++) {
      if (email.toLowerCase() === users[i].email.toLowerCase()) {
        delete users[i].password
        user = JSON.stringify(users[i])
        break
      }
    }
  }
  return user
}
