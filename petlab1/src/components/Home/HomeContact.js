import React from 'react';

const HomeContact= () => {
    return (
        <> <div className="contact_main_container">
            <div id="contact"></div>
                <div className="contact_section">
                    <h1>Skontaktuj się z nami</h1>
                    <div className="decoration"></div>
                    <form type="submit" method="POST" className="mail_form">
                        <div className="contact_names">
                            <div className="contact_name">
                                <label htmlFor="name">Wpisz swoje imię</label>
                                <input type="text" id="Name" name="Name" required placeholder="Krzysztof"/>
                            </div>

                            <div className="contact_email">
                                <label htmlFor="email">Wpisz swój email</label>
                                <input type="email" id="email" name="email" placeholder="abc@xyz.pl"/>
                            </div>
                        </div>
                        <div className="contact_text">
                            <label htmlFor="text">Wpisz swoją wiadomość</label>
                            <textarea type="text" name="comment"
                            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
                        </div>
                        <button type="submit" value="Submit">Wyślij</button>
                    </form>
                </div>
        </div>
           </>



    )
}

export default HomeContact