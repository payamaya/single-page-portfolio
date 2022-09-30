import Layout from './Layout'
import Header from './Header'
import About from './About'
import Contact from './Contact'
import Intro from './Intro'
/* import Buttons from './Buttons' */
import Cards from './Cards'
import Footer from './Footer'
import Uncontrolled from '../forms/UnControlled'
import Controlled from '../forms/Controlled'
import ContactForm from './ContactForm'
const Page = () => {
  return (
    <>
      <Header />
      <Layout>
        <Intro />
        <Cards />
        <About />
        <ContactForm/>
        <Contact></Contact>
      </Layout>
      <Footer />
    </>
  )
}
export default Page
