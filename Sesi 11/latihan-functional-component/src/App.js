import { useEffect } from 'react';
import './App.css';
import Counter from './component/Counter';
import Users from './component/Users';
import Hero from './component/Hero';

function Header() {
  return (
    <header className="header">
      <h1>My First React App</h1>
    </header>
  )
}

function Content() {
  return (
    <div className="content">
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  )
}

function Footer() {
  return (
    <div className="footer">
      <p>&copy; Dede Permana - 2021</p>
    </div>
  )
}

function App() {
  useEffect(() => {
    document.title = `Latihan Functional Component`
  })
  return (
    <div className="container">
      <Header/>
      <hr/>
      <Content/>
      <hr/>
      <Users />
      <hr/>
      <Counter/>
      <hr/>
      <Hero />
      <hr />
      <Footer/>
    </div>
  )
}

export default App;