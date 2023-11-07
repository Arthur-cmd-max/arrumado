import "./Header.css"

export default function Header() {
  return (
    <>
    <header>
        <nav className="nav-list">
          
          <div className="mobile-menu">

            <div className="li1" ></div>
            <div className="li2" ></div>
            <div className="li3" ></div>
            
          </div>
          
            <img src="../img/logo.png" alt="" />
            <ul>      
              

                <a className="head" href="/Home">Inicio</a>
                <a className="head" href="/Informacoes">Informações</a>
                <a className="head" href="/Sobre">Sobre</a>
                <a className="head" href="/Bibliografia">Bibliografia</a>
                
            </ul>
        </nav>
    </header>
    </>
  )
}
