

export default class Plane{

	constructor(name, manufacturer, year){
		if (name !="undefined" && manunfacturer !== undefined && typeof year != undefined){ 
		console.log("This name is " + name);
		console.log("This year is" + year);
		console.log("This plane is made by" + "manufacturer");
			this.manufacturer = manufacturer;
		}else{
		console.log("hey man I'm  not flying a Cessna");
		this.manufacturer="manufacturer";
		this.year="year";
		this.name="name";
		}


	}


	fly(person){
		console.log("I'm starting to fly a Cessna")
		let output = "";
		if (typeof person.firstName !="undefined";
		output= `

		${person.firstName} is flying a ${this.manufacturer}!`
	}