import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'


function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen flex flex-col mx-auto">
      <Header />
      <main className="flex-1">
      <Component {...pageProps}  />
      </main>
      <Footer />
  
    </div>
  
  )
}

export default MyApp
