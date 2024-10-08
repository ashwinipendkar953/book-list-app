import { useDispatch } from "react-redux";
import { deleteBook, fetchBooks } from "./bookSlice";

const BookList = ({ books }) => {
  const dispatch = useDispatch();
  return (
    <div className="container">
      {books?.map((book) => {
        return (
          <div
            key={book?._id}
            className="border border-2 my-3 py-2 px-5 d-flex justify-content-between align-items-center"
          >
            <div>
              <p className=" mb-0">Book Name: {book?.bookName}</p>
              <p className="mb-0">Author: {book?.author}</p>
              <p className="mb-0">Genre: {book?.genre}</p>
            </div>

            <button
              className="btn btn-danger "
              onClick={() => {
                dispatch(deleteBook(book?._id)).then(() => {
                  dispatch(fetchBooks());
                });
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default BookList;
