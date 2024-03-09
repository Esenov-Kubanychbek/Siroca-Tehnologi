interface IStatus {
   count: number;
}

export const StatusInner: React.FC<IStatus> = ({ count }) => {
   return <div>{count}</div>;
};
