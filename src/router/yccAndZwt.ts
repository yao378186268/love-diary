const ycc1 = () => import('@/views/yccAndZwt/ycc/ycc1/index.vue');
const Ycc2 = () => import('@/views/yccAndZwt/ycc/ycc2/index.vue');

export const yccAndZwt = [
  {
    path: 'ycc1',
    name: 'ycc1',
    component: ycc1
  },
  { path: 'ycc2', name: 'ycc2', component: Ycc2 }
];
