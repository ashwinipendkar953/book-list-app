import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "./bookSlice";
import BookList from "./BookList";
import BookForm from "./BookForm";

const BookView = () => {
  const dispatch = useDispatch();
  const { status, error, books } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div>
      {status === "loading" && <div>Loading...</div>}
      {status === "error" && <div style={{ color: "red" }}>{error}</div>}
      <BookList books={books} />
      <BookForm />
    </div>
  );
};

export default BookView;
