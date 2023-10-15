import "./Footer.css"

export default function Footer() {
    return (
      <>

<footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h1 className="looh"> <img src="./img/logo.png" alt="" /></h1>
          <p className="it">Pronto para a inovação!!</p>
        </div>
        <div className="footer-links">
          <h3 className="it">Siga:</h3>
          <ul className="urll">
              
              <li> <img src="../img/instagram.png" alt="" /></li>
              <li className="urll2" >@SensoryGlasses</li>
              <li> <img src="../img/twitter.png" alt="" /></li>
              <li className="urll3" >@SensoryGlasses3</li>
    
          </ul>
        </div>
        <div className="it">
          <h3  className="it2" >Entre em Contato:</h3>
          <p className="it2" > sensoryglasses1@gmail.com</p>
        </div>
        <div className="it">
          <div className="social-icons">
            <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p className="it">&#169; 2023 All rights reserved</p>
      </div>
    </footer>
      </>
    )
  }
  