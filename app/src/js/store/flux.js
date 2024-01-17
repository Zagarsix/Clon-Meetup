const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			events: [
				{
					ID: 4,
					title: "Charla Anual de Ortodoncia",
					content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fringilla vehicula luctus. Maecenas vehicula nisl velit, ac iaculis lacus venenatis id. Duis eleifend ac justo a ultricies. Praesent feugiat ligula.",
					day: "Enero 28",
					time: "10:00 am",
					meetup: "1",
					
				},
				{
					ID: 2,
					title: "Estética facial",
					content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat ultrices tempor. Curabitur id nunc risus. Duis sapien turpis, vehicula sed massa in, hendrerit commodo arcu. In est sem, ullamcorper venenatis scelerisque consequat, dapibus a",
					day: "Enero 10",
					time: "03:00 pm",
					meetup: "1",
					
				},
				{
					ID: 1,
					title: "Junta Local de fútbol",
					content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat ultrices tempor. Curabitur id nunc risus. Duis sapien turpis, vehicula sed massa in, hendrerit commodo arcu. In est sem, ullamcorper venenatis scelerisque consequat, dapibus a",
					day: "Enero 8",
					time: "07:00 pm",
					meetup: "2",
				},
				{
					ID: 3,
					title: "Influencia del fútbol en la juventud",
					content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat ultrices tempor. Curabitur id nunc risus. Duis sapien turpis, vehicula sed massa in, hendrerit commodo arcu. In est sem, ullamcorper venenatis scelerisque consequat, dapibus a",
					day: "Enero 12",
					time: "12:00 pm",
					meetup: "2",
				},
				{
					ID: 5,
					title: "Conversatorio regional",
					content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat ultrices tempor. Curabitur id nunc risus. Duis sapien turpis, vehicula sed massa in, hendrerit commodo arcu. In est sem, ullamcorper venenatis scelerisque consequat, dapibus a",
					day: "Febrero 2",
					time: "02:00 pm",
					meetup: "3",
				},
				{
					ID: 6,
					title: "Proyectos varios",
					content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat ultrices tempor. Curabitur id nunc risus. Duis sapien turpis, vehicula sed massa in, hendrerit commodo arcu. In est sem, ullamcorper venenatis scelerisque consequat, dapibus a",
					day: "Febrero 17",
					time: "09:00 am",
					meetup: "3",
				},		
				{
					ID: 7,
					title: "Proyecto arma-X",
					content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat ultrices tempor. Curabitur id nunc risus. Duis sapien turpis, vehicula sed massa in, hendrerit commodo arcu. In est sem, ullamcorper venenatis scelerisque consequat, dapibus a",
					day: "Febrero 28",
					time: "09:00 am",
					meetup: "3",
				},						
			],
			meetups: [
				{
					ID: 1,
					name: "The best dentists",
					description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
				},
				{
					ID: 2,
					name: "Santa Cruz Team",
					description:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
				},
				{
					ID: 3,
					name: "Generation of lions",
					description:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
				},

			],
			prueba:"rojo",
			Demo: "King"
		},
		actions: {
			// Use getActions to call a function within a fuction
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
				const events = store.events.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ events: events });
			}
		}
	};
};

export default getState;
