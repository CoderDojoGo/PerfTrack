import Vue from 'vue'

export default {

  getAllNinjas() {

    return Vue.http.get('http://localhost:5000/api/ninjas')
      .then((response) => {
            return response.data
        })
      .catch((error) => Promise.reject(error));


  }
}