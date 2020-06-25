<template>
    <span class="star-rating">
        <i class="fas fa-star" v-for="i in rating"></i>
        <i class="far fa-star" v-for="i in 5 - rating"></i>
    </span>
</template>

<script>
export default {
    name: "starRating",
    props: {
        rating: {
            type: Number,
            validator: value => Number.isInteger(value) && value >= 0 && value <= 5
        }
    }
};
</script>