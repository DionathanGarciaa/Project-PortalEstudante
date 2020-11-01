
const token = sessionStorage.getItem('token')
const isLogged = () => !!token

export { isLogged }