// import { useEffect } from 'react'
import { useHistory, NavLink } from 'react-router-dom'

function Header() {
  const history = useHistory()

  const login = () => {
    history.push('/login')
    history.go(0)
  }

  const logout = () => {
    localStorage.removeItem('login')
    history.push('/')
    history.go(0)
  }

  return (
    <>
      <nav className="py-2 bg-light border-bottom">
        <div className="container d-flex flex-wrap">
          <ul className="nav me-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link link-dark px-2">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link link-dark px-2">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/todos" className="nav-link link-dark px-2">Todos</NavLink>
            </li>
          </ul>
          <ul className="nav">
            {
              !localStorage.getItem('login') ? 
              <li className="nav-item me-2">
                <button className="btn btn-primary" onClick={login}>Login</button>
              </li> :
              <li className="nav-item">
                <button className="btn btn-danger" onClick={logout}>Logout</button>
              </li>
            }
          </ul>
        </div>
      </nav>

      <header className="py-3 mb-4 border-bottom">
        <div className="container d-flex flex-wrap justify-content-center">
          <a href="/" className="d-flex align-item-center mb-3 mb-lg-9 me-lg-auto text-dark text-decoration-none">
            <span className="fs-4">My First React App</span>
          </a>
        </div>
      </header>
    </>
  )
}

export default Header