import React from "react"
import "./style.scss"
import eu from "../../images/eu.jpg"

const Descricao = () => {
  return (

    <div class="row featurette" id="Descricao">
      <div class="col-md-7">
        <h2 class="featurette-heading" id="titulo">Sobre mim </h2>
        <p class="lead" id="texto">Olá! Me chamo Matheus Silva, atualmente participo do Programa Certified Tech Developer. Além disso me encontro no 2º período de Sistemas de Informação pela UTFPR. Tenho conhecimentos sobre HTML, CSS, JavaScript, MYSQL, Java e também sobre alguns frameworks, como Spring e React.</p>
      </div>
      <div class="col-md-5">
        <img class="featurette-image img-fluid mx-auto" id="foto" src={eu} alt="matheus" />
      </div>
    </div>
  )
}

export default Descricao