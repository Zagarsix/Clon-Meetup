import { toast } from "react-toastify";
import Swal from "sweetalert2";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			events: [
				{
					ID: 4,
					title: "Charla Anual de Ortodoncia",
					content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fringilla vehicula luctus. Maecenas vehicula nisl velit, ac iaculis lacus venenatis id. Duis eleifend ac justo a ultricies. Praesent feugiat ligula.",
					day: "Enero 8",
					time: "07:00 am",
					location: "Las Condes, Santiago",
					meetup: "1",

				},
				{
					ID: 2,
					tittle: "Estética facial",
					content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat ultrices tempor. Curabitur id nunc risus. Duis sapien turpis, vehicula sed massa in, hendrerit commodo arcu. In est sem, ullamcorper venenatis scelerisque consequat, dapibus a",
					day: "Enero 10",
					time: "03:00 pm",
					location: "Miami, Florida",
					meetup: "1",

				},
				{
					ID: 1,
					title: "Junta Local de fútbol",
					content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat ultrices tempor. Curabitur id nunc risus. Duis sapien turpis, vehicula sed massa in, hendrerit commodo arcu. In est sem, ullamcorper venenatis scelerisque consequat, dapibus a",
					day: "Enero 12",
					time: "10:00 pm",
					location: "Santa Cruz, Colchagua",
					meetup: "2",
				},
				{
					ID: 3,
					title: "Influencia del fútbol en la juventud",
					content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat ultrices tempor. Curabitur id nunc risus. Duis sapien turpis, vehicula sed massa in, hendrerit commodo arcu. In est sem, ullamcorper venenatis scelerisque consequat, dapibus a",
					day: "Enero 28",
					time: "12:00 pm",
					location: "Providencia, Santiago",
					meetup: "2",
				},
				{
					ID: 5,
					title: "Conversatorio regional",
					content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat ultrices tempor. Curabitur id nunc risus. Duis sapien turpis, vehicula sed massa in, hendrerit commodo arcu. In est sem, ullamcorper venenatis scelerisque consequat, dapibus a",
					day: "Febrero 2",
					time: "02:00 pm",
					location: "Centenario, Neuquén",
					meetup: "3",
				},
				{
					ID: 6,
					title: "Proyectos varios",
					content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat ultrices tempor. Curabitur id nunc risus. Duis sapien turpis, vehicula sed massa in, hendrerit commodo arcu. In est sem, ullamcorper venenatis scelerisque consequat, dapibus a",
					day: "Febrero 17",
					time: "09:00 am",
					location: "Almagro, Buenos Aires",
					meetup: "3",
				},
				{
					ID: 7,
					title: "Proyecto arma-X",
					content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat ultrices tempor. Curabitur id nunc risus. Duis sapien turpis, vehicula sed massa in, hendrerit commodo arcu. In est sem, ullamcorper venenatis scelerisque consequat, dapibus a",
					day: "Febrero 28",
					time: "09:00 am",
					location: "Westchester, Nueva York",
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
					description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
				},
				{
					ID: 3,
					name: "Generation of lions",
					description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
				},

			],
			apiURL: "http://127.0.0.1:5000",
			name: "",
			lastname: "",
			username: "",
			email: "",
			password: "",
			errors: null,
			currentUser: null,
		},

		actions: {
			handleChange: (e) => {
				const { name, value } = e.target;
				setStore({
					[name]: value,
				});
			},
			handleLogin: async (e) => {
				e.preventDefault();

				const { apiURL, email, password } = getStore();

				const fields = {
					email: email,
					password: password,
				};

				// Fetching data from API
				const response = await fetch(`${apiURL}/api/login`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(fields),
				});

				const { status, msg, data } = await response.json();

				console.log(data);

				// Display a certain notification based on status of the fetch data
				if (status === "failed") {
					toast.warn(msg), {
						position: "bottom-center",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: false,
						draggable: true,
						progress: undefined,
						theme: "dark",
						transition: "Bounce",
					}
				}
				if (status === "success") {
					Swal.fire({
						icon: "success",
						title: msg,
						showConfirmButton: false,
						timer: 1500,
					});

					// Saving user data on session storage
					sessionStorage.setItem("currentUser", JSON.stringify(data));

					setStore({
						currentUser: data,
						// clear data if user sign out
						email: "",
						password: "",
					});
				}
			},

			handleRegister: async (e) => {
				e.preventDefault();

				const { apiURL, name, lastname, username, email, password } = getStore();

				const fields = {
					name: name,
					lastname: lastname,
					username: username,
					email: email,
					password: password,
				};

				// Fetching data from API
				const response = await fetch(`${apiURL}/api/register`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(fields),
				});

				const { status, msg, data } = await response.json();

				console.log(data);

				// Display a certain notification based on status of the fetch data
				if (status === "failed") {
					toast.error(msg);
				}
				if (status === "success") {
					Swal.fire({
						icon: "success",
						title: msg,
						showConfirmButton: false,
						timer: 1500,
					});

					// Saving user data on session storage
					sessionStorage.setItem("currentUser", JSON.stringify(data));
				};

				setStore({
					currentUser: data,
					// clear data if user sign out
					name: "",
					lastname: "",
					username: "",
					email: "",
					password: "",
				});
			},

			loadProfile: () => {
				const { currentUser } = getStore();

				console.log(currentUser)
			},
			checkAuth: () => {
				if (sessionStorage.getItem("currentUser")) {
					setStore({
						currentUser: JSON.parse(sessionStorage.getItem("currentUser")),
					});
				}
			},
			handleLogout: () => {
				if (sessionStorage.getItem("currentUser")) {
					sessionStorage.removeItem("currentUser");
					setStore({
						email: "",
						password: "",
						currentUser: null,
					});
					getActions().checkAuth();
				}
			},



			// // Use getActions to call a function within a fuction
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },
			// 	loadSomeData: () => {
			// 		/**
			// 			fetch().then().then(data => setStore({ "foo": data.bar }))
			// 		*/
			// 	},
			// 		changeColor: (index, color) => {
			// 			//get the store
			// 			const store = getStore();

			// 			//we have to loop the entire demo array to look for the respective index
			// 			//and change its color
			// 			const events = store.events.map((elm, i) => {
			// 				if (i === index) elm.background = color;
			// 				return elm;
			// 			});

			//reset the global store
			// setStore({ events: events });
		}
	}
};


export default getState;
