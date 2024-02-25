import { Component } from 'react';
// import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';

const styles = { form: { marginBottom: 20 } };

export class PokemonForm extends Component {
     
    handleSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget
        this.props.onSubmit(form.elements.pokemonName.value);
        form.reset()
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={styles.form}>
        <input
          type="text"
          name="pokemonName"
          onChange={this.handleNameChange}
        />
        <button type="submit">
          Знайти
        </button>
      </form>
    );
  }
}
