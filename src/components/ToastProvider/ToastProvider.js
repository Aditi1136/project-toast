import React from 'react'


export const ToastContext = React.createContext();

const ToastProvider = ({children}) => {
    const [toasts, setToasts] = React.useState([
    ]);

    const createToast=(message, option)=>{
        const newToastItem = {
            id: crypto.randomUUID(),
            title: message,
            variant: option
          }
          const nextItem = [...toasts,newToastItem]
          setToasts(nextItem)
    }

    function dismissToast(id){
        const nextToasts = toasts?.filter((toast) => {
          return toast.id !== id;
        });
        
        setToasts(nextToasts);
          
      }

      React.useEffect(() => {
        function handleKeyDown(event) {
          if (event.code === 'Escape') {
            setToasts([]);
          }
        }
      
        window.addEventListener('keydown', handleKeyDown);
      
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
      }, []);
      
  return (
    <ToastContext.Provider value={{ toasts, createToast, dismissToast }}>
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider