import './App.css';
import 'react-toastify/dist/React-Toastify.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ToastContainer } from 'react-toastify';

import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart';
import Checkout from './Checkout/Checkout';

import { DarkModeProvider } from '../Context/DarkModeContext';

const App = () => {

  return (
    <>
      <BrowserRouter>

        <DarkModeProvider>

          <Navbar />
          <Routes>

            <Route path='/' element={<ItemListContainer />} />
            <Route path='/producto/:id' element={<ItemDetailContainer />} />
            <Route path='/category/:category' element={<ItemListContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout/>}/>

          </Routes>

          <ToastContainer/>

        </DarkModeProvider>

      </BrowserRouter>
    </>

  );
}

export default App;