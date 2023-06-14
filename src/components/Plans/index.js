import PlansTile from "../PlansTile";
import "./Plans.css";

function Plans() {
  return (
    <section>
      <h1 className="title">Escolha seu plano</h1>
      <section className="pricing">
        <PlansTile />
      </section>
    </section>
  );
}

export default Plans;
