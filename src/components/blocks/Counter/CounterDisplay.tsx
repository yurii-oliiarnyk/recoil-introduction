import { css, StyleSheet } from "aphrodite/no-important";
import { useRecoilValue } from "recoil";
import { counterAtom, counterDoubled } from "../../../recoils/counter";

export const CounterDisplay = () => {
  const counter = useRecoilValue(counterAtom);
  const counterDouble = useRecoilValue(counterDoubled);

  return (
    <div className={css(styles.wrapper)}>
      <p className={css(styles.p)}>
        Single counter value: <b>{counter}</b>
      </p>
      <p className={css(styles.p)}>
        Doubled counter value: <b>{counterDouble}</b>
      </p>
    </div>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    marginTop: 16,
  },
  p: {
    margin: 0,
  },
});
