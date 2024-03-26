import "@/styles/globals.css";
import Header from "./Header";
import Footer from "./Footer";
export default function App({ Component, pageProps }) {
  return(
    <>
<Header/>
     <Component {...pageProps}/>
     <Footer/></>
     );
}
