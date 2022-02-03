import { Link } from "react-router-dom";

function StepsHeader(){
  return (
    <header className="orders-steps-container">
      <div className="orders-steps-content">
        <h1 className="steps-title"> 
          ACOMPANHE A ENTREGA DO SEU PEDIDO
        </h1>
      </div>
      <div className="order-summary-make-ckech">
      <Link to="/" >
        Retormar para Home
      </Link>
      </div>
    </header>
  )
}

export default StepsHeader;