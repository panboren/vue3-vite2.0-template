import { createRouter, createWebHistory} from "vue-router";
const routes = [
  {
    path: "/",
    name: "root",
    redirect: "/page1",
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes
});
/* 批量引入 */
const modules = import.meta.glob('../views/**/**.vue')
Object.keys(modules).forEach(key => {
  const nameMatch = key.match(/^\.\.\/views\/(.+)\.vue/)
  if(!nameMatch) return
  const indexMatch = nameMatch[1].match(/(.*)\/index$/i)
  let name = indexMatch ? indexMatch[1] : nameMatch[1];
  debugger
  [name] = name.split('/').splice(-1)
  router.addRoute(name,{
    path: `/${name}`,
    name: name,
    component: modules[key]
  })
})
export default router;
