import { Button } from "../../common/Button";

interface CounterControlsProps {
    isRunning: boolean;
    onToggle: () => void;
    onReset: () => void;
  }
  
  export const CounterControls = ({
    isRunning,
    onToggle,
    onReset
  }: CounterControlsProps) => (
    <div>
      <Button onClick={onToggle}>
        {isRunning ? 'Pause' : 'Start'}
      </Button>
      <Button onClick={onReset}>
        Reset
      </Button>
    </div>
  );