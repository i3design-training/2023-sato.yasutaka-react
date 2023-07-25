import React, { useState, useEffect } from 'react';

export default function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date()); // 時間を更新する
    }, 1000); // 1秒ごとに更新

    return () => {
      clearInterval(interval); // コンポーネントがアンマウントされるときにインターバルをクリア
    };
  }, []);

  let hours = currentTime.getHours();
  let className;
  if (hours >= 0 && hours <= 6) {
    className = 'night';
  } else {
    className = 'day';
  }

  return (
    <h1 className={className}>
      {currentTime.toLocaleTimeString()}
    </h1>
  );
}
