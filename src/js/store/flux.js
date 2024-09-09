
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			agendasList: [], //lista de todas las agendas
			contactsList: [], //lista de todos los contactos de una agenda
			selectedContact: null
		},
		actions: {
			// Obtener la lista de agendas
			getAgendasList: () => {
				fetch("https://playground.4geeks.com/contact/agendas")
					.then((response) => response.json())
					.then((data) => setStore({ agendasList: data.agendas })) //para actualizar mi Store, se especifica en q espacio de memoria se quiere guardar
					.catch((error) => console.log(error))
			},
			// Obtener todos los contactos
			getContactsList: () => {
				fetch("https://playground.4geeks.com/contact/agendas/MaguiSan/contacts") //${nombre de la agenda} en vez de MaguiSan
					.then((response) => response.json())
					.then((data) => setStore({ contactsList: data.contacts }))
					.catch((error) => console.log(error))
			},
			// Agregar contactos
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
			// Eliminar contactos segun su id
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

			// Captura la informacion del contacto seleccionado
			editContact: (contactRegister) => {
				setStore({ selectedContact: contactRegister })
			}
		}
	};
};
export default getState;
