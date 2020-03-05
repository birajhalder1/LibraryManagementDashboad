<template>
  <div>
    <b-container>
      <b-card>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group
            id="input-group-1"
            label="Book Name:"
            label-for="input-1"
          >
          <b-form-input
            id="input-1"
            v-model="form.bookName"
            required
            placeholder="Enter book name"
          ></b-form-input>
        </b-form-group>

        <b-form-group
            id="input-group-2"
            label="Your auther name:"
            label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.authorName"
            required
            placeholder="Enter author name"
          ></b-form-input>
        </b-form-group>

       <!-- <b-form-group
            id="input-group-3"
            label="Description:"
            label-for="input-3">
          <b-form-textarea
            id="textarea"
            v-model="form.text"
            placeholder="Enter something..."
            rows="3"
            max-rows="6"
          ></b-form-textarea>
          <pre class="mt-3 mb-0">{{ text }}</pre>
        </b-form-group> -->

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>



      </b-card>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";

  export default {
    data() {
      return {
        form: {
          bookName: '',
          authorName: '',
          //text: ''
        },
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.bookName = ''
        this.form.authorName = ''
        //this.form.text = ''
        axios
          .post("http://localhost:5000/api/v1/books")
          .then(responce => console.log(responce));
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>