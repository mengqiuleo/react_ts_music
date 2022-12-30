/*
 * @Author: Pan Jingyi
 * @Date: 2022-12-28 12:07:52
 * @LastEditTime: 2022-12-28 12:24:13
 */
// 1.手动切换
export const BASE_URL = 'http://139.159.209.28:10000'
// export const BASE_URL = 'http://codercba.com:9002'
export const TIME_OUT = 10000

// 2.依赖当前环境: development/production
// console.log(process.env.NODE_ENV)
// let BASE_URL = ''
// if (process.env.NODE_ENV === 'development') {
//   BASE_URL = 'http://codercba.dev:9002'
// } else {
//   BASE_URL = 'http://codercba.prod:9002'
// }

// export { BASE_URL }

// 3.从定义的环境变量的配置文件中, 加载变量
// 就是根目录下的文件： .env.development   .env.production
// 可以直接打印 process.env， 就会把所有东西全部打印出来
// 这种情况下没有输入提示：修改react-app-env.d.ts 文件
// console.log(process.env.REACT_APP_BASE_URL)
