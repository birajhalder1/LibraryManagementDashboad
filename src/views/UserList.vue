<template>
    <b-container>
      <div>
          <v-simple-table dark>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">ID</th>
                  <th class="text-left">Name</th>
                  <th class="text-left">Username</th>
                  <th class="text-left">Email</th>
                  <th class="text-left">Phone Number</th>
                  <th class="text-left">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in items" :key="item.id">
                  <td>{{ item._id }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.username }}</td>
                  <td>{{ item.email }}</td>
                  <td>{{ item.phone }}</td>
                  <td>{{ item.date }}</td>
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
    axios.get("http://localhost:5000/api/v1/user")
    .then(response =>
    console.log(response))
    //{this.items = response.data.data})

  }
  }
</script>