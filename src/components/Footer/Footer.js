import React from 'react'
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="contact-title">
        <div className="footer-text">
          Contacto
        </div>
      </div>
      <div className="contact-info">
        <div className="footer-content">
          <div className="address-section">
            <div>Dirección</div>
            <hr className="separator" />
            <div>
              Comodoro Rivadavia 1385<br/>
              General Pacheco | CP: 1617<br/>
              Buenos Aires
            </div>
            <hr className="separator" />
            <div>Teléfono</div>
            <hr className="separator" />
            <div>+54 11 4740 1994</div>
            <div>+54 11 4740 5981</div>
          </div>
          <div className="map-section">
            <iframe
              title="Map"
              width="100%"
              height="300"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src={`https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1644.87042491206!2d-58.6442606020544!3d-34.45872574825269!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x92ad8f398517174e!2sInstituto+Santa+Ana!5e0!3m2!1ses!2sar!4v1474979722594`}
            />
          </div>
        </div>
      </div>
      <div className="additional-section">
        <div className="additional-section-left">
          <div className="additional-item">
            <label htmlFor="sector">SECTOR A CONSULTAR:</label>
            <select name="sector" id="sector" className="additional-input">
              <option value="Administración">Administración</option>
              <option value="Nivel Inicial">Nivel Inicial</option>
              <option value="Nivel Primario">Nivel Primario</option>
              <option value="Nivel Secundario">Nivel Secundario</option>
              <option value="Nivel Terciario-Profesorado">Nivel Terciario-Profesorado</option>
              <option value="Nivel Universitario">Nivel Universitario</option>
            </select>
          </div>
          <div className="additional-item">
            <label htmlFor="nombre">NOMBRE:</label>
            <input className="additional-input" type="text" id="nombre" />
          </div>
          <div className="additional-item">
            <label htmlFor="email">E.MAIL:</label>
            <input className="additional-input" type="email" id="email" />
          </div>
          <div className="additional-item">
            <label htmlFor="telefono">TELÉFONO:</label>
            <input className="additional-input" type="tel" id="telefono" />
          </div>
          <div className="additional-item">
            <label htmlFor="horario">HORARIO DE CONTACTO:</label>
            <input className="additional-input" type="text" id="horario" />
          </div>
          <div className="additional-item">
            <label htmlFor="direccion">DIRECCIÓN:</label>
            <input className="additional-input" type="text" id="direccion" />
          </div>
        </div>
        <div className="additional-section-right">
          <textarea className="additional-textarea" rows="4" cols="50" placeholder="MENSAJE:"></textarea>
          <br />
          <input type="submit" value="Enviar" className="additional-button" />
        </div>
      </div>
    </footer>
  )
}

export default Footer