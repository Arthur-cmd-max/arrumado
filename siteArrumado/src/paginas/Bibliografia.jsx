import {Link} from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

function Bibliografia () {
  return (
    
    <>
    <Header/>
    <Link to={"/Bibliografia"}></Link>
 
 <div>
    <p className='Titulo'>Bibliografia</p>

<br/>

<p className='Subtitulo'>Integrantes:</p>
    
<div>

    <div className='img1'> <img  src="./img/alex.png" alt="Alex" /> 
    <p className='p1'>Alex Lopes</p></div>
    
    <div className='img2'> <img  src="./img/arthur.png" alt="Arthur" />
    <p className='p2'>Arthur Zaffalon</p> </div>

    <div className='img3'> <img  src="./img/linguine.png" alt="Linguine" /> 
    <p className='p3'>Arthur Santos</p></div>
   
  
  <br/>

    
    
    

</div>

    <main>
      <h1 className="desc">
    Ajudar pessoas com deficiência visual, é o nosso foco!!! </h1>
    </main>
    
</div>
       
       <Footer/>
    </>

  
  )
}



export default Bibliografia