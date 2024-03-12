import './ContactMe.scss';
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import {useRef, useState, useEffect} from 'react';

function ContactMe() {
    const formRef = useRef(null)
    const newMessageButtonRef = useRef(null)
    const paragraphRef = useRef(null)
    const titleRef = useRef(null)

    const {register, reset, handleSubmit} = useForm();

    const [isSuccess, setIsSuccess] = useState(false);
    const [result, setResult] = useState(null);

    const accessKey = "d4713433-476f-46db-a5d1-692adc33f8d5";

    const messageSended = () => {
        formRef.current.style.display = "none";
        newMessageButtonRef.current.style.display="block";
        titleRef.current.innerHTML = "Mensagem enviada com sucesso!";
        paragraphRef.current.innerHTML = "Responderei o quanto antes e entrarei em contato ;)"
    }
    
    const newMessage = () => {
        formRef.current.style.display = "flex";
        newMessageButtonRef.current.style.display="none";
        titleRef.current.innerHTML = "Entre em contato";
        paragraphRef.current.innerHTML = "Vamos trabalhar juntos? <br/>Sinta-se livre para me mandar uma mensagem."
    }

    const { submit: onSubmit } = useWeb3Forms({
        access_key: accessKey,
        settings: {
          from_name: "Acme Inc",
          subject: "New Contact Message from your Website",
        },
        onSuccess: (msg, data) => {
          setIsSuccess(true);
          setResult(msg);
          reset();
        },
        onError: (msg, data) => {
          setIsSuccess(false);
          setResult(msg);
        },
    });


    return (
        <div className="ContactMe_container">
            <div className="ContactMe_main_container">
                <h2 useRef={titleRef}>Entre em contato</h2>
                <p useRef={paragraphRef}> 
                    Vamos trabalhar juntos? <br/>
                    Sinta-se livre para me mandar uma mensagem.
                </p>
                <form useRef={formRef} onSubmit={handleSubmit(onSubmit)} className="inputs_container">
                    <label className="field">Seu nome</label>
                    <input className="input" type="text" {...register("name", { required: true })}/>
                    
                    <label className="field">Seu email</label>
                    <input className="input" type="email" {...register("email", { required: true })}/>
                    
                    <label className="field">Mensagem</label>
                    <textarea className="input message_input" {...register("message", { required: true })}></textarea>

                    <button type="submit" className="submit_button">Enviar</button>
                </form>
                <button ref={newMessageButtonRef} onClick={newMessage} className="new_message_button submit_button">Enviar nova mensagem</button>
            </div>
        </div>
    );
}

export default ContactMe;
    