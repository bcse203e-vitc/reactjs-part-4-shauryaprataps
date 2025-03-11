import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import AddBook from "./components/AddBook";

const App = () => {
  const [books, setBooks] = useState([
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 10, description: "A classic novel set in the 1920s." },
    { id: 2, title: "1984", author: "George Orwell", price: 15, description: "A dystopian novel about totalitarianism." },
  ]);

  const addBook = (newBook) => {
    setBooks([...books, { id: books.length + 1, ...newBook }]);
  };

  return (
    <Router>
      <nav className="p-4 bg-gray-800 text-white">
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/add-book">Add Book</Link>
      </nav>
      <Routes>
        <Route path="/" element={<BookList books={books} />} />
        <Route path="/book/:id" element={<BookDetails books={books} />} />
        <Route path="/add-book" element={<AddBook addBook={addBook} />} />
      </Routes>
    </Router>
  );
};

export default App;
