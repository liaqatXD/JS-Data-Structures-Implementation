
const fs = require('fs').promises;
const { List, Customer } = require('./list');

async function readMoviesFromFile(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        const films = data.split('\r\n').map(film => film.trim());
        return films;
    } catch (error) {
        console.error('Error while reading file:', error);
        throw error;
    }
}


function checkOut(moviesList, customersList, { name, movie }) {
    if (moviesList.contains(movie)) {
        moviesList.remove(movie);
        customersList.append(new Customer(name, movie)); 
    } else {
        console.log(`${movie} is not available`);
    }
}



async function main() {
    const moviesList = new List();
    const customersList = new List();

    try {
        const films = await readMoviesFromFile('./films.txt');
        for (let film of films) {
            moviesList.append(film);
        }

        checkOut(moviesList, customersList, { name: "Liaqat Ali", movie: "The Godfather" });
        checkOut(moviesList, customersList, new Customer('George','Goodfellas'));
        console.log('Customers List:', customersList.toString());
        console.log('Movies List:', moviesList.toString());

    } catch (error) {
        console.error('Failed to initialize lists:', error);
    }
}

main();
