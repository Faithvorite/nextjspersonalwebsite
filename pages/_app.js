import Layout from "../components/Layout";
import "../styles/globals.css";
import store from "../redux/store";
import { Provider } from "react-redux";
import { AnimateSharedLayout } from "framer-motion";

function MyApp({ Component, pageProps }) {
 
  return (
    <AnimateSharedLayout>

    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
    </AnimateSharedLayout>
  );
}

export default MyApp;