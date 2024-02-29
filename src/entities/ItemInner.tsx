interface IPropsInner {
   content: string;
}

export const ItemInner: React.FC<IPropsInner> = ({ content }) => {
   return <div>{content}</div>;
};
