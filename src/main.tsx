import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { Global } from '@emotion/react'
import { globalStyles } from './utils/globalStyles'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <App />
  </React.StrictMode>,
)
