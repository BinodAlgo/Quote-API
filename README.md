# Express Quotes API

This is a simple Express.js API for managing quotes.

## Features

- Get all quotes
- Get a specific quote by ID
- Add a new quote
- Update a quote by ID
- Delete a quote by ID

## Installation

1. Clone this repository:
   git clone https://github.com/AlgoBinod/Quote-API.git
2. Navigate into the project directory:
   cd Quote-API
3. Install the dependencies:
   npm install

## Setup

1. Start the server:
   npm start

## Usage

The API has the following routes:

- `GET /api/quotes`: Get all quotes
- `GET /api/quotes/:id`: Get a specific quote by ID
- `POST /api/quotes`: Add a new quote (send a JSON body with `author` and `quote` properties)
- `PUT /api/quotes/:id`: Update a quote by ID (send a JSON body with `author` and `quote` properties)
- `DELETE /api/quotes/:id`: Delete a quote by ID

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
