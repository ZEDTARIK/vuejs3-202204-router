<template lang="">
    <ListPosts :posts="Posts" />
</template>
<script>
    import ListPosts from '../components/Post/ListPosts.vue'
    export default {
        components: {
            ListPosts,
        },
        data() {
            return {
                Posts: [],
            }
        },
        created() {
            fetch('http://localhost:5000/posts')
                .then(res => res.json())
                .then(data => this.Posts = data)
                .catch(err => console.error(err.message))
        },
    }
</script>
<style>

</style>