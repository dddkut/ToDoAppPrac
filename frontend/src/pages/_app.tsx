import "@/styles/globals.css";
import type { AppProps } from "next/app";
import * as dotenv from "dotenv";
import { Provider } from "react-redux";
import { store } from "../store";

// loading .env
dotenv.config();

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
