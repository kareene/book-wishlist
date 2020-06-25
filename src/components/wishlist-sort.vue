<template>
    <section class="wishlist-sort flex">
        <template v-for="value in options">
            <input type="radio" :key="value + '-input'"
                name="wishlistSort"
                :id="value"
                :value="value" 
                :checked="value === sortBy" 
                @change="$emit('set-sort', value)"
            > 
            <label :for="value" :key="value + '-label'">
                {{value}}
            </label>
        </template>
    </section>
</template>

<script>
export default {
    name: 'wishlistSort',
    props: {
        sortBy: String
    },
    data() {
        return {
            options: ['title', 'price', 'rating']
        }
    }
}
</script>