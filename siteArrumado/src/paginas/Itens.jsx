import {Link} from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

function Itens () {
  return (
    
    <div>
      <Header/>
    <Link to={"/Itens"}></Link>


       <p className="Ite" >Itens Utilizados:</p>
    
    <br/>
    
    <div>

    <h1 className="escrit" >Armação do óculos :</h1>
    <img className="imagite" src="./img/armacao.png" alt="Armação do óculos" />
    <h2 className="escrit2" >Cerca de: R$65,00</h2>

    <br/>

    <h1 className="escrit" >Sensor de distância :</h1>
    <img className="imagite" src="./img/distancia.png" alt="Sensor de distância" />
    <h2 className="escrit2" >Cerca de: R$12,99</h2>

    <br/>

    <h1 className="escrit" >Placa Arduino Nano :</h1>
    <img className="imagite" src="./img/nano.png" alt="Placa Nano" />
    <h2 className="escrit2" >Cerca de: R$30,00</h2>

    <br/>

    <h1 className="escrit" >Buzzer :</h1>
    <img className="imagite" src="./img/buzzer.png" alt="Buzzer" />
    <h2 className="escrit2" >Cerca de: R$2,38</h2>

    <br/>

    <h1 className="escrit" >Motor VibraCall :</h1>
    <img className="imagite" src="./img/vibracall.png" alt="Motor VibraCall" />
    <h2 className="escrit2" >Cerca de: R$7,00</h2>

    <br/>

   <Link to={"/Informacoes"}> <button className='Voltar'>Voltar</button> </Link>


    </div>

    <Footer/>
  </div>
   
   
  )
}

export default Itens