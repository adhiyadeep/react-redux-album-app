import React, { Component } from 'react'
import Main from './src/Main'
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import persist from "./src/config/configureStore";

const persistStore = persist();


export class App extends Component {
  render() {
    return (
      <Provider store={persistStore.store}>
        <PersistGate loading={null} persistor={persistStore.persistor}>
          <Main />
        </PersistGate>
      </Provider>
    )
  }
}

export default App
