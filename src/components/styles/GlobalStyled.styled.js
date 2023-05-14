import { createGlobalStyle } from "styled-components"
import gif from "./img/gif.gif"

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0 auto;
        padding: 0;
        box-sizing: border-box;
        font-family: Noto Sans;
        background-image: url("${gif}");
        filter: opacity(1);
        overflow-x: hidden;
        color: black;
        ${window.addEventListener('scroll', function() {
            var body = document.body;
            if (window.scrollY >= 2500) {
              body.style.backdropFilter = 'invert(90%)  sepia(40%)';
              body.style.transition = 'backdrop-filter 0.5s ease-in-out';
              body.style.color = "#FFC6D0";
            } else {
              body.style.backdropFilter = 'none';
              body.style.transition = 'backdrop-filter 0.5s ease-in-out';
              body.style.color = "black";
            }
          })}
    }
    

`

export default GlobalStyle;