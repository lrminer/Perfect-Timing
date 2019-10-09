import axios from "axios";

export default {


    

  deleteTodo: function(id) {
    return axios.delete("/api/todos/" + id);
  }
};
