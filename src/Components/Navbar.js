import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
    
<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <a className="navbar-brand" href="/">{props.title}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">home<span className="sr-only">(current)</span></a>
      </li>
      {/* <li className="nav-item">
        <a className="nav-link" href="/about">{props.about}</a>
      </li> */}
      {/* <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="/">Action</a>
          <a className="dropdown-item" href="/">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="/">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a>
      </li> */}
    </ul>
    {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light' }`}>
  {/* <input className="form-check-input"onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">change to dark mode</label> */}
   <img src="https://cdn-icons-png.flaticon.com/512/6714/6714978.png" style={{height:'40px', width:'50px',marginLeft:'700px'}}  onClick={props.toggleMode} alt="" srcset="" />
</div>
  </div>
</nav>
  )
}

Navbar.propTypes={
  title:propTypes.string,
  about:propTypes.string

}
Navbar.defaultProps={
  title:'Default Title',
  about:'default about'
};


