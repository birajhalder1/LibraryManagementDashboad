import { axios } from "axios";
const url = "http://localhost:5000/api/v1/books/";

class BookService {
    // Create Book
    static createSingleBooks(text) {
        return axios.post(url, {
            //
        })
    }
}