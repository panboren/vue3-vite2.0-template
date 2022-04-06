import { createRouter, createWebHistory} from "vue-router";
const routes = [
  {
    path: "/",
    name: "root",
    redirect: "/home",
  },
/*  {
    path: '/home',
    name: 'home',
    component: () =>
        import(/!* webpackChunkName: "home" *!/ '../views/home/index')
  }*/
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});
/* 批量引入 */
const modules = import.meta.glob('../views/**/**.vue')
Object.keys(modules).forEach(key => {
  const nameMatch = key.match(/^\.\.\/views\/(.+)\.vue/)
  if(!nameMatch) return
  const indexMatch = nameMatch[1].match(/(.*)\/index$/i)
  let name = indexMatch ? indexMatch[1] : nameMatch[1];
  [name] = name.split('/').splice(-1)
  router.addRoute(name,{
    path: `/${name}`,
    name: name,
    component: modules[key]
  })
})
export default router;
