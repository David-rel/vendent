import '@/styles/globals.css'
import { AuthProvider } from "@propelauth/react";
import React from "react";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider authUrl={process.env.NEXT_PUBLIC_AUTH_URL}>
      <Head>
        <title>Vendent</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="./static/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
