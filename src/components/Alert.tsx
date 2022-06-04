import type { IAlertProps } from '../interfaces/index';
const Alert = ({error,message}:IAlertProps):JSX.Element => {
  return (
    <div className={`${error ? 'bg-red-300 border-l-4 border-red-500' : 'bg-blue-300 border-l-4 border-blue-500'} font-bold text-center capitalize py-5`}>{message}</div>
  )
}

export default Alert