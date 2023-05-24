/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Modal } from "react-bootstrap";
import { useState } from "react";

function Navigation(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
                        <form className="form-group row" action="#" method="post">
                            <div className="col">
                                <label htmlFor="fullName" className="form-label">Fullname</label>
                                <input typeof="text" name="fullName" className="form-control" required></input>

                                <label htmlFor="password" className="form-label">Password</label>
                                <input typeof="password" name="password" className="form-control" required></input>
                            </div>
                            <div className="col">
                                <label htmlFor="email" className="form-label">E-mail</label>
                                <input typeof="email" name="email" className="form-control" required></input>

                                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                                <input typeof="password" name="confirmPassword" className="form-control" required></input>
                            </div>
                            <div className="row">
                                <div className="col"></div>
                                <div className="col">
                                <button className="btn btn-primary mb-3 mt-3" onClick={handleClose}>Submit</button>
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