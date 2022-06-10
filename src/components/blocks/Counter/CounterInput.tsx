import { useRecoilState } from "recoil";
import { css, StyleSheet } from "aphrodite";
import { counterAtom } from "../../../recoils/counter";
import { Input } from "../../shared/Input";

export const CounterInput = () => {
  const [counter, setCounter] = useRecoilState(counterAtom);

  const onChange = (value: string) => {
    const valueAsNumber = Number(value) ?? 0;

    setCounter(valueAsNumber);
  };

  return (
    <div className={css(styles.counterInput)}>
      <label htmlFor="counter">Please, enter count:</label>
      <Input value={counter} id="counter" onChange={onChange} />
    </div>
  );
};

const styles = StyleSheet.create({
  counterInput: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
});
