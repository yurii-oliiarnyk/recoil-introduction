import { Card } from "../../shared/Card";
import { CounterControls } from "./CounterControls";
import { CounterDisplay } from "./CounterDisplay";
import { CounterInput } from "./CounterInput";

export const Counter = () => {
  return (
    <Card title="Counter" footer={<CounterControls />}>
      <CounterInput />
      <CounterDisplay />
    </Card>
  );
};
