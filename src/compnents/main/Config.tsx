import Title from "./config/Title";
import Option from "./config/Option";
import Total from "./config/Total";
import { useState } from "react";

const Config = () => {
  const [state1, setState1] = useState<1 | 2>(1);
  const [state2, setState2] = useState<1 | 2>(1);

  return (
    <section className="config">
      <div>
        <Title title="Sélectionnez votre véhicule" />
        <Option
          state={state1}
          setState={setState1}
          option="Grande Autonomie - 90 700 €"
          selected={1}
        />
        <Option
          state={state1}
          setState={setState1}
          option="Performance - 106 700 €"
          selected={2}
        />
      </div>
      <div>
        <Title title="Sélectionnez la couleur" />
        <Option
          state={state2}
          setState={setState2}
          option="Blanc Nacré Multicouches - 0 €"
          selected={1}
        />
        <Option
          state={state2}
          setState={setState2}
          option="Noir Uni - 1 000 €"
          selected={2}
        />
      </div>
      <div>
        <Total state1={state1} state2={state2} />
      </div>
    </section>
  );
};

export default Config;
