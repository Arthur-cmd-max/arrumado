import {Link} from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

function Sobre () {
  return (
    
    <>
   
    <Header/>
     <Link to={"/Bibliografia"}></Link>

     <p className="sobr">Sobre o Óculos:</p>
        <main>
            <div className="funfa">       
           
            <img src="./img/comofunfa.png" alt="imagem 3d do oculos" />
           
            </div>   
        </main>

        <main>
          <p className="intr">Instruções:</p>

          <h1 className="intr2">O óculos, ao fazer o reconhecimento de algum objeto, 
            acima da linha da cabeça, não proporciona a capacidade de identificar obstáculos que 
            estejam em maiores alturas, como pode-se verificar na Figura acima.</h1>
        </main>

        <Footer/>
    </>
   

 
   
  )
}

export default Sobre