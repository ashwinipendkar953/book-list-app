import "bootstrap/dist/css/bootstrap.min.css";
import BookView from "./features/books/BookView";

function App() {
  return (
    <div className="container mt-3">
      <h1>Book List App</h1>
      <BookView />
    </div>
  );
}

export default App;
