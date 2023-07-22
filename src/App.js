// 引入相关的hooks
import { useSelector, useDispatch } from 'react-redux';
// 引入对应的方法
import { increment, decrement } from './store/features/counterSlice';

import logo from './logo.svg';
import './App.css';

function App() {
  // 通过useSelector直接拿到store中定义的value
  const { value } = useSelector((store) => store.counter)
  // 通过useDispatch 派发事件
  const dispatch = useDispatch()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* 页面中应用的代码 */}
        <p>{value}</p>
        <button onClick={() => { dispatch(increment()) }}>加</button>
        <button onClick={() => { dispatch(decrement()) }}>减</button>
      </header>
    </div>
  )
}

export default App;