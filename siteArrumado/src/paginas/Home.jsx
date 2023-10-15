import {Link} from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

function Home () {
  return (
    
    <>
    <Header/>
    <Link to={"/Informacoes"}></Link>

       <div>
      <main>
        
        <img className="log" src="./img/logo.png" alt="Logo" />
       
      </main>

      <main>
        <p className="apri" >Aprimorando cada vez mais a tecnologia</p>
      </main>
      
   
    <header>
    
    <Link to={"/Informacoes"}> <button className="saiba" >Saiba mais</button> </Link>
    
    </header>

        <main>
          <p className="pronto" >PRONTO PARA A INOVAÇÃO!!</p>
        </main>

        <main>
        
        <img className="educa" src="./img/educa.png" alt="imagem do óculos" />
        
        </main>

      
    </div>

    <Footer/>
    
    </>

 
    
   
  )
}

export default Home