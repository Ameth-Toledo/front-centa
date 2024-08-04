import './App.css';
import Banner from './components/Molecules/Banner/Banner';
import BarHome from './components/Organism/BarHome/BarHome';
import home from "./assets/ImageGym.jpg";
import Logo from "./assets/logoGym.png";
import home1 from "./assets/productos/admin1.png";
import home2 from "./assets/productos/Aguas.png";
import home3 from "./assets/productos/Sueros.png";
import user from "./assets/clienteIcono.png"
import Footer from './components/Templates/Footer/Footer';

function App() {
  return (
    <>
      <BarHome src={Logo} />
      <Banner
        src={home}
        Titulo={"CENTAURO GYM"}
        Subtitulo={"(PESAS - TRAINING - FUNCIONAL - FIT)"}
        Parrafo={"¡Bienvenidos a Centauro Gym! Ofrecemos un ambiente inclusivo y motivador, con atención personalizada y entrenadores calificados. Nuestro objetivo es ayudarte a alcanzar tus metas de salud y fitness con un compromiso total con tu bienestar. ¡Únete a nosotros y transforma tu vida!"}
      />
      <h1 className='titulo-home'>PRODUCTOS</h1>
      <div className="images-container">
        <div className="image-wrapper">
          <img src={home1} alt="Producto 1" className="product-image" />
          <p className="image-label">Aguas</p>
        </div>
        <div className="image-wrapper">
          <img src={home2} alt="Producto 2" className="product-image" />
          <p className="image-label">Aguas</p>
        </div>
        <div className="image-wrapper">
          <img src={home3} alt="Producto 3" className="product-image" />
          <p className="image-label">Aguas</p>
        </div>
      </div>
      <h1 className='titulo-home'>NUESTROS COUCHES</h1>
      <div className="user-bar">
        <div className="user-images">
          <div className="user-image-wrapper">
            <img src={user} alt="Usuario 1" className="user-image" />
            <p className="user-name">Nombre 1</p>
          </div>
          <div className="user-image-wrapper">
            <img src={user} alt="Usuario 2" className="user-image" />
            <p className="user-name">Nombre 2</p>
          </div>
          <div className="user-image-wrapper">
            <img src={user} alt="Usuario 3" className="user-image" />
            <p className="user-name">Nombre 3</p>
          </div>
          <div className="user-image-wrapper">
            <img src={user} alt="Usuario 3" className="user-image" />
            <p className="user-name">Nombre 3</p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default App;
