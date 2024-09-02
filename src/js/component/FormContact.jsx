//Muestra unicamente el formulario
import React, {useContext, useEffect} from "react";
import { Context } from "../store/appContext";

const FormContact = () => {
    const{store, actions} = useContext(Context)
    
    // const handleSubmit = (e)=>{
    //     e.preventDefault()

    // }

    // useEffect(()=>{
    //     actions.addContact()
    // },[])

    return(
        <div className="p-2 w-75">
            {/* onSubmit={handleSubmit} */}
            <form className="row g-3 text-start">
                <div className="col-md-12">
                    <label for="fullName" className="form-label fw-semibold">Full name</label>
                    <input type="text" className="form-control" id="fullName" placeholder="Name Last name" onChange={(e) => store.contactList.name(e.target.value)} required/>
                </div>
                <div class="col-md-12">
                    <label for="emailAdd" class="form-label fw-semibold">Email</label>
                    <input type="email" class="form-control" id="emailAdd" placeholder="name"/>
                </div>
                <div className="col-md-12">
                    <label for="phoneNum" className="form-label fw-semibold">Phone</label>
                    <input type="text" className="form-control" id="phoneNum" placeholder="Enter phone" required/>
                </div>
                <div className="col-md-12">
                    <label for="address" className="form-label fw-semibold">Address</label>
                    <input type="text" className="form-control" id="address" placeholder="Enter address" required/>
                </div>
                <div className="col-md-12">
                    {/* onClick={()=>actions.addContact()} */}
                    <button className="btn btn-primary w-100 fw-semibold" type="submit" >Save</button>
                </div>
            </form>
        </div>
    );
};

export default FormContact