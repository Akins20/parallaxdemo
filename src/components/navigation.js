/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Modal } from "react-bootstrap";
import { useState } from "react";

function Navigation(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [formData, setFormData] = useState({
        Name: "",
        Email: "",
        Message: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("Name", formData.Name);
        formData.append("Email", formData.Email);
        formData.append("Message", formData.Message);

        fetch("https://script.google.com/macros/s/AKfycbyVV0dSVeY382W4wr0KuAsNlmTTdAdmDQfmr5MjGO58B9ijXUKwZZeohM5Pc6IxZGsJ/exec", {
            method: "POST",
            body: formData
        });
        console.log("Form Data Sent Succesfully")
    };
    return (
        <div>
            <div>
                <ul className="opac">
                    <li >
                        <a href="#" className="nav-link">Home</a>
                    </li>
                    <li>
                        <a href="#" className="nav-link">Gallery</a>
                    </li>
                    <li>
                        <a href="#" className="nav-link">Contact</a>
                    </li>
                    <li>
                        <a href="#" className="nav-link" onClick={handleShow}>Sign Up</a>
                    </li>
                </ul>
            </div>
            <><div
                className="modal show"
                style={{ display: 'block', position: 'initial' }}

            ></div>
                <Modal
                    {...props}
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={show} onHide={handleClose}><Modal.Header closeButton>
                        <Modal.Title>Sign Up</Modal.Title>
                    </Modal.Header><Modal.Body>
                        <form className="form-group row" id="form" method="POST" onSubmit={handleSubmit}>
                            <div className="col">
                                <label htmlFor="Name" className="form-label">Fullname</label>
                                <input type="text" value={formData.Name}
                                    onChange={handleChange} id="Name" name="Name" className="form-control" required></input>
                            </div>
                            <div className="col">
                                <label htmlFor="Email" className="form-label">E-mail</label>
                                <input type="email" value={formData.Email}
                                    onChange={handleChange} id="Email" name="Email" className="form-control" required></input>

                                <label htmlFor="Message" className="form-label">Your Message: </label>
                                <textarea name="Message" value={formData.Message}
                                    onChange={handleChange} rows={5} cols={10} id="Message" className="form-control" placeholder="Enter your message here ....." required />
                            </div>
                            <div className="row">
                                <div className="col"></div>
                                <div className="col">
                                    <button type="submit" className="btn btn-primary mb-3 mt-3">Submit</button>
                                </div>
                                <div className="col"></div>
                            </div>
                            <p>Already have an account? <span><a href="#">Sign In</a></span></p>
                        </form>
                    </Modal.Body>
                </Modal>
            </>
        </div>
    )
}

export default Navigation;