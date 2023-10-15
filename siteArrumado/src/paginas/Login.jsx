import {Link} from "react-router-dom"

function Login() {
  return (
  
    <>
    <div>
    <Link to={"/Home"}></Link>

  </div>
    <header>

      <div className="looog">

      <img  src="./img/logo.png" alt="logo" />

      </div>
        
        <h1 className="luog" >Login</h1>
      </header>

      <main>
        <form action="">
          <div>
            <input type="text" id='usuario' placeholder=' Usuário:' className="campo1"/>
          </div>

          <div>
            <input type="Gmail" id='email' placeholder=' Email:' className="campo1"/>
          </div>
          
          <div>
            <input type="password" id='senha' placeholder=' Senha:' className="campo1"/>
          </div>

          

         <Link to={"/Home"}> <button className="bott" >Entrar</button> </Link> 
           
        </form>
      </main>
    </>
  
  )
}

export default Login