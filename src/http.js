import axios from "axios";
  
  export default axios.create({
	baseURL: "http://localhost:8888/ApiCrud/api/",
	headers: {
		"Content-type": "application/json"
	}
});