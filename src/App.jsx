import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './bootstrap.min.css'
import './App.css'
import MyRoutes from './MyRoutes'

import { combineReducers, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import cartReducer from './Redux/cartReducer'
import moviesReducer from './Redux/moviesReducer'
import userReducer from './Redux/userReducer'

import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'


function App() {
  const persistConfig = {
    key: 'root',
    storage,
  }

  let rootreducer = combineReducers({
    cartStore: cartReducer,
    moviesStore: moviesReducer,
    userStore: userReducer
  })

  const persistedReducer = persistReducer(persistConfig, rootreducer)
 
  let store = createStore(persistedReducer)
  let persistor = persistStore(store)

  return (
    <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <MyRoutes/>
      </PersistGate>
    </Provider>
    </>
  )
}

export default App
