//3 parametros
//set Store actualiza el store (coleccion de datos) ..esos 3 con funciones
//get state es una funcion que retorna un objeto
//que propiedades tiene? store y actions (que es un objeto)
const getState = ({ getStore, getActions, setStore }) => {
	return {
		//demo es un estado (3 vistas, demo, home y single)
		//estudiar tipos de datos
		//cada actualizacion del store no actualiza todo
		//getStore - obtener los estados
		//getActions - obtener las acciones
		// estos dos get hacen la vez de this...en formato funcion :O
		
		store: { //puedo guardar muchos estados
			//estado, espacio de memoria ..como un usestate
			agendasList: [], //lista de todas las agendas
			contactsList: [], //lista de todos los contactos de una agenda
			demo: [//estado de arrays de objetos
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		//objeto donde se guardan las funciones q se usaran en varios componentes
		actions: {
			// Use getActions to call a function within a fuction
			//Estas funciones estan disponible para cada views () y no hacer un fetch para cada view
			//creamos un metodo (porq esta funcion esta dentro de un objeto)
			//de una funcion accede a otra

			getAgendasList: () => {
				fetch("https://playground.4geeks.com/contact/agendas")
				.then((response) => response.json())
				.then((data) =>setStore({agendasList: data.agendas})) //para actualizar mi Store, se especifica en q espacio de memoria se quiere guardar
				.catch((error) => console.log(error))
			},

			getContactsList: () => {
				fetch("https://playground.4geeks.com/contact/agendas/MaguiSan/contacts") //${nombre de la agenda} en vez de MaguiSan
				.then((response) => response.json())
				.then((data) => setStore({contactsList: data.contacts}))
				.catch((error) => console.log(error))
			},

			deleteContact: (id) => {
				fetch(`https://playground.4geeks.com/contact/agendas/MaguiSan/contacts/${id}`,{
					method: "DELETE",
				})
				.then((response) => {
					console.log(response);
					const store = getStore();
					let newList = store.contactsList.filter((item) => item.id !==id)
					setStore({contactsList: newList});
				})
				.catch((error) => console.log(error))
			},

	
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
