import "bootstrap/dist/css/bootstrap.min.css";
import BookView from "./features/books/BookView";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookForm from "./features/books/BookForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookView />} />
        <Route path="/books" element={<BookForm />} />
        <Route path="/books/:id" element={<BookForm />} />
      </Routes>
    </Router>
  );
}

export default App;
