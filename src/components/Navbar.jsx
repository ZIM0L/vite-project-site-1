import {HomePage} from './Home/HomePage.styled';
import { NavMenu } from './Home/NavMenu.styled.js';
import {useState, useEffect} from 'react';
const List = ["WORK","ABOUT","NEWS","THINKING","PLEDGE", "CAREERS","CONTACT"];
//document.documentElement.scrollTop


function Navbar() { 
    
    const [isVisible, setIsVisible] = useState("grid");
    // BUG: wrong height calculation ? 
    useEffect(() => {

        function handleScroll() {
          const scrolled = document.documentElement.scrollTop;
          if (scrolled >= 499 ) {
            //console.log(scrolled)
            setIsVisible("none");
          } else {
            setIsVisible("grid");
          }
        }
        
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
        

        
    return (
        <>
            <NavMenu isvisible={isVisible}>
                <span>BASIC/DEBT</span>
                <div className='Nav' >
                    {List.map((item,key) => {return <a href='#'key={key}>{item}</a>})}    
                </div>
                <span>MENU</span>
                
            </NavMenu>
            <HomePage></HomePage>
        </>
    )
}

export default Navbar