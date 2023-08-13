# React Query Example Project

This project demonstrates the basic usage of `react-query` for data-fetching in a React application. It uses `json-server` as a mock backend to serve data.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Project Structure](#project-structure)

## Installation

To install the required dependencies:

npm install

## Usage

To start the project:

npm start

This command concurrently runs the React development server and the `json-server`.

## Project Structure

### Server

The database structure for the mock server is found in `db.json`:

The rest api server runs on port `5000`.

The graphql api runs on port `5001`.

### React Application

- **App.js**: This component fetches and displays posts using the `useQuery` hook from `react-query`. 
  - It handles different states like loading, error, and success.
  
- **index.js**: The entry point of the app. It wraps the application within the `QueryClientProvider` to provide `react-query` functionalities to the child components.

### Scripts

- `start`: Runs both the React development server and `json-server` using `concurrently`.
- `server`: Starts the `json-server` using the `db.json` file.
