import "./PlansTile.css";
import plansList from "../../mocks/Plans/Plans.json";
import PlansTileButton from "../PlansTileButton";

function PlansTile() {
  const plansTiles = plansList.map((item, id) => (
    <div key={id} className="tile">
      <h2 key={item.plano} className="tile-name">
        {item.plano}
      </h2>
      <p key={item.preco} className="tile-price">
        {item.preco} <span>/Mês</span>
      </p>
      <ul key={item.beneficios} className="tile-list">
        {item.beneficios.map((beneficio, index) => (
          <li key={index} className="tile-list__li">
            {beneficio}
          </li>
        ))}
      </ul>
      <PlansTileButton>assine já</PlansTileButton>
    </div>
  ));

  return plansTiles;
}

export default PlansTile;
