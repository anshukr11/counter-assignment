import { useCounter } from "../../hooks/useCounter";
import { buttonStyles } from "../../styles/buttonStyles";
import { CounterControls } from "../CounterControls/CounterControls";
import { CounterDisplay } from "../CounterDisplay/CounterDisplay";


interface CounterProps {
  initialCount?: number;
  interval?: number;
}

export const Counter = ({ initialCount, interval }: CounterProps) => {
  const { count, isRunning, toggleCounter, resetCounter } = useCounter({
    initialCount,
    interval
  });

  return (
    <div style={buttonStyles.container}>
      <CounterDisplay value={count} />
      <CounterControls
        isRunning={isRunning}
        onToggle={toggleCounter}
        onReset={resetCounter}
      />
    </div>
  );
};

export default Counter;