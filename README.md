# fortune-cookie

`fortune-cookie` is a small Node.js command-line application that selects a random fortune from a local JSON collection and prints it to the terminal with colored formatting.

This project demonstrates CommonJS modules, asynchronous functions, JSON data loading, error handling, and terminal styling.

## Features

- Selects a random fortune from `fortunes.json`.
- Displays the result in the terminal.
- Uses colored terminal output for readability.
- Keeps fortune data separate from the application logic.
- Handles errors with a readable error message.

## Built With

- Node.js
- CommonJS modules
- JavaScript
- JSON
- `ansi-colors`

## Project Structure

```text
fortune-cookie/
├── app.js          # Command-line entry point
├── fortune.js      # Fortune selection module
├── fortunes.json   # Collection of fortunes
├── package.json    # Project metadata and dependencies
└── package-lock.json
```

## Getting Started

### Prerequisites

- Node.js installed on your computer.
- npm, included with Node.js.

### Install Dependencies

```bash
npm install
```

### Run the Application

```bash
node app.js
```

Each run selects a fortune at random from the local JSON file.

## How It Works

`app.js` imports the `getFortune` function from `fortune.js`. The function loads the fortune collection, chooses a random entry, and returns it with terminal color formatting provided by `ansi-colors`.

If an error occurs while loading the data or generating the fortune, the application catches the error and prints a message instead of failing silently.

## License

No license has been specified for this repository yet.
