import { selector } from "recoil";
import counterAtom from "./atom";

export const doubled = selector({
  key: "counterAtomDoubled",
  get: ({ get }) => {
    const counter = get(counterAtom);

    return counter * 2;
  },
});
