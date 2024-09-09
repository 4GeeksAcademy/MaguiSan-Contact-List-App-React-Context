//3 parametros
//set Store actualiza el store (coleccion de datos) ..esos 3 con funciones
//get state es una funcion que retorna un objeto
//que propiedades tiene? store y actions (que es un objeto)
const getState = ({ getStore, getActions, setStore }) => {
	return {
		//cada actualizacion del store no actualiza todo
		//getStore - obtener los estados
		//getActions - obtener las acciones

		store: {
			agendasList: [], //lista de todas las agendas
			contactsList: [], //lista de todos los contactos de una agenda
			selectedContact: null
		},
		actions: {
			getAgendasList: () => {
				fetch("https://playground.4geeks.com/contact/agendas")
					.then((response) => response.json())
					.then((data) => setStore({ agendasList: data.agendas })) //para actualizar mi Store, se especifica en q espacio de memoria se quiere guardar
					.catch((error) => console.log(error))
			},

			getContactsList: () => {
				fetch("https://playground.4geeks.com/contact/agendas/MaguiSan/contacts") //${nombre de la agenda} en vez de MaguiSan
					.then((response) => response.json())
					.then((data) => setStore({ contactsList: data.contacts }))
					.catch((error) => console.log(error))
			},

			addContact: (newContact) => {
				fetch("https://playground.4geeks.com/contact/agendas/MaguiSan/contacts", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(newContact)
				})
					.then((response) => response.json())
					.then((data) => {
						console.log(data)
						if (data) {
							setStore({ contactsList: [...getStore().contactsList, data] })
							alert(`Contact ${newContact.name} was successfully created.`)
						} else {
							alert("Something went wrong")
						}
					})
					.catch((error) => console.log(error))
			},

			deleteContact: (id) => {
				fetch(`https://playground.4geeks.com/contact/agendas/MaguiSan/contacts/${id}`, {
					method: "DELETE",
				})
					.then((data) => {
						console.log(data);
						if (data.ok) {
							const store = getStore();
							const newList = store.contactsList.filter((item) => item.id !== id)
							setStore({ contactsList: newList });
							alert("Contact successfully deleted.")
						} else {
							console.error("Failed to delete contact")
							alert("Something went wrong")
						}
					})
					.catch((error) => console.log(error))
			},

			//Editar contactos
			upDateContact: (contactData, id) => {
				fetch(`https://playground.4geeks.com/contact/agendas/MaguiSan/contacts/${id}`, {
					method: "PUT",
					headers: {
						"Content-type": "application/json"
					},
					body: JSON.stringify(contactData)
				})
					.then(response => response.json())
					.then(data => {
						console.log(data)
						if (data) {
							const store = getStore();
							const contactEdited = store.contactsList.map((item) => item.id === id ? { ...item, ...contactData } : item);
							setStore({ contactsList: contactEdited, selectedContact: null });
							alert("Contact successfully updated.")
						} else {
							console.error("failed to update contact")
							alert("Something went wrong")
						}
					})
					.catch(error => console.log(error))
			},
			editContact: (contactRegister) => {
				setStore({ selectedContact: contactRegister })
			}
		}
	};
};
export default getState;
