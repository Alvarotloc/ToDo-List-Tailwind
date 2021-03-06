export interface IChildren {
    children : JSX.Element | JSX.Element[];
}
export interface ITasksProvider {
    tasks : string[];
    setTasks : (tasks : string[]) => void;
}
export interface IAlertProps {
    error: boolean;
    message: string;
}