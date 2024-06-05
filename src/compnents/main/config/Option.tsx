const Option = ({
  state,
  setState,
  option,
  selected,
}: {
  state: 1 | 2;
  setState: Function;
  option: string;
  selected: number;
}) => {
  return (
    <div
      className={"option" + (state === selected ? " selected" : "")}
      onClick={() => {
        setState(state === 1 ? 2 : 1);
      }}
    >
      <p>{option}</p>
    </div>
  );
};

export default Option;
