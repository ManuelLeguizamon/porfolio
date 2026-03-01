import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { Inicio } from './componentes/inicio/Inicio.jsx'
import { Proyectos } from './componentes/proyectos/Proyectos.jsx'
import { SobreMi } from './componentes/sobre_mi/SobreMi.jsx'
import { Contacto } from './componentes/contacto/Contacto.jsx'
import { Footer } from './componentes/footer/Footer.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Inicio />
      <Proyectos />
      <SobreMi />
      <Contacto />
      <Footer />
    </>
  )
}

export default App
