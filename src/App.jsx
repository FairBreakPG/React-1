import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyCard from './components/MyCard'
import Header from './components/Header'
import Footer from './components/Footer'
import Tags from './components/Tags'
import Badge from 'react-bootstrap/Badge';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="contenedor-principal">
        <MyCard nombrePerro={'Yack'} src="https://t2.ea.ltmcdn.com/es/razas/9/1/1/pastor-belga-groenendael_119_0_300_square.webp" descripcionCard={'Lleno de energía y listo para jugar. ¡Dale a Yack el hogar amoroso que se merece!'} tagText={'Pastor Velga'} tagColor={'success'} />
        <MyCard nombrePerro={'Guardian'} src="https://t2.ea.ltmcdn.com/es/razas/5/1/7/goldendoodle_715_0_300_square.webp" descripcionCard={'Es juguetón, amigable y se lleva bien con mis niños y otros animales. ¡Haz de Guardian parte de tu familia hoy mismo '} tagText={'Goldendoodle'} tagColor={"primary"}/>
        <MyCard nombrePerro={'Max'} src="https://t1.ea.ltmcdn.com/es/razas/6/3/0/bull-terrier-ingles_36_0_300_square.webp" descripcionCard={'Un perro de tamaño grande con un corazón gigante. Hazte amigo de Max y experimenta un amor incondicional'} tagText={'Buld Terrier'} tagColor={'danger'}/>
        <MyCard nombrePerro={'Tobi'} src="https://cdn.pixabay.com/photo/2023/04/02/17/26/animal-7895031_1280.jpg"descripcionCard={' Es un compañero leal y cariñoso que adora salir al bosque en la nieve ¡Ayuda a Tobi a encontrar una familia!'} tagText={'Siberiano'} tagColor={'warning'}/>
      </div>
      <Footer />
    </div>
  );
}

export default App
