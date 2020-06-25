import storageService from '@/services/storage.service.js';

export default {
    state: {
        wishlist: [],
        sortBy: 'title'
    },
    getters: {
        wishlist(state) {
            return state.wishlist;
        },
        sortBy(state) {
            return state.sortBy;
        }
    },
    mutations: {
        setWishlist(state, { wishlist }) {
            state.wishlist = wishlist;
        },
        setSortBy(state, { sortBy }) {
            state.sortBy = sortBy;
        },
        sortWishlist(state) {
            if (state.sortBy === 'title') {
                state.wishlist.sort((a, b) => {
                    return a.title.toUpperCase() > b.title.toUpperCase() ? 1 
                        : a.title.toUpperCase() < b.title.toUpperCase() ? -1
                        : 0
                    });
            } else if (state.sortBy === 'price') {
                state.wishlist.sort((a, b) => a.price - b.price);
            } else if (state.sortBy === 'rating') {
                state.wishlist.sort((a, b) => b.rating - a.rating);
            }
        },
        addToWishlist(state, { book }) {
            state.wishlist.push(book);
        },
        removeFromWishlist(state, { bookTitle }) {
            const idx = state.wishlist.findIndex(book => book.title === bookTitle);
            if (idx !== -1) state.wishlist.splice(idx, 1);
        }
    },
    actions: {
        loadWishlist(context) {
            const wishlist = storageService.load('wishlist') || [];
            context.commit({ type: 'setWishlist', wishlist });
            context.commit({ type: 'sortWishlist' });
        },
        sortWishlist(context, { sortBy }) {
            context.commit({ type: 'setSortBy', sortBy });
            context.commit({ type: 'sortWishlist' });
        },
        addToWishlist(context, payload) {
            context.commit(payload);
            context.commit({ type: 'sortWishlist' });
            storageService.save('wishlist', context.getters.wishlist);
        },
        removeFromWishlist(context, payload) {
            context.commit(payload);
            storageService.save('wishlist', context.getters.wishlist);
        }
    }
};