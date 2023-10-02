import logo from './logo.svg';
import './App.css';
import './view/Example/MyComponet'
// import MyComponet from './view/Example/MyComponet';
import ListTodo from './view/Todos/ListTodo';
 import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './view/Nav/Nav';
import Home from './view/Example/Home';
import { BrowserRouter, Route,Switch } from "react-router-dom";
import MyComponent from './view/Example/MyComponet';
import ListUser from './view/User/ListUser';
import DetailUser from './view/Details/DetailUser';
function App() {
  
  return (
    <BrowserRouter>
    <div className="App">
      
      <header className="App-header">
      <Nav></Nav>
        <img src={logo} className="App-logo" alt="logo" />
        

        <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/todo">
          <ListTodo />
        </Route>
        <Route path="/about">
          <MyComponent />
        </Route>
        <Route path="/user" exact>
          <ListUser />
        </Route>
        <Route path="/user/:id">
          <DetailUser />
        </Route>
      </Switch>
      </header>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </div>    
    
    </BrowserRouter>

  );
}

export default App;
