

const Footer = () => {
    const status=false;
    switch(status) {
        case true:
          return <button>logout</button>
        case false:
          return <button>LogIn</button>
          
          
      
        default:
          return null
      }
    // return (
    //     <div>
    //         <h1>I love playing football</h1>
            
    //     </div>
    // );
};

export default Footer;