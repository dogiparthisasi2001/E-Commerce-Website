// import logo from './logo.svg';
import './App.css';
import './responsive.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/index'
import About from './pages/About/index'
import Contact from './pages/Contact/index'
import Cakes from './pages/Home/catList/cakes'
import Coffee from './pages/Home/catList/coffee'
import Meat from './pages/Home/catList/meat'
import Vegetables from './pages/Home/catList/vegetables';
import Listing from './pages/Listing'
import Header from './components/header/header'
import NotFound from './pages/notFound/index'
import DetailsPage from './pages/Details/index'
import Login from './pages/Login/index'
import Register from './pages/Register/index'
import Account from './pages/Account/index'
import Cart from './pages/Cart/index'
import Wishlist from './pages/Wishlist/index'
import ForgotPassword from './pages/ForgotPassword/index'
import SetNewPassword from './pages/SetNewPassword/index'
import PurchaseGuide from './pages/PurchaseGuide/index'
import PrivacyPolicy from './pages/PrivacyPolicy/index'
import TermsOfService from './pages/TermsOfService/index'
import Vendors from './pages/Vendors/index'
import Blogs from './pages/Blogs/index'


function App() {


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact={true} path='/' element={<Home />} />
        <Route exact={true} path='/about' element={<About />} />
        <Route exact={true} path='/vendors' element={<Vendors />} />
        <Route exact={true} path='/listing' element={<Listing />} />
        <Route exact={true} path='/account' element={<Account />} />
        <Route exact={true} path='/register' element={<Register />} />
        <Route exact={true} path='/cart' element={<Cart />} />
        <Route exact={true} path='/wishlist' element={<Wishlist />} />
        <Route exact={true} path='/contact' element={<Contact />} />
        <Route exact={true} path='/blog' element={<Blogs />} />
        <Route exact={true} path='/login' element={<Login />} />
        <Route exact={true} path='/forgot_password' element={<ForgotPassword />} />
        <Route exact={true} path='/purchase_guide' element={<PurchaseGuide />} />
        <Route exact={true} path='/privacy_policy' element={<PrivacyPolicy />} />
        <Route exact={true} path='/terms_of_service' element={<TermsOfService />} />
        <Route exact={true} path='/set_new_password' element={<SetNewPassword />} />
        <Route exact={true} path='*' element={<NotFound />} />
        <Route exact={true} path='/product/details' element={<DetailsPage />} />
        <Route exact={true} path='/cakes' element={<Cakes />} />
        <Route exact={true} path='/coffee' element={<Coffee />} />
        <Route exact={true} path='/meat' element={<Meat />} />
        <Route exact={true} path='/vegetables' element={<Vegetables />} />
      </Routes>
      

    </BrowserRouter>
  );
}

export default App;
