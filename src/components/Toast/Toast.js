import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';
import { ToastContext } from '../ToastProvider/ToastProvider';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};



function Toast({message, variant, id}) {
  const Icon = ICONS_BY_VARIANT[variant]
  const {dismissToast} = React.useContext(ToastContext)

  return (
    <>
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        {variant && <Icon size={24} />}
      </div>
      <p className={styles.content}>
      {message}
      </p>
      <button 
      className={styles.closeButton} 
      onClick={() => dismissToast(id)}
      >
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
    </>
  )
}

export default Toast;
