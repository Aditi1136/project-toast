import React from 'react';
import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider/ToastProvider';

function ToastShelf() {
  const {toasts} = React.useContext(ToastContext)
  
  return (
    <>
    <ol className={styles.wrapper}>
    {toasts?.map((item)=>(
      <li key={item.id} className={styles.toastWrapper}>
        <Toast variant={item.variant} message={item.title} id={item.id}/>
      </li>
    ))}
     </ol>
   </>
  );
}

export default ToastShelf;
