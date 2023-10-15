import {Link} from "react-router-dom"

function Inicial() {
  return (
    
    <>
  
    <Link to={"/Login"}>

    <div>

      <p className="sensory" >Sensory Glasses</p>
      <img className="logoD" src="./img/logo.png" alt="logo" />

       <button className="Cadas">Cadastrar</button>
       <br/>
      <button className="Cadas2">Entrar</button>
     </div>

        </Link>

      
   
    </>

  
    
   
  )
}

export default Inicial