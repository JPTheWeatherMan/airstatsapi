const express = require("express");
const aircraft = require("../schemas/Aircraft");
const manufacturers = require("../schemas/Manufacturer");
const auth = require("../middlewares/Auth");
const saveNewUser = require('../utils/saveNewUser')

const apiRouter = express.Router();
apiRouter.use(auth);

// Aircraft family route
apiRouter.get("/family/:aircraftFamily", (req, res) => {
	const aircraftFamily = req.params.aircraftFamily;
	aircraft.find({ family: aircraftFamily }, (err, family) => {
		if (err) return console.log(err);
		if (family === []) {
			res.status(422).json({ message: "Bad request" });
		}
		res.status(200).json(family);
	});
});

// Aircraft model route
apiRouter.get("/model/:aircraftModel", (req, res) => {
	const aircraftModel = req.params.aircraftModel;
	aircraft.find({ model: aircraftModel }, (err, aircraft) => {
		if (err) return console.log(err);
		if (aircraft === []) {
			res.status(422).json({ message: "Bad request" });
		}
		res.status(200).json(aircraft);
	});
});

// Single manufacturer route
apiRouter.get("/manufacturer/:manufacturerId", (req, res) => {
	const manufacturerId = req.params.manufacturerId;
	if (manufacturerId === "all") {
		manufacturers.find({ type: "Manufacturer" }, (err, manufacturer) => {
			if (err) return console.log(err);
			if (manufacturer === []) {
				res.status(422).json({ message: "Bad request" });
			}
			res.status(200).json(manufacturer);
		});
	} else {
		manufacturers.find({ _id: manufacturerId }, (err, manufacturer) => {
			if (err) return console.log(err);
			if (manufacturer === []) {
				res.status(422).json({ message: "Bad request" });
			}
			res.status(200).json(manufacturer);
		});
	}
});

// Manufacturer by type of aircraft route
apiRouter.get("/industry/:industry", (req, res) => {
	typeOfAircraft = req.params.industry.toLowerCase();
	manufacturers.find(
		{ typeOfAircraft: typeOfAircraft },
		(err, manufacturers) => {
			if (err) return console.log(err);
			if (manufacturers === []) {
				res.status(422).json({ message: "Bad request" });
			}
			res.status(200).json(manufacturers);
		}
	);
});

module.exports = apiRouter;
