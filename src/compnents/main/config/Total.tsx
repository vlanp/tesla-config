const Total = ({ state1, state2 }: { state1: 1 | 2; state2: 1 | 2 }) => {
  const total = (state1 === 1 ? 90_700 : 106_700) + (state2 === 1 ? 0 : 1_000);
  return (
    <div className="total">
      <p>{total + " €"}</p>
      <button
        onClick={() => {
          alert("Thanks for clicking !");
        }}
      >
        Buy !
      </button>
    </div>
  );
};

export default Total;
