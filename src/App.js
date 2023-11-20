import { useState } from 'react';
import AdminPage from './pages/AdminView';
import HeaderManageProduct from './components/manageProduct/headerManageProduct';
import BodyManageProduct from './components/manageProduct/bodyManageProduct';
import "./App.css"
import { Route, Routes } from 'react-router-dom';


function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [inputSearch, setInputSearch] = useState("");

  const handlePageChange = (newPage, event) => {
    if (event) {
      event.preventDefault();
    }
    setCurrentPage(newPage);
  }

  const handleSearch = (productName, event) => {
    if (event) {
      event.preventDefault();
    }
    setInputSearch(productName);
  };
  return (
    <div>
      <Routes>
        <Route path='/' element={<AdminPage />} />
        <Route path='/manage-product' element={<AdminPage viewHeader={<HeaderManageProduct/>} viewBody={<BodyManageProduct/>} />} />
        <Route path='/product-list' element={<AdminPage viewHeader={<HeaderProductList inputSearch={handleSearch} />} viewBody={<BodyProductList currentPage={currentPage} onPageChange={handlePageChange} inputSearch={inputSearch}/>} viewFooter={<FooterProductList currentPage={currentPage} onPageChange={handlePageChange}/>}/>} />
      </Routes>
    </div>
  );
}

export default App;
