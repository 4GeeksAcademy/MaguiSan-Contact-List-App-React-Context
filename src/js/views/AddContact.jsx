//boton back y componente form
import React from "react";
import { Link } from "react-router-dom";
import FormContact from "../component/FormContact.jsx";

const AddContact = () => {
    return(
        <div className="d-flex justify-content-center flex-column align-items-center w-100 p-5">
            <FormContact/>
			<Link to="/">
				<button className="btn btn-link">or get back to contacts</button>
			</Link>
        </div>
    );
};

export default AddContact