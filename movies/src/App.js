import React, { useState } from 'react';
import './App.css';
import MovieList from './components/MovieList'; // Adjust the path as needed
import Filter from './Filter'; // Correct the import statement for Filter

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'GAME OF THRONES',
      description: 'Game of Thrones is a medieval fantasy television series based on the fantasy novel series A Song of Ice and Fire by George R. R. Martin.',
      posterURL: '1.jpeg',
      rating: 9.9,
    },
    {
      id: 2,
      title: 'THE WALKING DEAD',
      description: 'The Walking Dead was created by Robert Kirkman, and the first issue in this blockbuster series hit comic stands in 2003. The first six issues feature amazing ...',
      posterURL: '2.jpeg',
      rating: 9.5,
    },
    {
      id: 3,
      title: 'MR. ROBOT',
      description: 'Mr. Robot follows Elliot, a young programmer who works as a cyber-security engineer by day and a vigilante hacker by night. Elliot finds himself at a crossroads when the mysterious leader (Christian Slater) of an underground hacker...',
      posterURL: '3.jpeg',
      rating: 8.9,
    },
    // Add more movies here
  ]);

  const [filter, setFilter] = useState({ title: '', rating: '' });

  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: '',
  });

  const handleFilterChange = (filterType, value) => {
    setFilter({ ...filter, [filterType]: value });
  };

  const handleNewMovieChange = (field, value) => {
    setNewMovie({ ...newMovie, [field]: value });
  };

  const deleteMovie = (id) => {
    const updatedMovies = movies.filter((movie) => movie.id !== id);
    setMovies(updatedMovies);
  };

  const filteredMovies = movies.filter((movie) => {
    const titleMatch = movie.title.toLowerCase().includes(filter.title.toLowerCase());
    const ratingMatch = filter.rating === '' || movie.rating >= parseFloat(filter.rating);
    return titleMatch && ratingMatch;
  });

  const addMovie = () => {
    const newId = movies.length + 1;
    setMovies([...movies, { ...newMovie, id: newId }]);
    setNewMovie({
      title: '',
      description: '',
      posterURL: '',
      rating: '',
    });
  };

  return (
    <div className="App">
      <h1>NETFLIX/ATEF</h1>
      <div className="filter-and-button">
        <Filter handleFilterChange={handleFilterChange} />
        <div className="add-movie-form">
          <input
            type="text"
            placeholder="Title"
            value={newMovie.title}
            onChange={(e) => handleNewMovieChange('title', e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            value={newMovie.description}
            onChange={(e) => handleNewMovieChange('description', e.target.value)}
          />
          <input
            type="text"
            placeholder="Poster URL"
            value={newMovie.posterURL}
            onChange={(e) => handleNewMovieChange('posterURL', e.target.value)}
          />
          <input
            type="text"
            placeholder="Rating"
            value={newMovie.rating}
            onChange={(e) => handleNewMovieChange('rating', e.target.value)}
          />
          <button onClick={addMovie}>Add New Movie</button>
        </div>
      </div>
      <MovieList movies={filteredMovies} onDelete={deleteMovie} />
    </div>
  );
}

export default App;
