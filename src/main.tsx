import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import {routerConfig} from './routerConfig.tsx'
import { Provider } from 'react-redux'
import { store } from './store/storie.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={routerConfig}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>,
)
