import AdminPage from './pages/AdminView';
import HeaderManageProduct from './components/manageProduct/headerManageProduct';
import BodyManageProduct from './components/manageProduct/bodyManageProduct';
import "./App.css"
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<AdminPage />} />
        <Route path='/manage-product' element={<AdminPage viewHeader={<HeaderManageProduct/>} viewBody={<BodyManageProduct/>} />} />
      </Routes>
    </div>
  );
}

export default App;
