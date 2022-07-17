import Vue from "vue";
import Router from "vue-router";
  
Vue.use(Router);
import IndexPost from "./components/Index.vue";
import EditPost from './components/Edit.vue';
import CreatePost from './components/Create.vue';
export default new Router({
	mode: "history",
	routes: [
		{ path: '/',name:'index', component: IndexPost},
		{ path: '/post/create', name:'post_create', component: CreatePost},
		{ path: '/post/edit/:id', name:'post_edit', component: EditPost}
	]
});