import { Msg } from "../src/Msg";

export function MsgList() {
  const names = ["Jeevan", "Ethan", "Siya", "Jamie"];
  return (
    <div>
      {names.map((nm) => (
        <Msg name={nm} />
      ))}
    </div>
  );
}
