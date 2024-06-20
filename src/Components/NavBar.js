import React,{useEffect} from 'react'
import PropTypes from 'prop-types'
import { useColorTheme } from './ColorTheme';

export default function NavBar(props) {
  const { NavBg,BtnBg, BtnFr, currentFrColor, BtnText,BodyBg, toggleTheme } = useColorTheme();

  useEffect(()=>{
    document.body.style.backgroundColor = BodyBg;
  },[BodyBg]);

  return(
    <nav className="navbar navbar-expand-lg bg-opacity-75 shadow"  style={{backgroundColor:NavBg}}>
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" style={{color: currentFrColor}} href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" style={{color: currentFrColor}} aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{ color: currentFrColor }} href="/">{props.about}</a>
            </li>
          </ul>
          <button className="btn fw-bold" style={{backgroundColor:BtnBg,color:BtnFr}} type="button" onClick={toggleTheme}>{BtnText}</button>
        </div>
      </div>
    </nav>
  );
}

NavBar.propTypes={
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired
}

NavBar.defaultProps={
  title: "Title",
  about: "About"
}