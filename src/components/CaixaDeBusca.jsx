import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './CaixaDeBusca.css';

function CaixaDeBusca({ onChange = () => {} }) {
  return <div className="caixa-de-busca input-group">
    <span className="input-group-text">
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </span>
    <input
      className="form-control"
      onChange={(e) => onChange(e.target.value)}
      placeholder="Buscar contatos"
      type="text"
    />
  </div>
}

export default CaixaDeBusca;
