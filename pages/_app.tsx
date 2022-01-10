import "bootstrap/dist/css/bootstrap.css";
import type { AppProps } from "next/app";
import "../styles/main.scss";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/bundle";
import fetcher from "../swrFunctions/fetcher";
import { SWRConfig } from "swr";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{ fetcher }}>
      <Component {...pageProps} />
    </SWRConfig>
  );
}

export default MyApp;
