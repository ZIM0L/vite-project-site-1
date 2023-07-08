import NavContainer from './components/NavbarContainer';
import GlobalStyle from './components/styles/GlobalStyled.styled'
import Introduction from './components/Introduction';
import Partners from './components/Partners';
import AboutUs from './components/AboutUs';
// import News from './components/News';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <GlobalStyle />
      <NavContainer />
      <Introduction />
      <Partners />
      <AboutUs />
      {/* <News /> */}
      <Footer />
    </>
  )
}

export default App
