
import { useRef, useState } from 'react';
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

  let Headline2=useRef();

  const clickechange=()=>{
    Headline2.current.innerText="Kaaj hoise";

  }
  let myimage=useRef();
  const imgchange=()=>{
    myimage.current.src='https://placehold.co/600x400?text=Hello+World'
    myimage.current.setAttribute('Height','200px')
    myimage.current.setAttribute('Width','300px')
  }

  let Firstname, Middlename, Lastname =useRef();
  const Fullname=()=>{
    let fname=Firstname.value;
    let mname=Middlename.value;
    let lname=Lastname.value;
    alert(fname+" "+mname+" "+lname)
  }

  let Headline1=useRef();
  const clickeCSSchange=()=>{
    Headline1.current.classList.remove('text-success')
    Headline1.current.classList.add('text-danger')
  }

  let number=useRef(0);

  const numupdate=()=>{
    number.current++ ;
    console.log(number.current);
  }

  let ApiData=useRef(0);
  let myptag=useRef();

  const fetchdata=async()=>{
    const response=await fetch("https://dummyjson.com/products/1")
    ApiData.current=await response.json()
    console.log(ApiData.current)

  }

  const showdata=()=>{
    myptag.current.innerText=JSON.stringify(ApiData.current)
  }

  const [Numberr,setNumber]=useState(0)
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




      <h2 ref={Headline2}></h2>
      <button onClick={clickechange}>Dabao</button>

      <img ref={myimage} src='https://placehold.co/600x400'/>
      <button onClick={imgchange}>Image Change</button><br/>


      <input ref={(a)=>Firstname=a} placeholder='First Name'/><br/>
      <input ref={(b)=>Middlename=b} placeholder='Middle Name'/><br/>
      <input ref={(c)=>Lastname=c} placeholder='Last Name'/><br/>
      <button onClick={Fullname}>FullName</button>


      {/* bootstrap */}

      <h1 className='text-success'  ref={Headline1}>Color change hobe</h1>
      <button onClick={clickeCSSchange}>CSS change</button><br/>

      {/* number update without rendering */}
      <button onClick={numupdate}>NumberUpdate</button>

      {/* api */}

      <p ref={myptag}></p>
      <button onClick={fetchdata}>Call API</button>
      <button onClick={showdata}>Show API</button> <br/>

      {/* useState */}

      <h4>Number update hobe with each click using state: {Numberr}</h4>
      <button onClick={()=>setNumber(Numberr+1)}>0,1,2,3,4,---</button>



      

      

      
      

     

      



      

      
      

      
      
      

  
    </div>
  );
};

export default App;