// import { useState } from "react";
// import { FaRFaRocketchat } from 'react-icons/fa';
// import { Button } from "bootstrap";
// import './ScrollButton.css';

// const ScrollButton = () => {
//     const [visible, setVisible] = useState(false)
  
//     const toggleVisible = () => {
//       const scrolled = document.documentElement.scrollTop;
//       if (scrolled > 300){
//         setVisible(true)
//       } 
//       else if (scrolled <= 300){
//         setVisible(false)
//       }
//     };
    
//     const scrollToTop = () =>{
//       window.scrollTo({
//         top: 0, 
//         behavior: 'smooth'
//         /* you can also use 'auto' behaviour
//            in place of 'smooth' */
//       });
//     };
    
//     window.addEventListener('scroll', toggleVisible);
    
//     return (
//       <Button>
//        <FaRFaRocketchat onClick={scrollToTop} 
//        style={{display: visible ? 'inline' : 'none'}} />
//       </Button>
//     );
//   }
    

// export default ScrollButton;