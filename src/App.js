import { useState } from 'react';
import AdminPage from './pages/AdminView';
import HeaderManageProduct from './components/manageProduct/headerManageProduct';
import BodyManageProduct from './components/manageProduct/bodyManageProduct';
import HeaderProductList from './components/productList/headerProductList';
import BodyProductList from './components/productList/bodyProductList';
import FooterProductList from './components/productList/footerProductList';
import HeaderManageCategory from './components/manageCategory/headerManageCategory';
import BodyManageCategory from './components/manageCategory/bodyManageCategory';
import HeaderStatistic from './components/statistic/headerStatistic';
import BodyStatistic from './components/statistic/bodyStatistic';
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
        <Route path='/' element={<AdminPage viewHeader={<HeaderProductList inputSearch={handleSearch} />} viewBody={<BodyProductList currentPage={currentPage} onPageChange={handlePageChange} inputSearch={inputSearch} />} viewFooter={<FooterProductList currentPage={currentPage} onPageChange={handlePageChange} />} />} />
        <Route path='/manage-product' element={<AdminPage viewHeader={<HeaderManageProduct />} viewBody={<BodyManageProduct />} />} />
        <Route path='/manage-category' element={<AdminPage viewHeader={<HeaderManageCategory />} viewBody={<BodyManageCategory />} />} />
        <Route path='/product-list' element={<AdminPage viewHeader={<HeaderProductList inputSearch={handleSearch} />} viewBody={<BodyProductList currentPage={currentPage} onPageChange={handlePageChange} inputSearch={inputSearch} />} viewFooter={<FooterProductList currentPage={currentPage} onPageChange={handlePageChange} />} />} />
        <Route path='/report-statistic' element={<AdminPage viewHeader={<HeaderStatistic />} viewBody={<BodyStatistic />} />} />

      </Routes>
    </div>
  );
}

export default App;
