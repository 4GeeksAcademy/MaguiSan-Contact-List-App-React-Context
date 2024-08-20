//Muestra unicamente el formulario
import React from "react";

const FormContact = () => {
    return(
        <div className="p-2 w-75">
            <h2 className="fw-bold fs-1 mb-2 text-center">Add a new Contact</h2>
            <form className="row g-3 text-start">
                <div className="col-md-12">
                    <label for="fullName" className="form-label">Full name</label>
                    <input type="text" className="form-control" id="fullName" placeholder="Name Last name" required/>
                </div>
                <div class="col-md-12">
                    <label for="emailAdd" class="form-label">Email</label>
                    <input type="email" class="form-control" id="emailAdd" placeholder="name@example.com"/>
                </div>
                <div className="col-md-12">
                    <label for="phoneNum" className="form-label">Phone</label>
                    <input type="text" className="form-control" id="phoneNum" placeholder="Enter phone" required/>
                </div>
                <div className="col-md-12">
                    <label for="address" className="form-label">Address</label>
                    <input type="text" className="form-control" id="address" placeholder="Enter address" required/>
                </div>
                <div className="col-md-12">
                    <button className="btn btn-primary w-100" type="submit">Save</button>
                </div>
            </form>
        </div>
    );

};

export default FormContact