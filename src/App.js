import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import About from './views/About/About';
import  Home  from "./views/Home/Home";
function App() {
  return (
    <>
    <Provider store={store}>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/about' element={<About/>}></Route>
      </Routes>
    </Router>
    </Provider>
    </>
  );
}

export default App;
