<template>
    <section class="book-display flex align-start space-between">
        <template v-if="currBook">
            <button class="clear-button"
                :style="{ visibility: prevBookIdx !== -1 ? 'visible' : 'hidden' }"
                @click="getPrevBook"
            >
                <i class="fas fa-chevron-left"></i>
            </button>
            <book-info 
                :currBook="currBook"
                :inWishlist ="inWishlist"
                @toggle-wishlist="toggleWishlist"
            />
            <button class="clear-button"
                :style="{ visibility: nextBookIdx !== -1 ? 'visible' : 'hidden' }"
                @click="getNextBook"
            >
                <i class="fas fa-chevron-right"></i>
            </button>
        </template>
        <h3 v-else>No Books Avialable</h3>
    </section>
</template>

<script>
import bookInfo from '@/components/book-info.vue';

export default {
    name: 'bookDisplay',
    data() {
        return {
            currBookIdx: -1
        }
    },
    async created() {
        await this.$store.dispatch({ type: 'loadBooks'});
        if (this.books.length) this.currBookIdx = 0;
    },
    computed: {
        books() {
            return this.$store.getters.books;
        },
        currBook() {
            return (this.currBookIdx < 0) ? null : this.books[this.currBookIdx];
        },
        prevBookIdx() {
            var prevBookIdx = this.currBookIdx - 1;
            return (prevBookIdx < 0) ? -1 : prevBookIdx;
        },
        nextBookIdx() {
            var nextBookIdx = this.currBookIdx + 1;
            return (nextBookIdx > this.books.length - 1) ? -1 : nextBookIdx;
        },
        wishlist() {
            return this.$store.getters.wishlist;
        },
        inWishlist() {
            const idx = this.wishlist.findIndex(book => book.title === this.currBook.title);
            return idx !== -1;
        }
    },
    methods: {
        getPrevBook() {
            if (this.prevBookIdx !== -1) this.currBookIdx = this.prevBookIdx;
        },
        getNextBook() {
            if (this.nextBookIdx !== -1) this.currBookIdx = this.nextBookIdx;
        },
        toggleWishlist() {
            if (!this.inWishlist) {
                this.$store.dispatch({ type: 'addToWishlist', book: this.currBook });
            } else {
                this.$store.dispatch({ type: 'removeFromWishlist', bookTitle: this.currBook.title });
            }
        }
    },
    components: {
        bookInfo
    }
}
</script>