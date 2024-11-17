import React, { useState } from "react";

function StreamList() {
  const [input, setInput] = useState("");
  const [movies, setMovies] = useState([]); // State to store the list of movies

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.trim() !== "") {
      setMovies([...movies, input]); // Add the input value to the movies array
      setInput(""); // Clear the input field after submission
    }
  };

  return (
    <div>
      <h1>StreamList Page</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a movie title"
        />
        <button type="submit">Add to List</button>
      </form>

      {/* Display the list of movies */}
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>{movie}</li>
        ))}
      </ul>
    </div>
  );
}

export default StreamList;
