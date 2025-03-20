
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainScreen from './components/MainScreen'
import SideMenu from './components/SideMenu'
import Login from './components/Login'
import AddTask from './components/AddTask'
import './index.css'
import Dashboard from './components/Dashboard'
import TaskList from './components/TaskList'


function App() {

  return (

        <Router>
          <div className='flex h-full'>
            <SideMenu/>
              <Routes>
                <Route path="/" element={<MainScreen/>}/>
                <Route path="/login" element={<Login/>} />
                <Route path="/addtask" element={<AddTask/>} />
                <Route path="/task" element={<TaskList/>} />
                <Route path="/dashboard" element={<Dashboard/>} />
              </Routes>  
          </div>
        </Router>
            
      
  )
}

export default App
