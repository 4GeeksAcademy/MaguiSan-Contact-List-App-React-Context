//Contiene la lista de contactos
import React, { useContext, useEffect } from "react"; //1
import { Context } from "../store/appContext.js" //2

import ContactCard from "../component/ContactCard.jsx";
import { Link } from "react-router-dom";


const Contact = () => {
    const { store, actions } = useContext(Context)
    // console.log(store.contactsList);

    useEffect(() => {
        actions.getContactsList()
    }, [])
    return (
        <div className="text-center w-100 py-3 px-5">
            <div className="col text-end pb-3">
                <Link to="/AddContact">
                    <button className="btn btn-success fw-bold">Add new contact</button>
                </Link>
            </div>
            <div className="card mb-3">
                <ul className="list-group list-group-flush">
                    <ContactCard />
                </ul>
            </div>
        </div>
    );
};

export default Contact