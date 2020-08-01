import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Footer = ({showModal}) => {
  return (
    <div>
      <footer id="contact" className="footer">
        <ul className="granlista">
          <a href="https://github.com/Cohort-4-Team-Diego" target="_blank">
            <li className="abrirlista1 github"></li>
          </a>
          <a href="https://platzi.com/" target="_blank">
            <li className="abrirlista1 Platzi"></li>
          </a>
          <a href="mailto:c4random.master@gmail.com" target="_blank">
            <li className="abrirlista1 correo"></li>
          </a>
          <li className="list-item-new-member">
            <a
              href="#contact"
              className="modal-footer-new-member"
              onClick={showModal}
            >
              <FontAwesomeIcon icon={faUserPlus} /> Nuevo Miembro
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
