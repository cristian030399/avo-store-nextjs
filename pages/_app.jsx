import { AppProps } from "next/app"
import Layout from "@components/Layaout/Layout"
import 'semantic-ui-css/semantic.min.css'
import CartProvider from "@store/Cart"
// import '../style.css'

export default function MyApp({ Component, pageProps }) {
    return (
        <CartProvider>
            <Component {...pageProps} />
        </CartProvider>
    )
}