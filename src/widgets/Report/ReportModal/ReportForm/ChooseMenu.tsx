import styles from "./reportForm.module.scss";

interface Props {
   itemsData: object;
   upChoose: () => void;
   inputId: string;
}

const ChooseMenu: React.FC<Props> = ({ itemsData, upChoose, inputId }) => {
   const onChoos = (ev: any) => {
      const choosed = {
         choosedItem: ev.target.id,
         input: inputId,
      };

      upChoose(choosed);
   };
   const maping = itemsData.map((el) => {
      return (
         <p
            id={el}
            onClick={onChoos}
         >
            {el}
         </p>
      );
   });
   return <div className={styles.ChooseMenu}>{maping}</div>;
};

export default ChooseMenu;