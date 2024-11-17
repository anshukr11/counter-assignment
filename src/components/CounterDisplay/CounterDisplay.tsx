import { buttonStyles } from "../../styles/buttonStyles";

interface CounterDisplayProps {
    value: number;
  }
  
  export const CounterDisplay = ({ value }: CounterDisplayProps) => (
    <div style={buttonStyles.display}>{value}</div>
  );
  