import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './Components/Products';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;