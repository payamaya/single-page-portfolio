import Layout from './Layout'
import Header from './Header'
import About from './About'
import Contact from './Contact'
import Intro from './Intro'
/* import Buttons from './Buttons' */
import Cards from './Cards'
import Footer from './Footer'
const Page = () => {
  return (
    <>
      <Header />
      <Layout>
        <Intro/>
        <Cards/>
        <About />
        <Contact />
      </Layout>
      <Footer/>
    </>
  )
}
export default Page
