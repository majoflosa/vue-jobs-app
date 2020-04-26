import Vue from 'vue';
import VueRouter from 'vue-router';

import JobsList from './views/JobsList.vue';
import AddJob from './views/AddJob.vue';
import EditJob from './views/EditJob.vue';
import AssetsList from './views/AssetsList.vue';
import AddAsset from './views/AddAsset.vue';
import EditAsset from './views/EditAsset.vue';

const routes = [
    { path: '/', component: JobsList },
    { path: '/assets', component: AssetsList },
    { path: '/add-job', component: AddJob },
    { path: '/edit-job', component: EditJob },
    { path: '/add-asset', component: AddAsset },
    { path: '/edit-asset', component: EditAsset },
  ];
  
Vue.use(VueRouter);
export default new VueRouter({ routes });
