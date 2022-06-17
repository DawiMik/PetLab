import React from 'react';
import validator from 'validator'
import {useState} from "react";


const HomeContact= () => {

    const [textError, setTextError] = useState('')
    const [nameError, setNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [values, setValues] = useState({
        name: "",
        email: "",
        text: ""
    })



    const validation = (e) => {
        e.preventDefault()
        const {name, email, text} = values;
        console.log(values)
        const matchesTwo = name.match(/\b[^\d\s]+\b/g);

//Text validation
        if (text.length >= 120) {

            setTextError('')
        } else {
            setTextError('Wiadomość musi zawierać conajmniej 120 znaków!')
        }

//Name validation
        if (matchesTwo && matchesTwo.length === 1 || name === "") {

            setNameError('')
        } else {
            setNameError('Podane imię jest nieprawidłowe!')
        }
//Email validation
        if (validator.isEmail(email) || email === "") {

            setEmailError('')
        } else {
            setEmailError('Podany email jest nieprawidłowy!')
        }
//Post to API

        const data = {
            name: name,
            email: email,
            message: text
        }

        console.log(data)
        if (emailError || nameError || textError) return;

        fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            })


    }

    const handleChange = ({ target }) => {
        console.log(target)
        setValues(prev => ({
            ...prev,
            [target.name]: target.value
        }))
    }


    return (
        <> <div className="contact_main_container">
            <div id="contact"></div>
                <div className="contact_section">
                    <h1>Skontaktuj się z nami</h1>
                    <div className="decoration"></div>
                    <form className="mail_form" method={"POST"} noValidate
                          onSubmit={(e) => validation(e)}>
                        <div className="contact_names">
                            <div className="contact_name">
                                <label htmlFor="name">Wpisz swoje imię
                                <div className="line" style={nameError !== "" ? {backgroundColor: "red"} : {}}></div> </label>
                                <input value={values.name} onChange={handleChange} type="text" id="Name" name="name" required placeholder="Krzysztof" />
                                <h2 className="result">{nameError} </h2>
                            </div>

                            <div className="contact_email">
                                <label htmlFor="email">Wpisz swój email
                                    <div className="line" style={emailError !== "" ? {backgroundColor: "red"} : {}}></div></label>
                                <input type="email" value={values.email} onChange={handleChange} id="email" name="email" placeholder="abc@xyz.pl"  />
                                <h2 className="result">{emailError} </h2>
                            </div>
                        </div>
                        <div className="contact_text">
                            <label htmlFor="text">Wpisz swoją wiadomość
                                <div className="line" style={textError !== "" ? {backgroundColor: "red"} : {}}></div></label>
                            <textarea type="text" value={values.text} onChange={handleChange} name="text" id="text"
                            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
                            <h2 className="result">{textError} </h2>
                        </div>
                        <button >Wyślij</button>
                    </form>
                </div>
        </div>
           </>



    )
}

export default HomeContact