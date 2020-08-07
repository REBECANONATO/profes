import React from 'react';
import './styles.css';

import PageHeader from '../../components/PageHeader';
import WhatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherList () {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="subject">Dia da semana</label>
                        <input type="text" id="subject"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="subject">Hora</label>
                        <input type="text" id="subject"/>
                    </div>
                </form>
            </PageHeader>


            <main>
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
            </main>
        </div>
    );
}

export default TeacherList;