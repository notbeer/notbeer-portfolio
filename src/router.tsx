import "react-toastify/dist/ReactToastify.css";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Navbar from "./components/navbar/navbar";
import Theme from "./components/theme/theme";
import Home from './pages/home/hero/hero';
import About from "./pages/home/about/about";
import Experience from "./pages/home/experience/experience";
import Service from "./pages/home/service/service";
import Portfolio from "./pages/home/portfolio/portfolio";
import Footer from "./pages/home/footer/footer";

import ReactWordleClone from "./assets/demo/react-wordle-clone/src";

import Error from "./pages/error/error";

export default function Router() {
    return (
        <BrowserRouter>
            <ToastContainer
                position="top-right"
                autoClose={ 5000 }
                hideProgressBar={ false }
                newestOnTop={ false }
                closeOnClick
                rtl={ false }
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Theme/>
            <main id="App">
                <Routes>
                    <Route path='/' element={
                        <>
                            <Navbar/>
                            <Home/>
                            <About/>
                            <Experience/>
                            <Service/>
                            <Portfolio/>
                            <Footer/>
                        </>
                    }/>
                    <Route path='/react-wordle-clone' element={
                        <ReactWordleClone/>
                    }/>
                    <Route path='*' element={
                        <Error/>
                    }/>
                </Routes>
            </main>
        </BrowserRouter>
    );
};