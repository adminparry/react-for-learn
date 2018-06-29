// module.exports = function getEntry () {
//   let globPath = 'src/**/html/*.html'
//   // (\/|\\\\) 这种写法是为了兼容 windows和 mac系统目录路径的不同写法
//   let pathDir = 'src(\/|\\\\)(.*?)(\/|\\\\)html'
//   let files = glob.sync(globPath)
//   let dirname, entries = []
//   for (let i = 0; i < files.length; i++) {
//     dirname = path.dirname(files[i])
//     entries.push(dirname.replace(new RegExp('^' + pathDir), '$2'))
//   }
//   return entries
// }
module.exports = {
  index:{
    jsonp:['ImportFuncDemo'],
    path:'index.js'
  },
  first:{
    jsonp:[],
    path:'entry/firstIndex.js'
  },

}


