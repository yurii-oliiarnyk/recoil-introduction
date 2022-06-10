import { useRecoilState } from "recoil";
import { StyleSheet, css } from "aphrodite";
import { counterAtom } from "../../../recoils/counter";
import { Button } from "../../shared/Button";

export const CounterControls = () => {
  const [counter, setCounter] = useRecoilState(counterAtom);
  const increase = () => setCounter((count) => count + 1);
  const decrease = () => setCounter((count) => count - 1);

  return (
    <div className={css(styles.controls)}>
      <Button onClick={increase} disabled={counter >= 10}>
        Increase
      </Button>
      <Button onClick={decrease} disabled={counter <= 0}>
        Decrease
      </Button>
    </div>
  );
};

const styles = StyleSheet.create({
  controls: {
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
});
