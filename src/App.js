import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'

//Components
import NavbarComponent from './components/Navbar'
import Store from "./pages/Store"
import Appliances from "./pages/Appliances"
import Computers from "./pages/Computers"
import Phones from "./pages/Phones"
import TVs from "./pages/TVs"

function App() {
  let [search, setSearch] = useState('')
  let [message, setMessage] = useState('Message here')
  let [data, setData] = useState([])

  useEffect(() => {
    if(search) {
      const fetchData = async() => {
        document.title = `${search}`
        const response = await fetch(search)
        const resData = await response.json()
        if(resData.results.length > 0) {
          return setData(resData.results)
        } else {
          return setMessage('Not Found')
        }
      }
      fetchData()
    }
  })

  const startSearch = (e, searchTerm) => {
    e.preventDefault()
    setSearch(searchTerm)
  }

  return (
    <Container>
      <NavbarComponent></NavbarComponent>
      <div className ="routerContainer">
        <Routes>
          <Route path="/" element={<Store/>} />
          <Route path="/appliances" element={<Appliances/>} />
          <Route path="/computers" element={<Computers/>} />
          <Route path="/phones" element={<Phones/>} />
          <Route path="/tvs" element={<TVs/>} />
          <Route path="/about" element={<Store/>} />
        </Routes>
      </div>
    </Container>
  );
}

export default App;
