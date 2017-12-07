// import {createStore, applyMiddleware} from 'redux'
// import axios from 'axios'
// import axiosMiddleware from 'redux-axios-middleware'
// const initialState = 0;
//
// export default (state = initialState, action) => {
//   switch (action.type) {
//     case 'APPEND_IP':
//       const response = await fetch('http://httpbin.org/ip')
//       const json = await response.json()
//       return state + (action.payload || url());
//     default:
//       return state;
//   }
// };
//
// import { applyMiddleware, createStore } from 'redux'
// import { wrapStore, alias } from 'react-chrome-redux'
// import { createLogger } from 'redux-logger'
// // import thunk from 'redux-thunk'
//
// const client = axios.create({
//   baseURL: 'http://httpbin.org/ip',
//   responseType: 'json'
// })
//
// let store = createStore(
//   reducers,
//   applyMiddleware(
//     axiosMiddleware(client)
//   )
// )
//
// url(){
//   const response = await fetch('http://httpbin.org/ip')
//   const json = await response.json()
//   const origin = json.origin
// }
