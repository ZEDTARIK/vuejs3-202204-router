<template lang="">

    <div class="row my-3">
        <div class="col-md-6 mx-auto">
            <router-link :to="{name: 'PostView'}" class="btn btn-sm btn-dark">Back to Posts</router-link>
        </div>
    </div>


        <div class="row my-2">
        <div class="col-md-6 mx-auto">
            <div class="card border-primary mb-3">
            <div class="card-header">{{ post.title  }}</div>
            <div class="card-body">
                <p class="card-text">{{ post.content }}</p>
            </div>
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
  props: ["id"],
  data() {
    return {
      post: {},
    };
  },
  created() {
    fetch(`http://localhost:5000/posts/${this.id}`)
      .then((res) => res.json())
      .then((data) => (this.post = data))
      .catch((err) => console.error(err.message));
  },
};
</script>
<style>
</style>