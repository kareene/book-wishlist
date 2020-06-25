import bookService from '@/services/book.service.js';

export default {
    state: {
        books: []
    },
    getters: {
        books(state) {
            return state.books;
        }
    },
    mutations: {
        setBooks(state, { books }) {
            state.books = books;
        }
    },
    actions: {
        async loadBooks(context) {
            const books = await bookService.query();
            context.commit({ type: 'setBooks', books });
            return books;
        }
    }
};