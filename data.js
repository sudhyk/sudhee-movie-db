const movies = [
    { id: '1', title: 'Inception', releaseYear: 2010, directorId: '1', genres: ['Action', 'Sci-Fi', 'Thriller'] },
    { id: '2', title: 'The Dark Knight', releaseYear: 2008, directorId: '1', genres: ['Action', 'Crime', 'Drama'] },
  ];
  
  const directors = [
    { id: '1', name: 'Christopher Nolan', movies: ['1', '2'] },
  ];
  
  module.exports = { movies, directors };
  