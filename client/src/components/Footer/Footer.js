import React from "react";
import "./Footer.css"

const Footer = () => {
    return (
        <footer>
        <div className="footer-container">
            <div className="footer-section">
                <h2>FlashStore</h2>
                <p>Contáctanos</p>
                <ul>
                    <li><i className="fab fa-whatsapp"></i> WhatsApp: +51983744910</li>
                    <li><i className="fas fa-phone-alt"></i> Llámanos: +51983744910</li>
                </ul>
            </div>
            <div className="footer-section">
                <h2>Servicio al Cliente</h2>
                <ul>
                    <li>Sobre nosotros</li>
                    <li>Nuestras tiendas</li>
                    <li>Términos y condiciones</li>
                    <li>FAQ</li>
                </ul>
            </div>
        </div>
        <div className="footer-bottom">
            <p>&copy; 2024 Todos los derechos reservados. Grupo8</p>
        </div>
    </footer>
    );
  }
  
  export default Footer;

