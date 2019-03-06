
var math = require('./math')
//只有require加载进来的才会被执行打包
require('./index.css')
// require('./index.html')

math(1,2)
math(1,3)
math(1,8)
math(1,8)
