import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const apiUrl = import.meta.env.VITE_APP_API_URL;
// console.log(apiUrl);

export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  try {
    const response = await axios.get(`${apiUrl}/books`);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
});

export const deleteBook = createAsyncThunk(
  "books/deleteBook",
  async (bookId) => {
    try {
      const response = await axios.delete(`${apiUrl}/books/${bookId}`);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const addBook = createAsyncThunk("books/addBook", async (bookData) => {
  try {
    const response = await axios.post(`${apiUrl}/books`, bookData);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
});

export const editBook = createAsyncThunk("books/edit", async (bookData) => {
  try {
    const response = await axios.post(
      `${apiUrl}/books/${bookData?._id}`,
      bookData
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
});

const bookSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = "success";
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = "error";
        state.error = action?.error.message;
      })
      .addCase(deleteBook.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteBook.fulfilled, (state) => {
        state.status = "success";
      })
      .addCase(deleteBook.rejected, (state, action) => {
        state.status = "error";
        state.error = action?.error.message;
      })
      .addCase(addBook.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addBook.fulfilled, (state) => {
        state.status = "success";
      })
      .addCase(addBook.rejected, (state, action) => {
        state.status = "error";
        state.error = action?.error.message;
      })
      .addCase(editBook.pending, (state) => {
        state.status = "loading";
      })
      .addCase(editBook.fulfilled, (state) => {
        state.status = "success";
      })
      .addCase(editBook.rejected, (state, action) => {
        state.status = "error";
        state.error = action?.error.message;
      });
  },
});

export const bookReducer = bookSlice.reducer;
