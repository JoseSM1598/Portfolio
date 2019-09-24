import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const colorStyle = {
  backgroundColor: "#00b2b2",
}
export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight" style = {colorStyle} >
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/headshot.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">José San Martin</a></h1>
              <span className="email"><FontAwesomeIcon icon = 'at'/> hello@josesmo.com</span>
            </div>
            <hr/>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#projects" data-nav-section="projects">Projects</a></li>
                  {/*<li><a href="#blog" data-nav-section="blog">Blog</a></li>*/}
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.linkedin.com/in/jos%C3%A9-san-martin-454471144/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon = {['fab', 'linkedin']} size = "2x"/></a></li>
                <li><a href="https://github.com/JoseSM1598" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github']} size = "2x"></FontAwesomeIcon></a></li>
                <li><a href="https://medium.com/@josesm919" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'medium']} size="2x"/></a></li>
                <li><a href="https://www.facebook.com/jose.sanmartin.902" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon = {['fab', 'facebook']} size = "2x"/></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                  Inspiration from <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>
              </small></p>
              {/*<p><small>*/}
              {/*  Something coming soon !!*/}
              {/*</small></p>*/}
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
