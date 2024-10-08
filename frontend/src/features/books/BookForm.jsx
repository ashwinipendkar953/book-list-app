import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addBook, editBook, fetchBooks } from "./bookSlice";
import { useLocation, useNavigate } from "react-router-dom";
const INITIAL_FORM_DATA = {
  bookName: "",
  author: "",
  genre: "",
};

const BookForm = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const dispatch = useDispatch();
  const { state } = useLocation();
  const navigate = useNavigate();
  const { bookData = {}, isEdit = false } = state || {};

  useEffect(() => {
    if (isEdit) {
      setFormData(bookData);
    } else {
      setFormData(INITIAL_FORM_DATA);
    }
  }, [state]);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newBookData = isEdit ? { _id: bookData?._id, ...formData } : formData;
    if (isEdit) {
      dispatch(editBook(newBookData)).then(() => {
        navigate("/");
      });
    } else {
      dispatch(addBook(newBookData)).then(() => {
        navigate("/");
      });
    }
    setFormData(INITIAL_FORM_DATA);
  };

  return (
    <div className="container my-3">
      <h1>{isEdit ? "Edit Book Form" : "Add Book Form"}</h1>
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
          {isEdit ? "Edit" : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default BookForm;
