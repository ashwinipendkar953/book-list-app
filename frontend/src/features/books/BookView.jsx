import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "./bookSlice";
import BookList from "./BookList";
import { useNavigate } from "react-router-dom";

const BookView = () => {
  const dispatch = useDispatch();
  const { status, error, books } = useSelector((state) => state.books);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div className="container my-3">
      <div className="d-flex gap-2">
        <h1>Book List App</h1>
        <button className="btn btn-primary" onClick={() => navigate("/books")}>
          Add Book
        </button>
      </div>
      {status === "loading" && <div>Loading...</div>}
      {status === "error" && <div style={{ color: "red" }}>{error}</div>}
      <BookList books={books} />
    </div>
  );
};

export default BookView;
