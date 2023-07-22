// 引入相关的hooks
/**
 * useSelector： 用于从Redux store 中获取状态，
 * useDispatch hook 用于派发 action
 */
import { useSelector, useDispatch } from 'react-redux';
// 引入对应的方法
import { increment, decrement } from './store/features/counterSlice';
import { changeName, addAge, addNum } from './store/features/meSlice';

import logo from './logo.svg';
import './App.css';

function App() {
  // 通过useSelector直接拿到store中定义的value
  const initialState = useSelector(store=> store)
  // 获取初始值
  console.log(initialState)
  // 通过useDispatch 派发事件
  const dispatch = useDispatch()
  return (
    <div className='App'>
      <h2>获取到仓库中的数据名字: {initialState.me.name}</h2>
      <h2>获取到仓库中的数据年龄: {initialState.me.age}</h2>
      <h2>获取到仓库中的数据num: {initialState.me.num}</h2>

      <button onClick={() => { dispatch(changeName('张三')) }}>修改名字</button>
      <button onClick={() => { dispatch(addAge(8)) }}>增加年龄</button>
      <button onClick={() => { dispatch(addNum(6)) }}>增加num</button>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     {/* 页面中应用的代码 */}
    //     <p>{value}</p>
    //     <button onClick={() => { dispatch(increment()) }}>加</button>
    //     <button onClick={() => { dispatch(decrement()) }}>减</button>
    //   </header>
    // </div>
  )
}

export default App;