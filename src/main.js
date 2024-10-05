import { createApp } from 'vue'; // 使用 Vue 3 的 import 方式
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router'; // 从 'vue-router' 导入 createRouter 和 createWebHistory
import UserRegister from './components/UserRegister.vue';
import UserLogin from './components/UserLogin.vue';
import CreateProject from './components/CreateProject.vue';
import ViewProjects from './components/ViewProjects.vue';
import Home from './components/HomePage.vue';
import ViewUsers from './components/ViewUsers.vue';
import ViewUserProfile from './components/ViewUserProfile.vue';
import EditUserProfile from './components/EditUserProfile.vue';

// 定义路由
const routes = [
  { path: '/', component: Home },
  { path: '/register', component: UserRegister },
  { path: '/login', component: UserLogin },
  { path: '/create-project', component: CreateProject },
  { path: '/projects', component: ViewProjects },
  { path: '/users', component: ViewUsers } ,
  { path: '/profile', component: ViewUserProfile },       // 查看用户信息
  { path: '/edit-profile', component: EditUserProfile }    // 编辑用户信息
];

// 创建路由实例
const router = createRouter({
  history: createWebHistory(), // 使用 HTML5 history 模式
  routes
});

// 创建 Vue 应用
const app = createApp(App);

// 使用路由
app.use(router);

// 挂载应用
app.mount('#app');
