//Contiene la lista de contactos
import React from "react";
import ContactCard from "../component/ContactCard.jsx";
import { Link } from "react-router-dom";

const Contact = () => {
    return(
        <div className="text-center w-100 py-2 px-5">
            <div className="text-end">
                <Link to="/AddContact">
                    <button className="btn btn-success">Add new contact</button>
                </Link>
            </div>
           MAP <ContactCard/>
        </div>
    );

};

export default Contact