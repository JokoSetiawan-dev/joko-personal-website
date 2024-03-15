import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from "./pages/LandingPage"
import LinksPage from './pages/LinksPage'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/links' element={<LinksPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
