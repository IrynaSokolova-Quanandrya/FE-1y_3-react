import { GlobalStyle } from '../../GlobalStyle.styled';
import { Component } from 'react';
import { ToastContainer } from 'react-toastify';

export class App extends Component {
  render() {
    return(
    <div>
 <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
     
        <ToastContainer autoClose={3000} />
      </div>
      <GlobalStyle/>
    </div>
  )
  }
}





