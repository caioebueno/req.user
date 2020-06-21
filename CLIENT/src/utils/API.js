import axios from "axios";


export default {
  get: function(url) {
    return axios.get(url, { credentials : 'same-origin' });
  },
  post: function(url, body){
      return axios.post(url, body);
  }
};
