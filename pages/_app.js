import "../styles/main.scss";

import "../public/assets/fonts/Visby/style.css";
import "../public/assets/font-awesome-old/css/font-awesome.min.css";
import "../public/assets/material-design-iconic-font/css/materialdesignicons.min.css";
import "react-bootstrap-country-select/dist/react-bootstrap-country-select.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { wrapper, store, persistor } from "../store/store";
import NavbarPrimary from "../components/NavbarPrimary";
import FooterPrimary from "../components/FooterPrimary";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <main className="d-flex flex-column min-vh-100 container-xxxl">
          <NavbarPrimary />
          <div className="flex-fill pt-3">
            <Component {...pageProps} />
          </div>
          <FooterPrimary />
        </main>
      </PersistGate>
    </Provider>
  );
}

export default wrapper.withRedux(MyApp);
