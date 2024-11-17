import { useCallback, useEffect, useState } from 'react';
import { CounterState, UseCounterProps } from '../components/Counter/types';

export const useCounter = ({ 
  initialCount = 0, 
  interval = 1000 
}: UseCounterProps = {}) => {
  const [state, setState] = useState<CounterState>({
    count: initialCount,
    isRunning: false
  });

  useEffect(() => {
    let intervalId: NodeJS.Timer;

    if (state.isRunning) {
      intervalId = setInterval(() => {
        setState(prevState => ({
          ...prevState,
          count: prevState.count + 1
        }));
      }, interval);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [state.isRunning, interval]);

  const toggleCounter = useCallback(() => {
    setState(prevState => ({
      ...prevState,
      isRunning: !prevState.isRunning
    }));
  }, []);

  const resetCounter = useCallback(() => {
    setState({
      count: initialCount,
      isRunning: false
    });
  }, [initialCount]);

  return {
    count: state.count,
    isRunning: state.isRunning,
    toggleCounter,
    resetCounter
  };
};