import React, { useState } from 'react';

const Timer = () => {
  const [startTime, setStartTime] = useState(null);
  const [elapsed, setElapsed] = useState(0);
  const [running, setRunning] = useState(false);

  const start = () => {
    if (!running) {
      const now = new Date();
      setStartTime(new Date(now - elapsed)); // continue from paused time
      setRunning(true);

      const tick = () => {
        if (running) {
          setElapsed(new Date() - startTime);
          setTimeout(tick, 100);
        }
      };
      tick();
    }
  };

  const pause = () => setRunning(false);
  const reset = () => {
    setRunning(false);
    setElapsed(0);
    setStartTime(null);
  };

  const formatTime = ms => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const milliseconds = Math.floor((ms % 1000) / 100);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}.${milliseconds}`;
  };

  return (
    <div>
      <h2>Timer: {formatTime(elapsed)}</h2>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Timer;
