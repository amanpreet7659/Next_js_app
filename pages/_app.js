import Layout from '../Components/Layout'
import '../styles/globals.css'
import '../styles/login.css'
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap-icons/font/bootstrap-icons.css'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return <Layout>
    <Head>
      {/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" /> */}
      {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script> */}
    </Head>
    <Component {...pageProps} />
  </Layout>
}

export default MyApp
