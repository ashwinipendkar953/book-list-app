import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook, fetchBooks } from "./bookSlice";
const INITIAL_FORM_DATA = {
  bookName: "",
  author: "",
  genre: "",
};

const BookForm = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const dispatch = useDispatch();
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (formData.bookName && formData.author && formData.genre) {
      dispatch(addBook(formData)).then(() => {
        dispatch(fetchBooks());
      });
    }
    setFormData(INITIAL_FORM_DATA);
  };

  return (
    <div>
      <h2>BookForm</h2>
      <form action="" className="my-3" onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="bookName" className="form-label">
            Book Name:
          </label>
          <input
            type="text"
            name="bookName"
            id="bookName"
            className="form-control"
            value={formData?.bookName || ""}
            onChange={changeHandler}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="author" className="form-label">
            Author:
          </label>
          <input
            type="text"
            name="author"
            id="author"
            className="form-control"
            value={formData?.author || ""}
            onChange={changeHandler}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="genre" className="form-label">
            Genre:
          </label>
          <input
            type="text"
            name="genre"
            id="genre"
            className="form-control"
            value={formData?.genre || ""}
            onChange={changeHandler}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BookForm;
