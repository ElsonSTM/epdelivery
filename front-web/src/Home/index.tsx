import './styles.css';
import { ReactComponent as MainImage } from './main.svg'
import Footer from '../Footer';

function Home() {
  return (
    <>
      <div className="home-container">
        <div className="home-content">
          <div className="home-actions">
            <h1 className="home-title">
              Faça seu pedido, <br />
              a entrega vai <br />
              chegar antes da <br />
              sua fome! :)
            </h1>
            <a href="orders" className="home-btn-order">
              FAZER PEDIDO
            </a>
          </div>
          <div className="home-image">
            <MainImage />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home;