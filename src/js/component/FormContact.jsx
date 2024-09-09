//Muestra unicamente el formulario
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const FormContact = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate()
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    })
    // Guardando los datos introducidos
    const handleData = (e) => {
        let input_value = e.target.value
        let type = e.target.name
        setData({ ...data, [type]: input_value })
    }
    // Enviando los datos para ejecutarse en actions
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data)
        if (store.selectedContact) {
            actions.upDateContact(data, store.selectedContact.id)
            console.log(store.selectedContact.id)
        } else {
            actions.addContact(data)
        }
        setData({
            name: "",
            email: "",
            phone: "",
            address: ""
        })
        actions.editContact(null)
        navigate("/");
    }
    useEffect(() => {
        if (store.selectedContact) {
            setData({
                name: store.selectedContact.name,
                email: store.selectedContact.email,
                phone: store.selectedContact.phone,
                address: store.selectedContact.address
            })
        }
    }, [store.selectedContact])

    return (
        <div className="p-2 w-75">
            <form className="row g-3 text-start" onSubmit={handleSubmit}>
                <div className="col-md-12">
                    <label htmlFor="fullName" className="form-label fw-semibold">Full name</label>
                    <input value={data.name} name="name" type="text" className="form-control" id="fullName" placeholder="Name Last name" onChange={handleData} required />
                </div>
                <div className="col-md-12">
                    <label htmlFor="emailAdd" className="form-label fw-semibold">Email</label>
                    <input type="email" value={data.email} name="email" className="form-control" id="emailAdd" placeholder="name@example.com" onChange={handleData} required />
                </div>
                <div className="col-md-12">
                    <label htmlFor="phoneNum" className="form-label fw-semibold">Phone</label>
                    <input type="text" value={data.phone} name="phone" className="form-control" id="phoneNum" placeholder="Enter phone" onChange={handleData} required />
                </div>
                <div className="col-md-12">
                    <label htmlFor="address" className="form-label fw-semibold">Address</label>
                    <input type="text" value={data.address} name="address" className="form-control" id="address" placeholder="Enter address" onChange={handleData} required />
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