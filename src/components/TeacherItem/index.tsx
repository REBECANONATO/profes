import React from 'react';
import './styles.css';

import WhatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem () {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/38442994?s=460&u=0390edb3192bdc344c01b9187b44478300355a17&v=4" alt="Rebeca" />
                <div>
                    <strong>Rebeca Nonato</strong>
                    <span>Matemática</span>
                </div>
            </header>
            <p>
                Texto Texto Texto Texto Texto TextoTexto 
                <br /><br />
                TextoTextoTextoTextoTextoTextoTextoTextoTextoTextoT
                extoTextoTextoTextoTexto
            </p>
            <footer>
                <p> Preço/Hora 
                    <strong>R$ 150,00</strong>
                </p>
                <button type="button">
                    <img src={WhatsappIcon} alt="" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    );


}

export default TeacherItem;