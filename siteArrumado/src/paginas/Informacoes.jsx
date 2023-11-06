import {Link} from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

function Informacoes () {
  return (
    
    <>
    <Header/>
      <Link to={"/Sobre"}> </Link>

    <div>
       <h1 className="infoo" >Informações:</h1>
      <br />

      
    
<h1 className="hs"> 1. Sensores de proximidade, como ultrassom, infravermelho ou laser, detectam objetos próximos ao usuário. </h1>
   
<h2 className="hs" > 2. Esses sensores enviam informações de distância dos objetos para um microcontrolador. </h2>

<h3 className="hs" >3. O microcontrolador processa essas informações e emite alertas sonoros para o usuário por meio de um alto-falante ou fones de ouvido. </h3>
        
<h4 className="hs" >4. O usuário recebe os alertas sonoros e pode evitar colisões ou obstáculos com base nessas informações. </h4>

<br/>

<h1 className="obj" >Objetivo do trabalho:</h1>

<br />

<h5 className="hs1"> Ajudar pessoas com deficiência visual, além da inclusão de pessoas com deficiência auditiva, com um óculos proporcinado para ambos.</h5>

</div>

    <Link to={"/Itens"}> <button className="veja" >Veja mais</button> </Link>
  

  <Footer/>
    </>
  

 
    
   
  )
}

export default Informacoes