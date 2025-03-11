import React, { useState } from "react";
import { Link } from "react-router-dom";

const BookList = ({ books }) => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Book List</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id} className="border p-4 rounded mb-2 shadow">
            <h2 className="text-lg font-semibold">{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Price: ${book.price}</p>
            <Link to={`/book/${book.id}`} className="text-blue-500">
              View Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
