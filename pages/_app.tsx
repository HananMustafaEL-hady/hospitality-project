import "bootstrap/dist/css/bootstrap.css";
import type { AppProps } from "next/app";
import "../styles/main.scss";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/bundle";
import fetcher from "../utils/swr-fetcher";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";
import { SWRConfig } from "swr";
import { store } from "../store/store";
export const persistor = persistStore(store);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SWRConfig value={{ fetcher }}>
          <Component {...pageProps} />
        </SWRConfig>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
