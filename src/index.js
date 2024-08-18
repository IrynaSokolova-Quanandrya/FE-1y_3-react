import ReactDOM from "react-dom/client";
import { App } from "components/App";
import { Provider } from "react-redux";
import { persistor, store } from "redux/store";
import "./index.css";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById("root")).render(
    //  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <BrowserRouter>
        <App /> 
       </BrowserRouter>
      </Provider>
    //   </PersistGate>
    
);