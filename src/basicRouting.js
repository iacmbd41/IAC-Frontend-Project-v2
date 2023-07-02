import { Route, Routes } from "react-router-dom";
import Home from './page/home';
import About from './page/about';
import Contact from './page/contact';
import LogReg from "./page/loginreg";
import ProductDc from "./component/productDetails";
import AddtoCard from "./component/addTocard";
import AddtoCards from "./component/addTocards";
import Checkout from "./component/checkout";
import PaymentForm from "./component/PaymentForm";
import AddressForm from "./component/AddressForm";
import Review from "./component/Review";
import Signup from "./page/signup";
import CatelistTab from "./component/catelistTab";
import Slider from "./layout/slider";
import ForgotPass from "./page/forgatePass";
import Dashboard from "./page/dashboard";
const RouteComponent = () =>{
    return(
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Home' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/loginreg' element={<LogReg/>}/>
                <Route path='/productDetails/:id' element={<ProductDc/>}/>
                <Route path='/addTocard/:id' element={<AddtoCard/>}/>
                <Route path='/addTocards' element={<AddtoCards/>}/>
                <Route path='/Checkout' element={<Checkout/>}/>
                <Route path='/PaymentForm' element={<PaymentForm/>}/>
                <Route path='/AddressForm' element={<AddressForm/>}/>
                <Route path='/Review' element={<Review/>}/>
                <Route path='/signup' element={<Signup/>}/>
                <Route path='/CatelistTab' element={<CatelistTab/>}/>
                <Route path='/Slider' element={<Slider/>}/>
                <Route path='/ForgotPass' element={<ForgotPass/>}/>
                <Route path='/Dashboard' element={<Dashboard/>}/>
            </Routes>
        </div>
    )
}
export default RouteComponent