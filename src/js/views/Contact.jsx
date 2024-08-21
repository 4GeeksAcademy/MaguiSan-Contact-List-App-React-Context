//Contiene la lista de contactos
import React, {useContext, useEffect} from "react"; //1
import {Context} from "../store/appContext.js" //2

import ContactCard from "../component/ContactCard.jsx";
import { Link } from "react-router-dom";


const Contact = () => {
    // useContext(Context); //3 desestructurando: puedo solo llamar a uno o a los dos..segun quiera consumir
    // console.log(useContext(Context));

    const{store, actions} = useContext(Context)
    //accedere a la info de demo, .demo porq es un objeto
    // console.log(store.demo);

    // console.log(store.agendasList);
    // console.log(store.contactsList);
    
    useEffect(()=>{
        // actions.getAgendasList()
        actions.getContactsList()
    },[])
    return(
        <div className="text-center w-100 py-3 px-5">
            <div className="row">
                <div className="col">
                    {/* {
                        store.agendasList.map((item, index) => (
                            <li key={index}>{item.NOMBRE_AGENDA}</li>
                        ))
                    } */}
                </div>
                <div className="col text-end pb-3">
                    <Link to="/AddContact">
                        <button className="btn btn-success">Add new contact</button>
                    </Link>
                </div>
            </div>
            <div className="card mb-3">
                <ul className="list-group list-group-flush">
                    <ContactCard/>
                </ul>
            </div>
        </div>
    );
};

export default Contact