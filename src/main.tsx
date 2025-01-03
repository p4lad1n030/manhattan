import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import store from './redux/store'
import { Toaster } from './../node_modules/react-hot-toast/src/components/toaster';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
      <Toaster
        
        position="top-center"
        reverseOrder={false}
      />
      
    </Provider>
  </StrictMode>,
)
