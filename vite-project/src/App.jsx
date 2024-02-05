
import ContactUs from './component/ContactUs';
import Footer from './component/footer';
import Header from './component/header';
import Hero from './component/hero';
import Ternary from './component/ternary';

const loginstatus=(status)=>{
  if(status){
    return <button>Logout</button>
  }
  else{
    return <button>login</button>
  }

}





const App = () => {
  let marks=40
  const city = ['Dhaka','Ctg','Syhlet','Feni']

  const itemobj={
    name: 'Shuvo',
    age: 24,
    city: 'Dhaka'
  }

  const buttonclick=()=>{
    alert("Hello bhai salamualaikum");

  }
  const moja=()=>{
    alert("Bhaloiiii");
  }

  const postfromdata=(event)=>{
    event.preventDefault();
    alert("Form Submitted Successfully")

  }
  
  
  return (
    <div>
      <Header/>
      <Hero/>
      <Footer/>
      <ContactUs/> 

      {marks>80?<h1>Good Result</h1>:<h1>Average Result</h1>}

      {(()=>{
        if(marks<=100 && marks>=97){
          return <h1>A+</h1>
        }
        else if(marks<93 && marks>=90){
          return <h1>A</h1>
        }
        else if(marks<90 && marks>=85){
          return <h1>A-</h1>
        }
        else if(marks<85 && marks>=80){
          return <h1>B+</h1>
        }
        else if(marks<80 && marks>=75){
          return <h1>B</h1>
        }
        else{
          return <h1>Study Hard</h1>
        }

      })()}
      <ol>{
        city.map((item,i)=>{
          return <li key={i.toString()}>{item}</li>
        })}
      </ol>
      <h1>Login Status</h1>
      {loginstatus(false)}
      <Ternary/>

      <Hero title='learn react'/>
      <Hero chai= {itemobj}/>
      <Header childbuttonclick={buttonclick}/>

      <button onClick={()=>{alert("Bhaloi")}}>Click Meh</button>
      <button onClick={moja}>Lets go</button>

      <form onSubmit={postfromdata}>
        <input placeholder='name batao'/>
        <button>Submit korbi ki nah?</button>

      </form>

      

      
      

     

      



      

      
      

      
      
      

  
    </div>
  );
};

export default App;