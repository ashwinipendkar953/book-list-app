import { useDispatch } from "react-redux";
import { deleteBook, fetchBooks } from "./bookSlice";
import { useNavigate } from "react-router-dom";

const BookList = ({ books }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

            <div className="d-flex gap-2">
              <button
                className="btn btn-success"
                onClick={() =>
                  navigate(`/books/${book?._id}`, {
                    state: { bookData: book, isEdit: true },
                  })
                }
              >
                Edit
              </button>
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
          </div>
        );
      })}
    </div>
  );
};

export default BookList;
