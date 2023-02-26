import "@/styles/globals.css";
import Layout from "@/UI/Layout";
// import { Provider } from "react-redux";
import { store } from "../store/register";
export default function App({ Component, pageProps }) {
  return (
    // <Provider store={store}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    // </Provider>
  );
}
