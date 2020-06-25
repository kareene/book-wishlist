<template>
    <section class="my-wishlist flex direction-column">
        <wishlist-sort :sortBy="sortBy" @set-sort="sortWishlist" />

        <ul class="clean-list">
            <li v-for="book in wishlist" :key="book.title" class="flex align-center space-between">
                <p>{{book.title}}</p>
                <button class="clear-button" @click="removeFromWishlist(book.title)">
                    <i class="fas fa-times"></i>
                </button>
            </li>
        </ul>

        <h3>Total: {{total}}</h3>
    </section>
</template>

<script>
import wishlistSort from '@/components/wishlist-sort.vue';

export default {
    name: 'myWishlist',
    created() {
        this.$store.dispatch({ type: 'loadWishlist'});
    },
    computed: {
        wishlist() {
            return this.$store.getters.wishlist;
        },
        sortBy() {
            return this.$store.getters.sortBy;
        },
        total() {
            const total = this.wishlist.reduce((sum, book) => sum + +book.price, 0);
            return total.toLocaleString('en-US', { style:'currency', currency:'USD' });
        }
    },
    methods: {
        removeFromWishlist(bookTitle) {
            this.$store.dispatch({ type: 'removeFromWishlist', bookTitle });
        },
        sortWishlist(sortBy) {
            this.$store.dispatch({ type: 'sortWishlist', sortBy });
        }
    },
    components: {
        wishlistSort
    }
}
</script>