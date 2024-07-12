import Nav from './components/Nav';
import Header from './components/Header';
import Principal from './components/Principal';
import Footer from './components/Footer';
import './style.global.css';
import {Routes, Route} from 'react-router-dom'
import SignIn from './components/SignIn';
function App() {
  return (
    <>
      <Nav/>
      <Header/>
      <Principal />
      <Footer />
      <Routes>
        <Route path="" element={<SignIn/>} />
      </Routes>
    </>
  )
}

export default App
