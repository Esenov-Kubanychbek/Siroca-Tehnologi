interface IPropsInner {
   content: string;
   width?: number;
}

export const RequestInner: React.FC<IPropsInner> = ({ content, width }) => {
   return <div style={{ width: `${width}px` }}>{content}</div>;
};
