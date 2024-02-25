import { GlobalStyle } from '../../GlobalStyle.styled';
import { Component, PureComponent } from 'react';
import { ToastContainer } from 'react-toastify';
import { PokemonForm } from '../Pokemon/PokemonForm';
import { PokemonInfo } from "../Pokemon/PokemonInfo";
// https://pokeapi.co/api/v2/pokemon/name

export class App extends PureComponent {
  state = {
    pokemonName: ''
  }

  onNameChange = (name) => {
    this.setState({
      pokemonName: name
    })
  }
  
  render() {
    return (
      <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
        <PokemonForm onSubmit={this.onNameChange}/>
          <PokemonInfo pokemonName={this.state.pokemonName} />
          {/* <ToastContainer autoClose={3000} /> */}
          <GlobalStyle />
      </div>
    )
  }
}





