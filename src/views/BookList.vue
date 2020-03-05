<template>
    <b-container>
      <div>
          <v-simple-table dark>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">ID</th>
                  <th class="text-left">Book Name</th>
                  <th class="text-left">Author</th>
                  <th class="text-left">Description</th>
                  <th class="text-left">Availability Status</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in items" :key="item.id">
                  <td>{{ item._id }}</td>
                  <td>{{ item.bookName }}</td>
                  <td>{{ item.authorName }}</td>
                  <td>{{ item.description }}</td>
                  <td>{{ item.currentAvailibility }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
      </div>
    </b-container>
</template>

<script>
import axios from "axios";
  export default {
    data () {
      return {
        items: []
      }
    },
    mounted() {
    axios.get("http://localhost:5000/api/v1/books")
    .then(response =>
    //console.log(response.data.data))
    {this.items = response.data.data})

  }
  }
</script>