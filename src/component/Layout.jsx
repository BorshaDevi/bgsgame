import Banner from "./Banner";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout=({children})=>{
    return(
        <div>
        <Navbar></Navbar>
        <Banner></Banner>
         {children}
         <Footer></Footer>
        </div>
    )
}
export default Layout;