import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FirebaseProvdier } from './Firebase.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
 
  <FirebaseProvdier>
    <App />
  </FirebaseProvdier>  
 
)
