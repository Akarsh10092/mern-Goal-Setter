import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Header from './components/Header'
function App() {
  return (
    <>
      <Router>
      <div className='container'>
        <Header/>
        <Routes>
      <Route path = '/' element = {<Dashboard/>}/>
      <Route path = '/login' element = {<Login/>}/>
      <Route path = '/register' element = {<Register/>}/>
      </Routes>
      </div>
      </Router>
    </>
      )
}
export default App;
