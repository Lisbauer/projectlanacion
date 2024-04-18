import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import Cards from './components/Cards.jsx'
import FocalIzquierdo from './components/FocalIzquierdo.jsx'
import UltimasNoticias from './components/UltimasNoticias.jsx'
import Notas from './components/Notas.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <UltimasNoticias/>

    <FocalIzquierdo/>
    
    <Cards/>

   
    
    <Notas/>

  </React.StrictMode>,
)
