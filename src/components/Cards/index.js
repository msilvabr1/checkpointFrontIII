import React from "react";
import "./style.scss"
import icongit from "../../images/github.png"
import iconlink from "../../images/link.png"



const projetos = [{
  id: 1,
  titulo: 'To Do',
  imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZObdHrPkSjp9RixLqFqCM3_W3yMMa47ms9w&usqp=CAU',
  descricao: 'Projeto realizado no último checkpoint em Front End II',
  linkGit: 'https://github.com/msilvabr1/projetoFront2',
  linkSite: 'https://msilvabr1.github.io/projetoFront2/'
},
{
  id: 2,
  titulo: 'Dev Food',
  imgUrl: 'https://eduardosalerno.com.br/wp-content/uploads/2018/07/o-que-e-css-e-quais-sao-os-tipos-de-folhas-de-estilo.png',
  descricao: 'Projeto realizado no primero Checkpoint realizado em Front End I',
  linkGit: 'https://github.com/SamuelFXavier/DevFood',
  linkSite: 'https://samuelfxavier.github.io/DevFood/'
},
{
  id: 3,
  titulo: 'Git Hub',
  imgUrl: 'https://images2.memedroid.com/images/UPLOADED29/51f84a61c5923.jpeg',
  descricao: 'Participação na criação da página 404 do Git Hub',
  linkGit: 'https://github.com/projetogitehube'
}

]

const CardList = () => {
  return (
    
    <ul>
      {projetos.map(projeto => {
        return (
          <div className="containerCard" id="Cards">
            <div className="card-group">
              <div className=" col-sm">
                <h1><strong>{projeto.titulo}</strong></h1>
                <img src={projeto.imgUrl} alt="Imagem Projeto" width="100%" className="imagemCard"/>
                <p>{projeto.descricao}</p>
                <a href={projeto.linkGit} alt="linkGitHub"> <img src={icongit} alt="github" className="me-2" /></a>
                <a href={projeto.linkSite} alt="linkSite"> <img src={iconlink} alt="githublink" className="me-2" /></a>
              </div>
            </div>
          </div>
        );
      })}
    </ul>
  );
};
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

export default CardList