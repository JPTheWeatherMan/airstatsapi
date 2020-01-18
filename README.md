# Aircraft Stats API

## Authorization

Authorization is sent in headers with the key of 'apikey'. While the front end is under construction you can use this public key to preform get requests

`d13ceb09-e49b-4ff4-bb7b-b4fd9d48b1e2`

## Routes
`GET https://airstats.app/api/industry/:type`

Will get all manufactureres of type (ex: general, commercial)


`GET https://airstats.app/api/model/:model`

Will get model associated with model ID. be wary of capitialization of models (ex: 737-max-7, 787-8, A330-200ceo)


`GET https://airstats.app/api/manufacturer/:id`

Will get manufacturer by ID (ex: boeing, airbus)


`GET https://airstats.app/api/manufacturer/all`

Will get all avaliable manufacturers


`GET https://airstats.app/api/family/:family`

Will get aircraft family (ex: 737, 777, A350)


## How to install

Clone repository

`git clone https://github.com/JPTheWeatherMan/Air-Stats-API.git`


Create .env in root and add URI to DB and port.


Install Dependencies

`npm install`


Start dev server

`npm run dev`

Start production server

'npm run production'

## Dependencies
  - Express
  
  - Body Parser
  
  - PM2

  - Mongoose

  - Helmet

  - Dotenv

  -CORS

  -UUID
