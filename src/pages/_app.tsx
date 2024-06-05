import "@/styles/themes.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    typeof document != undefined ? require('bootstrap/dist/js/bootstrap') : null
  }, []);
  return ( 
    <> 
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>);
}
