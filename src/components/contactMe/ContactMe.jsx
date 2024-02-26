import './ContactMe.scss';
import leftAr from '../../assets/images/contact me vectors/pattern_left/ar.png'
import leftCel from '../../assets/images/contact me vectors/pattern_left/cel.png'
import leftTel from '../../assets/images/contact me vectors/pattern_left/tel.png'
import leftEmail from '../../assets/images/contact me vectors/pattern_left/email.png'
import rightAr from '../../assets/images/contact me vectors/pattern_right/ar.png'
import rightCel from '../../assets/images/contact me vectors/pattern_right/cel.png'
import rightTel from '../../assets/images/contact me vectors/pattern_right/tel.png'
import rightEmail from '../../assets/images/contact me vectors/pattern_right/email.png'

function ContactMe() {
    return (
        <div className="ContactMe_container">
            <div className="icons_container left_icons_container">
                <img src={leftAr} class="left_ar left_icon"></img>
                <img src={leftCel} class="left_cel left_icon"></img>
                <img src={leftTel} class="left_tel left_icon"></img>
                <img src={leftEmail} class="left_email left_icon"></img>
            </div>
            <div className="ContactMe_main_container">
                <h2>Entre em contato</h2>
                <p> 
                    Vamos trabalhar juntos? <br/>
                    Sinta-se livre para me mandar uma mensagem.
                </p>
                <div className="inputs_container">
                <label className="field">Seu nome</label>
                <input type="text"/>
                
                <label className="field">Seu email</label>
                <input type="email"/>
                <label className="field">Mensagem</label>
                <input type="text" class="message_input"/>
                </div>
                <button className="submit_button">Enviar</button>
            </div>
            <div className="icons_container right_icons_container">
                <img src={rightAr} class="right_ar right_icon"></img>
                <img src={rightCel} class="right_cel right_icon"></img>
                <img src={rightTel} class="right_tel right_icon"></img>
                <img src={rightEmail} class="right_email right_icon"></img>
            </div>
        </div>
    );
}

export default ContactMe;
    