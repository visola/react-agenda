import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './CardContato.css';

function CardContato ({ contato }) {
    return <div className="card-contato">
      <h2>{ contato.nome }</h2>
      <p>
        <FontAwesomeIcon icon={faPhone} />
        { contato.telefone }
      </p>
      <p>
        <FontAwesomeIcon icon={faEnvelope} />
        { contato.email }
      </p>
    </div>;
  };
  
  export default CardContato;
  