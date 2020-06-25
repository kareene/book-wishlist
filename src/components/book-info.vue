<template>
    <article class="book-info flex direction-column">
        <header class="flex align-center space-between">
            <h2>{{currBook.title}}</h2>
            <input type="checkbox" :checked="inWishlist" @change="$emit('toggle-wishlist')">
        </header>
        <h3>{{currBook.author}}</h3>
        <p>{{currBook.description}}</p>
        <p>Rating:
            <star-rating :rating="rating" />
        </p>
        <p>Price: {{price}}</p>
    </article>
</template>

<script>
import starRating from '@/components/star-rating.vue';

export default {
    name: 'bookInfo',
    props: {
        currBook: Object,
        inWishlist: Boolean
    },
    computed: {
        rating() {
            return Math.round(this.currBook.rating);
        },
        price() {
            const price = +this.currBook.price;
            return price.toLocaleString('en-US', { style:'currency', currency:'USD' });
        }
    },
    components: {
        starRating
    }
};
</script>