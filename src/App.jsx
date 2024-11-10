import { Route, Routes } from 'react-router-dom'
import { Inicio } from './Components/Inicio'
import { Loading } from './widgets/Loading/Loading'
import { Login } from './Components/Login'
import { Dashboard } from './Components/Dashboard'

import { useContext } from 'react'
import { UserContext } from './context/UserContext'

function App() {

const {isLoading}= useContext(UserContext)
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
         
            <Routes>
              <Route path='/*' element={<Inicio />} />
              <Route path='/login' element={<Login />} />
              <Route path='/dashboard/*' element={<Dashboard />} />

            </Routes>
        </>
      )}



    </>
  )
}

export default App
