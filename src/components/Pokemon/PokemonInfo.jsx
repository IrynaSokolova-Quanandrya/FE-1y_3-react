
/**
 * Введіть ім'я покемона
 * Завантажуємо...
 * Покемона з _ім'я покемона не знайдено
 * Покемона {this.props.name} не знайдено
 * ловимо помилку Promise.reject
 * додаємо error в стейт
 * 'idle'
 * 'pending'
 * 'resolved'
 * 'rejected'
 */

import { PureComponent } from "react";


export class PokemonInfo extends PureComponent {
    state = {
        pokemon: '',
        error: null,
        status: 'idle'
    }

    componentDidUpdate(prevProps) {
        if (prevProps.pokemonName !== this.props.pokemonName) {
            this.setState({ status: 'pending', pokemon: null })
            
            fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}`)
                .then(res => {
                    if (!res.ok) {
                        return Promise.reject(new Error(`Покемона з іменем ${this.props.pokemonName} не знайдено!`))
                    }
                    return res.json()
                })
                .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
                .catch(error => this.setState({ error, status: 'rejected' }))
        }
    }

    render() {
        const { pokemon, error, status } = this.state

        if (status === 'idle') { return <p>Ведіть ім'я покемона</p> }
        if (status === 'pending') { return <div>Loading...</div> }
        if (status === 'rejected') { return <div>{error.message}</div> }
        if (status === 'resolved') {
            return <div>
                <h2>{pokemon.name}</h2>
                <img src={pokemon.sprites.other['official-artwork'].front_default} alt="" style={{ width: '150px' }} />
            </div>
        }
               
    }
}










// export const PokemonInfo = ({pokemonName}) => {

// const [pokemon, setPokemon] = useState(null);
// const [error, setError] = useState(null);
// const [status, setStatus] = useState('idle');
// console.log(pokemon);
// useEffect(()=>{

//  if(!pokemonName){
//   return;
//  }

//  console.log('Запуск fetch');
//     setStatus('pending')
//       fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
//   .then(response=>{
//     if(response.ok === true){
//        return response.json()
//     }
//    return Promise.reject(new Error(`Покемона ${pokemonName} не знайдено`))
//   })        
//   .then(pokemon => {
//     setPokemon(pokemon);
//     setStatus('resolved');
//   })
//   .catch((error)=> {
//     setError(error);
//     setStatus('rejected');
//   })
//   },[pokemonName]
// )  
//       switch (status) {
//         case 'idle':
//           return <p>Введіть ім'я покемона</p>;

//         case 'pending':
//           return <Bars
//           visible={true}
//           height="80"
//           width="80"
//           ariaLabel="dna-loading"
//           wrapperStyle={{}}
//           wrapperClass="dna-wrapper"
//         />;

//         case 'resolved':
//           return <div>
//           <img
//             src={pokemon.sprites.other['official-artwork'].front_default}
//             width="240"
//             height="100"
//             alt={pokemon.name}
//           />
//           <h2>{pokemon.name}</h2>
//           <ul>
//             {pokemon.stats.map(entry => (
//               <li key={entry.stat.name}>
//                 {entry.stat.name}: {entry.base_stat}
//               </li>
//             ))}
//           </ul>
//         </div>
          
//           case 'rejected':
//           return <p>{error.message}</p>
             
//         default:
//           return;
//       }

    
// }