<template>
  <div class="mt-2">
    <router-link :to="{ name: 'post_create' }" class="btn btn-primary">Post</router-link >
    <table class="table table-hover">
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Body</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in responseData.data" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.body }}</td>
          <td>
            <router-link :to="{ name: 'post_edit', params: { id: item.id } }" 
            class="btn btn-info btn-sm">Edit</router-link> |
            <button class="btn btn-danger btn-sm" @click="deleteItem(item.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import ApiService from "../api/apiservice";
export default {
  name: "Post-List",
  data() {
    return {
      responseData: [],
    };
  },
  methods: {
    retrieveTutorials() {
      ApiService.get()
        .then((response) => {
          this.responseData = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    deleteItem(id) {
      this.$swal({
        title: "Are you sure?",
        text: "You can't revert your action",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes Delete",
        cancelButtonText: "Cancel",
        showCloseButton: true,
        showLoaderOnConfirm: true,
      }).then((result) => {
        if (result.value) {
          ApiService.delete(id)
            .then((response) => {
              console.log(response);
              this.retrieveTutorials();
            })
            .catch((e) => {
              console.log(e);
            });
        }
      });
    },
  },
  mounted() {
    this.retrieveTutorials();
  },
};
</script>