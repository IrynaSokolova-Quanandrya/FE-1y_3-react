import painting from '../../painting.json';
import {colorPickerOptions} from '../../colorOptions';
import { PaintingList } from '../PaintingList/PaintingList';
import { ColorPicker } from '../ColorPicker/ColorPicker';
import { Alert } from '../Alert/Alert';
import { Container, Title } from './App.styled';
import { PokemonInfo } from '../OldPokemon/PokemonInfo';
import { PokemonForm } from "../OldPokemon/PokemonForm";
import { GlobalStyle } from '../../GlobalStyle.styled';
import { Component } from 'react';
import { ToastContainer } from 'react-toastify';

export class App extends Component {
  state = {
    pokemonName: '',
  };

  handleFormSubmit = pokemonName => {
    this.setState({ pokemonName });
  };
  render() {
    return(
    <div>
 <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
        <PokemonForm onSubmit={this.handleFormSubmit} />
        <PokemonInfo pokemonName={this.state.pokemonName} />
        <ToastContainer autoClose={3000} />
      </div>
      {/* <Container>
        <Title>Title</Title>
      </Container> */}
      

       <PaintingList painting={painting}/>
      <ColorPicker options={colorPickerOptions}/>
      <Alert text="Останнє попередження" type="warning"/>
      <Alert text="Ура! Все ок!" type="success"/>
      <Alert text="О жах - все пропало!" type="error"/>
      <GlobalStyle/>
    </div>
  )
  }
}





