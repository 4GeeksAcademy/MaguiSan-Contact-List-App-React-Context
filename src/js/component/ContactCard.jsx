//Muestra un solo contacto en card
import React, {useContext} from "react";
import { Context } from "../store/appContext";

const ContactCard = () => {
    const {store, actions} = useContext(Context);
    // const date = store.contactsList
    // console.log(date);

    return(
        <div>
            {
                store.contactsList.map((item, index) => (
                    <li className="list-group-item" key={index}>
                        <div className="row g-0">
                            <div className="col-md-3 p-2">
                                <img src="https://picsum.photos/180/180/" className="img-fluid rounded-circle" alt="..." />
                            </div>
                            <div className="col-md-6 d-flex align-items-center">
                                <div className="card-body text-start p-2">
                                    <h5 className="card-title"> {item.name}</h5>
                                    <p className="card-text"><i className="fa-solid fa-location-dot"></i> {item.address}</p>
                                    <p className="card-text"><i className="fa-solid fa-phone-flip"></i> {item.phone}</p>
                                    <p className="card-text"><i className="fa-solid fa-envelope"></i> {item.email}@example.com</p>
                                </div>
                            </div>
                            <div className="col-md-3 pt-2 pe-5 text-end">
                                {/* -----Button edit user -----  */}
                                <button type="button" className="btn"><i className="fa-solid fa-pencil fa-lg me-5"></i></button>
                                {/* ----Button modal---- */}
                                <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <i className="fa-solid fa-trash-can fa-lg"></i>
                                </button>
                                {/* -----modal----- */}
                                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="exampleModalLabel">Are you sure?</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body text-start">
                                                <p>If you delete this the entire universe will go down!</p>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Oh no!</button>
                                                {/* -----Button delete user----- */}
                                                <button type="button" className="btn btn-secondary" onClick={() => actions.deleteContact(item.id)}>Yes baby!</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                ))
            }

        </div>
    );
};

export default ContactCard