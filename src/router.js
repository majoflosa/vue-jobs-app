import Vue from 'vue';
import VueRouter from 'vue-router';

import JobsView from './views/JobsView.vue';
import AddJob from './views/AddJob.vue';
import EditJob from './views/EditJob.vue';
import AssetsList from './views/AssetsList.vue';
import AddAsset from './views/AddAsset.vue';
import EditAsset from './views/EditAsset.vue';

const routes = [
  { path: '/', name: 'home', component: JobsView },
  { path: '/assets', name: 'assets', component: AssetsList },
  { path: '/add-job', name: 'add-job', component: AddJob },
  { path: '/edit-job/:id', name: 'edit-job', component: EditJob },
  { path: '/add-asset', name: 'add-asset', component: AddAsset },
  { path: '/edit-asset', name: 'edit-asset', component: EditAsset },
];
  
Vue.use(VueRouter);
export default new VueRouter({ routes });
