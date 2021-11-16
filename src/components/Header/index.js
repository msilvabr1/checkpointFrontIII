import "./style.scss"

const Header = () => {
    
    return(
        <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom" id ="Header">
      <a href=" " class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <svg class="bi me-2" width="40" height="32"></svg>
        <span class="fs-4">Matheus Silva</span>
      </a>

      <ul class="nav nav-pills" id="lista">
        <li class="nav-item"><a href="#Header" class="nav-link" aria-current="page">Home</a></li>
        <li class="nav-item"><a href="#Descricao" class="nav-link">Sobre mim</a></li>
        <li class="nav-item"><a href="#Cards" class="nav-link" aria-current="page">Projetos</a></li>
        <li class="nav-item"><a href="#Footer" class="nav-link">Contato</a></li>
        
      </ul>
    </header>
    )
}

export default Header