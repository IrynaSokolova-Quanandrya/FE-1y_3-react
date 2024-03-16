import { useEffect, useRef, useState } from 'react';
import styles from './Clock.module.css';

export const Clock = ()=> {
    const [time, setTime] = useState(new Date())
  const intervalId = useRef(null)
  const button = useRef(null)
  // console.log(button.current);
  // console.log(intervalId);
  const stop = () => {
          clearInterval(intervalId.current);
      }
  useEffect(() => {
    intervalId.current = setInterval(() => {
            setTime(new Date());
  }, 1000);
    
    return () => {
      // console.log('Цей метод викликається перед кожним розмонтуванням компоненту');
        stop();
    }
  }, [time])
    
    return (
      <div className={styles.container}>
        <p className={styles.clockface}>
                Поточний час:
                <br />
                {time.toLocaleTimeString()}
            </p>
            <br />
        <button type="button" onClick={stop} ref={button}>
          Зупинити
        </button>
      </div>
    );
}