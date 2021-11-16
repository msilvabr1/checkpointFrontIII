
import { Component } from 'react';
import './App.scss';
import Background from './components/Banner';
import CardList from './components/Cards';

import Descricao from './components/Descricao';
import Footer from './components/Footer';
import Header from './components/Header'



export default class App extends Component {
  constructor() {
    super();
    this.state = {

    }

  }


  render() {
    return (
      <>
        <Header />
        <main>
          <Background>
          </Background>
          <hr class="featurette-divider" />
          <Descricao />
          <hr class="featurette-divider" />
        </main>
        <CardList></CardList>

        <Footer />
      </>

    )
  }
}




