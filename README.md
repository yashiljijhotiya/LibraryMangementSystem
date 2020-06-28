# Library Mangement System
This project is developed to manage Books in the Library. It is designed and developed in layered fashion.

1. Interaction Layer for Users - [LibraryClientApp](https://github.com/yashiljijhotiya/LibraryMangementSystem/tree/master/LibraryClientApp)
2. Backend API Server - [LibraryAPIServer](https://github.com/yashiljijhotiya/LibraryMangementSystem/tree/master/LibraryAPIServer)

### Features
1. Add Books (Book Information, Author Information)
2. Edit Books (Book Information, Author Information)
3. Delete Book 
4. View All Books
5. Search Books by Name

## Technology Used
### Client App
1. [Angular](https://angular.io/) 9.1.9
2. [NgRX](https://ngrx.io/) for Redux.

### Backend Server
1. [NodeJs](https://nodejs.org/en/) 
2. [NodeJs Express](https://expressjs.com/)

### Backend Database for Books
1. JSON file store - [book.json](https://github.com/yashiljijhotiya/LibraryMangementSystem/blob/master/LibraryAPIServer/data_store/book.json)

# Deployment
## Dependency Requirements
1. Install NodeJS v12.18.1 and Node Package Manager npm 6.14.5
2. Install Angular CLI  `npm install -g @angular/cli` 
3. Clone the project LibraryMangementSystem `git clone https://github.com/yashiljijhotiya/LibraryMangementSystem.git`

## Setup and Run LibraryAPIServer
1. Goto LibraryAPIServer
2. `cd LibraryAPIServer`
3. `npm install` //Install all the required dependencies
3. `nodemon index.js` // Will run the Backend server on `http://localhost:3000/`

## Setup and Run LibraryClientApp
1. Goto LibraryClientapp
2. `cd LibraryClientApp`
3. `npm install` //Install all the required dependencies
3. `ng serve` // Will run the Client App on `http://localhost:4200/`
