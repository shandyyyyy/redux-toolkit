import './App.css'
import { Profile } from './components/profile'
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import Counter from './components/counter'
import Dogs from './components/dogs'

function App() {
  return (
    <HashRouter basename=''>
    <Routes>
      <Route 
        path="/" 
        element={
          <Navigate
            to="/user"
            replace
          />}>
      </Route>
      <Route path="counter" element={<Counter />}></Route>
      <Route path="user/:id" element={<Profile />}></Route>
      <Route path="dogs" element={<Dogs />}></Route>

    </Routes>
    </HashRouter>
  )
}

export default App
