import React, { useState } from "react";
import { useParams } from "react-router-dom";

const BookDetails = ({ books }) => {
  const { id } = useParams();
  const book = books.find((b) => b.id === parseInt(id));
  const [addedToCart, setAddedToCart] = useState(false);

  if (!book) return <h2>Book not found!</h2>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{book.title}</h1>
      <p>Author: {book.author}</p>
      <p>Price: ${book.price}</p>
      <p>Description: {book.description}</p>
      <button
        onClick={() => setAddedToCart(true)}
        className={`mt-4 p-2 ${addedToCart ? "bg-gray-400" : "bg-blue-500"} text-white rounded`}
        disabled={addedToCart}
      >
        {addedToCart ? "Added to Cart" : "Add to Cart"}
      </button>
    </div>
  );
};

export default BookDetails;
