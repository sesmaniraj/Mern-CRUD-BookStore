import React, { useState, useEffect } from "react";
import {
  FaBook,
  FaCalendarAlt,
  FaUser,
  FaMoneyBill,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/books");
        const data = await res.json();
        setBooks(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleEdit = (bookId) => {
    console.log(`Edit book with ID ${bookId}`);
  };

  const handleDelete = (bookId) => {
    console.log(`Delete book with ID ${bookId}`);
  };

  if (loading) {
    return <h1>Loading..</h1>;
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">Book List</h1>
      {books.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {books.map((book) => (
            <div
              key={book._id}
              className="bg-blue-400 text-white rounded p-4 shadow-md"
            >
              <h2 className="text-xl font-semibold mb-2">{book.name}</h2>
              <p className="text-gray-100 mb-4">{book.description}</p>
              <div className="flex space-x-4">
                <div className="flex items-center">
                  <FaCalendarAlt className="mr-2" /> {book.publishYear}
                </div>
                <div className="flex items-center">
                  <FaUser className="mr-2" /> {book.author}
                </div>
                <div className="flex items-center">
                  <FaMoneyBill className="mr-2" /> ${book.price}
                </div>
              </div>
              <div className="mt-4 flex justify-between">
                <button
                  onClick={() => handleEdit(book._id)}
                  className="bg-white text-blue-400  px-2 rounded hover:bg-blue-200 focus:outline-none flex items-center"
                >
                  <FaEdit className="mr-2" />
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(book._id)}
                  className="bg-white text-red-500 py-2 px-4 rounded hover:bg-red-200 focus:outline-none flex items-center"
                >
                  <FaTrash className="mr-2" />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No books available</p>
      )}
    </div>
  );
};

export default BookList;
