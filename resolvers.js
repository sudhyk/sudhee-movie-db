const { v4: uuidv4 } = require('uuid');
const { movies, directors } = require('./data');

const resolvers = {
  Query: {
    movie: (parent, { id }, context, info) => {
      return movies.find(movie => movie.id === id);
    },
    director: (parent, { id }, context, info) => {
      return directors.find(director => director.id === id);
    },
  },
  Mutation: {
    createMovie: (parent, { title, releaseYear, directorId, genres }, context, info) => {
      const newMovie = { id: uuidv4(), title, releaseYear, directorId, genres };
      movies.push(newMovie);
      return newMovie;
    },
    createDirector: (parent, { name }, context, info) => {
      const newDirector = { id: uuidv4(), name, movies: [] };
      directors.push(newDirector);
      return newDirector;
    },
  },
  Movie: {
    director: (parent, args, context, info) => {
      return directors.find(director => director.id === parent.directorId);
    },
  },
  Director: {
    movies: (parent, args, context, info) => {
      return movies.filter(movie => movie.directorId === parent.id);
    },
  },
};

module.exports = resolvers;
