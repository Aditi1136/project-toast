import React from 'react';
import Button from '../Button';

import styles from './ToastPlayground.module.css';
import ToastShelf from '../ToastShelf/ToastShelf';
import { ToastContext } from '../ToastProvider/ToastProvider';


const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];


function ToastPlayground() {
  const { createToast } = React.useContext(ToastContext);
  const [option, setOption] = React.useState("notice")
  const [message, setMessage] = React.useState('')
  
  const id = React.useId()

  const handleClick=(event)=>{
      event.preventDefault()
      createToast(message, option);

      setMessage("")
      setOption()
  }
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      
      <ToastShelf />
      <form onSubmit={handleClick}>
      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea 
            id="message" 
            className={styles.messageInput} 
            value={message}
            onChange={(event)=>{
                setMessage(event.target.value)
            }}  
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map((items)=>(
                <label htmlFor={id} key={`variant${items}`}>
                <input
                  
                  id={id}
                  type="radio"
                  name="variant"
                  value={items}
                  checked={items === option}
                  onChange={event => {
                    setOption(event.target.value);
                  }}
                />
                {items}
              </label>
            ))}
            

            {/* TODO Other Variant radio buttons here */}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
