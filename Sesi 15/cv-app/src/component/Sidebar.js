import profile from '../img/dede.jpg'
import { NavHashLink as Link } from 'react-router-hash-link'

function Sidebar() {
    return(
        <div className="col-3 bg-sidebar">
          <div className="sticky-top text-center">
            <img src={profile} alt="Dede" className="img-fluid"/>
            <ul className="nav-pills" style={{listStyle: "none"}}>
              <li className="nav-item">
                <Link smooth to="#about" activeClassName="active" className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <Link smooth to="#experience" activeClassName="active" className="nav-link">Experience</Link>
              </li>
              <li className="nav-item">
                <Link smooth to="#education" activeClassName="active" className="nav-link" href="#education">Education</Link>
              </li>
              <li className="nav-item">
                <Link smooth to="#skills" activeClassName="active" className="nav-link" href="#!">Skill</Link>
              </li>
              <li className="nav-item">
                <Link smooth to="#interest" activeClassName="active" className="nav-link" href="#!">Interest</Link>
              </li>
              <li className="nav-item">
                <Link smooth to="#awards" activeClassName="active" className="nav-link" href="#!">Awards</Link>
              </li>
            </ul>
          </div>
        </div>
    )
}

export default Sidebar