import { createStore } from "vuex";
// 批量导入 vuex文件
const files = import.meta.globEager('./module/*.js')
const modules = {}
for (const key in files) {
  modules[key.replace(/(\.\/module\/|\.js)/g, '')] = files[key].default
}
Object.keys(modules).forEach(item => {
  modules[item]['namespaced'] = true
})
console.log(modules);
export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {},
  modules
});
