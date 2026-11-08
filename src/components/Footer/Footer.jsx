import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        
        {/* Columna 1: Marca y descripción */}
        <div className="footer-brand">
          <h3 className="footer-logo">Tienda <span>Creativa</span></h3>
          <p className="footer-desc">
            Tu destino urbano para Sneakers, Hoodies y Accesorios de las mejores marcas.
          </p>
        </div>

        {/* Columna 2: Enlaces Rápidos */}
        <div className="footer-links">
          <h4>Navegación</h4>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/productos">Productos</Link></li>
            <li><Link to="/carrito">Carrito</Link></li>
          </ul>
        </div>

        {/* Columna 3: Categorías */}
        <div className="footer-links">
          <h4>Categorías</h4>
          <ul>
            <li><Link to="/productos?categoria=tenis">Tenis</Link></li>
            <li><Link to="/productos?categoria=gorras">Gorras</Link></li>
            <li><Link to="/productos?categoria=hoodies">Hoodies</Link></li>
          </ul>
        </div>

        {/* Columna 4: Redes Sociales / Proyecto */}
        <div className="footer-social">
          <h4>Síguenos</h4>
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">IG</a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">FB</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">X</a>
          </div>
        </div>

      </div>

      {/* Franja Inferior de Copyright */}
      <div className="footer-bottom">
        <p>Tienda Creativa · Proyecto académico · © 2026</p>
      </div>
    </footer>
  );
}