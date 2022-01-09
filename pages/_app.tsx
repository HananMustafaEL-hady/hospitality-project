import 'bootstrap/dist/css/bootstrap.css';
import type { AppProps } from 'next/app'
import "../styles/main.scss"
import '../node_modules/font-awesome/css/font-awesome.min.css';
import 'font-awesome/css/font-awesome.min.css';
import "bootstrap/dist/css/bootstrap.css"
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/bundle";


function MyApp({ Component, pageProps }: AppProps) {

  return <Component {...pageProps} />
}

export default MyApp
