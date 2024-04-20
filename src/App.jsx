import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyCard from './components/MyCard'
import Header from './components/Header'
import Footer from './components/Footer'
import Tags from './components/Tags'
import Badge from 'react-bootstrap/Badge';

function App() {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="contenedor-principal">
        <MyCard nombrePerro={'Yack'} src="https://cdn.pixabay.com/photo/2023/04/12/14/45/ai-generated-7920554_1280.jpg" descripcionCard={'Lleno de energía y listo para jugar. ¡Dale a Yack el hogar amoroso que se merece!'} tagText={'Salchicha'} tagColor={'success'} />
        <MyCard nombrePerro={'Guardian'} src="https://cdn.pixabay.com/photo/2023/12/13/00/43/ai-generated-8446134_1280.jpg" descripcionCard={'Es juguetón, amigable y se lleva bien con mis niños y otros animales. ¡Haz de Guardian parte de tu familia hoy mismo '} tagText={'Pastor Aleman'} tagColor={"primary"}/>
        <MyCard nombrePerro={'Max'} src="https://cdn.pixabay.com/photo/2024/03/08/18/01/ai-generated-8621330_1280.jpg" descripcionCard={'Un perro de tamaño grande con un corazón gigante. Hazte amigo de Max y experimenta un amor incondicional'} tagText={'raza rara'} tagColor={'danger'}/>
        <MyCard nombrePerro={'Tobi'} src="https://cdn.pixabay.com/photo/2023/04/02/17/26/animal-7895031_1280.jpg"descripcionCard={' Es un compañero leal y cariñoso que adora salir al bosque en la nieve ¡Ayuda a Tobi a encontrar una familia!'} tagText={'Siberiano'} tagColor={'warning'}/>
      </div>
      <Footer />
    </div>
  );
}

export default App
