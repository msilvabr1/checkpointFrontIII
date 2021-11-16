import React from "react"
import icongithub from "../../images/github.png"
import iconlinkedin from "../../images/linkedin.png"
import iconmail from "../../images/email.png"

const Footer = () => {
    return(
      <div class="container" id="Footer">
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div class="col-md-4 d-flex align-items-center">
          <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            
          </a>
          <span class="text-muted">© 2021, Made by Matheus Silva</span>
        </div>
    
        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li class="ms-3"><a href="https://github.com/msilvabr1" alt="github"> <img src={icongithub} alt="github" className="me-2"/></a></li>
          <li class="ms-3"><a href="https://www.linkedin.com/in/matheus-silva-204512209/" alt="linkedin"> <img src={iconlinkedin} alt="linkedin" className="me-2"/></a></li>
          <li class="ms-3"><a href="mailto:matheuscorreios@gmail.com" alt="email"> <img src={iconmail} alt="instagram" className="me-2"/></a></li>
        </ul>
      </footer>
    </div>
    )
}

export default Footer