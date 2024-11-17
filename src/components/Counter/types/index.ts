export interface CounterState {
    count: number;
    isRunning: boolean;
  }
  
  export interface UseCounterProps {
    initialCount?: number;
    interval?: number;
  }