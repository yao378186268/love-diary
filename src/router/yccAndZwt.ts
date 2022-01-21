const Ycc1 = () => import('../views/yccAndZwt/ycc/ycc1/index.vue');
const Ycc2 = () => import('../views/yccAndZwt/ycc/ycc2/index.vue');
const Zwt1 = () => import('../views/yccAndZwt/zwt/zwt1/index.vue');
const Zwt2 = () => import('../views/yccAndZwt/zwt/zwt2/index.vue');

export const yccAndZwt = [
  {
    path: 'ycc1',
    name: 'ycc1',
    component: Ycc1
  },
  { path: 'ycc2', name: 'ycc2', component: Ycc2 },
  { path: 'zwt1', name: 'zwt1', component: Zwt1 },
  { path: 'zwt2', name: 'zwt2', component: Zwt2 }
];
