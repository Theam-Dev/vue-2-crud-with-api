<template>
  <div v-if="formData">
    <div class="row justify-content-center mt-2">
      <div class="col-md-10">
        <div class="card">
          <div class="card-header">Edit Post</div>
          <div class="card-body">
            <form @submit.prevent="submitData">
              <div class="form-group">
                <label for="title">Title</label>
                <input type="text" class="form-control" v-model="formData.title" name="title" id="title" placeholder="title" />
                <span v-if="itemError.title" class="text text-danger">{{ itemError.title[0] }}</span>
              </div>
              <div class="form-group">
                <label for="body">Body</label>
                <input type="text" class="form-control" v-model="formData.body" name="body" id="body" placeholder="body" />
                <span v-if="itemError.body" class="text text-danger">{{ itemError.body[0] }}</span>
              </div>
              <button type="submit" class="btn btn-primary mt-2">Sumit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ApiService from "../api/apiservice";
export default {
  name: "Post-Edit",
  data() {
    return {
      Id: null,
      formData: null,
      itemError: [],
    };
  },
  methods: {
    submitData() {
      var app = this;
      var newItem = app.formData;
      ApiService.update(app.Id, newItem)
        .then((response) => {
          console.log(response);
          app.$router.replace("/");
        })
        .catch((error) => {
          app.itemError = error.response.data.errors;
        });
    },
  },
  mounted() {
    var app = this;
    let id = app.$route.params.id;
    app.Id = id;
    console.log("Id === " + id);
    ApiService.edit(id)
      .then((response) => {
        app.formData = response.data.data;
        console.log(response.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  },
};
</script>
