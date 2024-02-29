import styles from "./CreateRequest.module.scss";
import MyInput from "./ui/input/MyInput";
import MySelect from "./ui/select/MySelect";
import DataDiv from "./ui/dataDiv/DataDiv";
import CheckBox from "./ui/checkBox/CheckBox";
import ButtonSave from "./ui/buttonsSave/ButtonSave";
import TextAreaReg from "./ui/textArea/TextAreaReg";

const CreateRequest: React.FC = () => {
   return (
      <>
         <div className={styles.CreateReg}>
            <div className={styles.titleReg}>
               <div className={styles.titleText}>Создание заявки</div>
               <div className={styles.titleNumber}>
                  Номер заявки:<span>124552</span>
               </div>
            </div>
            <div className={styles.elementsReg}>
               <div className={styles.requestStyle}>
                  <div className={styles.textAll}>Название заявки</div>
                  <MyInput
                     placeholder="Напишите..."
                     className="inputName"
                  />
               </div>
               <div className={styles.requestStyle}>
                  <div className={styles.textAll}>Название компании</div>
                  <MyInput
                     placeholder="Напишите..."
                     className="inputName"
                  />
               </div>
            </div>
            <div className={styles.elementsReg}>
               <div className={styles.requestStyle}>
                  <div className={styles.textAll}>Приоритетность заявки</div>
                  <MySelect name="Выберите" />
               </div>
               <div className={styles.requestStyle}>
                  <div className={styles.textAll}>Статус заявок</div>
                  <MySelect name="Выберите" />
               </div>
            </div>
            <div className={styles.link}>
               <div className={styles.textAll}>Ссылка на Jira</div>
               <MyInput
                  placeholder="https://"
                  className="inputLink"
               />
            </div>
            <div className={styles.humans}>
               <div className={styles.textAll}>Люди</div>
               <div className={styles.selects}>
                  <MySelect name="Заявитель" />
                  <MySelect name="Менеджер" />
               </div>
            </div>
            <div className={styles.datesContainer}>
               <div className={styles.textAll}>Даты:</div>
               <div className={styles.data}>
                  <div className={styles.dates1}>
                     <DataDiv
                        name="Дата начала"
                        dates="дд.мм.гггг"
                        src="/iconsReg/calendar.png"
                     />
                     <DataDiv
                        name="Срок выполнения"
                        dates="xx дней"
                        src="/iconsReg/timer.png"
                     />
                     <DataDiv
                        name="Дата отправки"
                        dates="дд.мм.гггг"
                        src="/iconsReg/calendar.png"
                     />
                  </div>
                  <div className={styles.dates2}>
                     <DataDiv
                        name="Дата окончания"
                        dates="дд.мм.гггг"
                        src="/iconsReg/calendar.png"
                     />
                     <DataDiv
                        name="Дата подачи"
                        dates="дд.мм.гггг"
                        src="/iconsReg/calendar.png"
                     />
                     <DataDiv
                        name="Дата утверждения"
                        dates="дд.мм.гггг"
                        src="/iconsReg/calendar.png"
                     />
                  </div>
               </div>
            </div>
            <div className={styles.Status}>
               <div className={styles.textAll}>Статус оплаты</div>
               <MySelect
                  width="560px"
                  name="Выберите"
               />
            </div>
            <div className={styles.description}>
               <div className={styles.textAll}>Описание</div>
               <TextAreaReg placeholder="Напишите..." />
            </div>
            <div className={styles.description}>
               <div className={styles.textAll}>Комментарии*</div>
               <TextAreaReg placeholder="Напишите..." />
            </div>
            <div className={styles.checklists}>
               <div className={styles.textAll}>Чек-Листы</div>
               <CheckBox name="Выполнить задание №1" />
               <CheckBox name="Выполнить задание №2" />
               <CheckBox name="Выполнить задание №3" />
            </div>
            <div className={styles.saved}>
               <ButtonSave
                  color="rgba(28, 106, 177, 0.9)"
                  backgroundColor="white"
                  text="Отменить"
               />
               <ButtonSave text="Сохранить" />
            </div>
         </div>
      </>
   );
};

export default CreateRequest;
