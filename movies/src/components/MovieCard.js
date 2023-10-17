import React, { useState } from 'react';
import './MovieCard.css';

const MovieCard = ({ movie, onDelete }) => {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const handleDelete = () => {
    setShowDeleteConfirmation(true);
  };

  const confirmDelete = () => {
    onDelete(movie.id);
    setShowDeleteConfirmation(false);
  };

  const cancelDelete = () => {
    setShowDeleteConfirmation(false);
  };

  return (
    <div className="movie-card">
      <img src={movie.posterURL} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p className="rating">Rating: {movie.rating}</p>
      <button onClick={handleDelete} className="delete-button">
        Delete
      </button>

      {showDeleteConfirmation && (
        <div className="delete-confirmation">
          <p>Are you sure you want to delete this movie?</p>
          <button onClick={confirmDelete} className="confirm-button">
            Confirm
          </button>
          <button onClick={cancelDelete} className="cancel-button">
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
