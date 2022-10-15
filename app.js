
const app = {};



app.breweries = (query) => {
	// create params for brewery info
	const url = new URL('https://api.openbrewerydb.org/breweries');
	url.search = new URLSearchParams({
		by_city: query,
		by_state: query
	});

	// fetch funtion goes here to get API info
	fetch(url)
		.then(result => {
			return result.json();
		}).then(data => {
			console.log(data);
			// app.displayFlights(data.flightObjects)
		})
};


app.init = () => {
	// code goes here to start app
	app.breweries(query);
	// app.events();
}
app.init();


