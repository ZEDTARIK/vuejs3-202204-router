<template lang="">
    <div class="row my-2">
        <div class="col-md-6 mx-auto">

            <table class="table table-sm table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="post in posts" :key="post.id" >
                        <td scope="row">{{ post.id }}</td>
                        <td> {{ post.title }} </td>
                        <td>
                            <router-link :to="{ name: 'ShowPost', params: {id: post.id } }" class="btn btn-sm btn-dark">Show</router-link>
                            <button style="margin-left: 3px" class="btn btn-sm btn-warning">Edit</button>
                            <button style="margin-left: 3px" class="btn btn-sm btn-danger">Delete</button>
                        </td>
                    </tr>

                </tbody>
            </table>

        </div>
    </div>
</template>
<script>
export default {
    props: ['posts']
}
</script>
<style>
    
</style>