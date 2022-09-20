import React from "react";
import { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

    function ContactForm() {
        const [formStatus,setFormStatus] = useState('Send');
        const onSubmit = (e) =>{
            e.preventDefault()
            setFormStatus('Submitting...')
            const {name,email,message} = e.target.elements
            
            let conFom = {
                name: name.value,
                email: email.value,
                message: message.value,
            }
            console.log(conFom)
        }
    
    return(
        <div className="main">
        <div className="container">
            <h2 className="heading mb-5">Contact Form</h2>
            </div>
            <form onSubmit={onSubmit}>
                <div className="container mb-4 w-50">
                    <div className="container">
                <label className="form-label" htmlFor="name">Name</label>
                <div className="container mx-3">
                <input className="form-control" type="text" id="name" required/>
                </div>
                </div>
                </div>

                <div className="container mb-4 w-50">
                <div className="container">
                <label className="form-label" htmlFor="email">Email</label>
                <div className="container mx-3">
                <input className="form-control" type="email" id="name" required/>
                </div>
                </div>
                </div>

                <div className="container mb-4 w-75">
                    <div className="container">
                <label className="form-label" htmlFor="message">Message</label>
                <div className="container w-100">
                <textarea className="form-control" id="message" required/>
                </div>
                </div>
                </div>
                <div className="container">
                <button className="btn btn-danger" type="submit">{formStatus}</button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm;