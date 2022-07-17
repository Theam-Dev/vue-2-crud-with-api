import http from '../http';
class ApiService {
	
	get() {
		return http.get("post");
	}
  
	edit(id) {
		return http.get("post/edit/"+id);
	}
  
	create(data) {
		return http.post("post/store", data);
	}
  
	update(id, data) {
		return http.post("post/update/"+id, data);
	}
  
	delete(id) {
		return http.get("post/delete/"+id);
	}
}
  
export default new ApiService();