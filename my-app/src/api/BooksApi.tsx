import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:7777/';

export const getAllBooks = () => {
    return axios.get('books')
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error;
        });
}

export const getBookById = (id:any) => {
    return axios.get('book/' + id)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error;
        });
}

export const getNotesByDate = (date:any) => {
    return axios.get("/books/" + date)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error;
        });
}

export const addBook = (body:any) => {
    return axios.post("/books", body)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error;
        });
}

export const editBook = (id:number, body:any) => {
    return axios.put("/book/" + id, body)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error;
        });
}

export const deleteBook = (id:number) => {
    return axios.delete("/book/" + id)
        .then(response => {
            return response;
        })
        .catch((error) => {
            return error;
        });
}



