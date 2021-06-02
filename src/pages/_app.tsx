// import App from "next/app";
import type { AppProps /*, AppContext */ } from "next/app"
import { Auth0Provider } from "@auth0/auth0-react"
import "bootstrap/dist/css/bootstrap.min.css"

import { auth0 } from "@/services/auth0"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Auth0Provider
      domain={auth0.domain}
      clientId={auth0.clientID}
      redirectUri="http://localhost:3000"
    >
      <Component {...pageProps} />
    </Auth0Provider>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp
