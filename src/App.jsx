import NavContainer from './components/NavbarContainer';
import GlobalStyle from './components/styles/GlobalStyled.styled'
import Introduction from './components/Introduction';
import Partners from './components/Partners';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <>
      <GlobalStyle />
      <NavContainer />
      <Introduction />
      <Partners />
      <AboutUs />
    </>
  )
}

export default App
