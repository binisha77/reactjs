
import './App.css'
import{BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<h1>hello</h1>}/>
<Route path='/about' element={<h1>hehe</h1>}/>
<Route path='/contact' element={<h1>hi</h1>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
