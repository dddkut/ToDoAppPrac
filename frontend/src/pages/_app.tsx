import "@/styles/globals.css";
import type { AppProps } from "next/app";
import * as dotenv from "dotenv";

// loading .env
dotenv.config();

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
