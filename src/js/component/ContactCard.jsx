//Muestra un solo contacto en card
import React from "react";

const ContactCard = () => {
    return(
        <div className="card mb-3">
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <div className="row g-0">
                        <div className="col-md-3 p-2">
                            <img src="https://picsum.photos/180/180/" className="img-fluid rounded-circle" alt="..." />
                        </div>
                        <div className="col-md-6 d-flex align-items-center">
                            <div className="card-body text-start p-2">
                                <h5 className="card-title">Mike Anamendiola</h5>
                                <p className="card-text"><i className="fa-solid fa-location-dot"></i> 5842 Hilcrest</p>
                                <p className="card-text"><i class="fa-solid fa-phone-flip"></i> (980)288-4149</p>
                                <p className="card-text"><i class="fa-solid fa-envelope"></i> mike.ana@example.com</p>
                            </div>
                        </div>
                        <div className="col-md-3 pt-2 pe-5 text-end">
                            {/* -----Button edit user -----  */}
                            <button type="button" class="btn"><i className="fa-solid fa-pencil fa-lg me-5"></i></button>
                            {/* ----Button modal---- */}
                            <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <i className="fa-solid fa-trash-can fa-lg"></i>
                            </button>
                            {/* -----modal----- */}
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="exampleModalLabel">Are you sure?</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body text-start">
                                            <p>If you delete this the entire universe will go down!</p>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Oh no!</button>
                                            {/* -----Button delete user----- */}
                                            <button type="button" class="btn btn-secondary">Yes baby!</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default ContactCard