import styled from "styled-components";

export const Partner__Card__Container = styled.div`
    display: flex;
    flex-flow: row nowrap;
    gap: 10px;
    
  
    .Card{
        flex-grow: 0;     /* do not grow   - initial value: 0 */
        flex-shrink: 0;   /* do not shrink - initial value: 1 */
        flex-basis: ${window.innerWidth / 3}px; /* width/height  - initial value: auto */ 
    }
`