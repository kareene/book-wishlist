import Vue from 'vue';
import Vuex from 'vuex';
import bookStore from '@/store/book.store.js';
import wishlistStore from '@/store/wishlist.store.js';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    bookStore,
    wishlistStore
  }
});
