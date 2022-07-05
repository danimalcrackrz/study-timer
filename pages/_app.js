import Layout from "../components/Layout"
import "../styles/globals.css"
import "../styles/App.scss"
import "../styles/Timer.scss"

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
