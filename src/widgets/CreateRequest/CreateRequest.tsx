import styles from "./CreateRequest.module.scss";
import { CustomInput, CheckBox, CustomSelect, Date, CustomTextArea, CustomButton } from "../../shared/ui";
import { Calendar, Timer1 } from "iconsax-react";

export const CreateRequest = () => {
   return (
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
               <CustomInput
                  placeholder="Напишите..."
                  width={386}
               />
            </div>
            <div className={styles.requestStyle}>
               <div className={styles.textAll}>Название компании</div>
               <CustomInput
                  placeholder="Напишите..."
                  width={386}
               />
            </div>
         </div>
         <div className={styles.elementsReg}>
            <div className={styles.requestStyle}>
               <div className={styles.textAll}>Приоритетность заявки</div>
               <CustomSelect name="Выберите" />
            </div>
            <div className={styles.requestStyle}>
               <div className={styles.textAll}>Статус заявок</div>
               <CustomSelect name="Выберите" />
            </div>
         </div>
         <div className={styles.link}>
            <div className={styles.textAll}>Ссылка на Jira</div>
            <CustomInput
               placeholder="https://"
               width={386}
            />
         </div>
         <div className={styles.humans}>
            <div className={styles.textAll}>Люди</div>
            <div className={styles.selects}>
               <CustomSelect name="Заявитель" />
               <CustomSelect name="Менеджер" />
            </div>
         </div>
         <div className={styles.datesContainer}>
            <div className={styles.textAll}>Даты:</div>
            <div className={styles.data}>
               <div className={styles.dates1}>
                  <Date
                     name="Дата начала"
                     dates="дд.мм.гггг"
                  >
                     <Calendar color="#5C5C5C" />
                  </Date>
                  <Date
                     name="Срок выполнения"
                     dates="xx дней"
                  >
                     <Timer1 color="#5C5C5C" />
                  </Date>
                  <Date
                     name="Дата отправки"
                     dates="дд.мм.гггг"
                  >
                     <Calendar color="#5C5C5C" />
                  </Date>
               </div>
               <div className={styles.dates2}>
                  <Date
                     name="Дата окончания"
                     dates="дд.мм.гггг"
                  >
                     <Calendar color="#5C5C5C" />
                  </Date>
                  <Date
                     name="Дата подачи"
                     dates="дд.мм.гггг"
                  >
                     <Calendar color="#5C5C5C" />
                  </Date>
                  <Date
                     name="Дата утверждения"
                     dates="дд.мм.гггг"
                  >
                     <Calendar color="#5C5C5C" />
                  </Date>
               </div>
            </div>
         </div>
         <div className={styles.Status}>
            <div className={styles.textAll}>Статус оплаты</div>
            <CustomSelect
               width={560}
               name="Выберите"
            />
         </div>
         <div className={styles.description}>
            <div className={styles.textAll}>Описание</div>
            <CustomTextArea placeholder="Напишите..." />
         </div>
         <div className={styles.description}>
            <div className={styles.textAll}>Комментарии*</div>
            <CustomTextArea placeholder="Напишите..." />
         </div>
         <div className={styles.checklists}>
            <div className={styles.textAll}>Чек-Листы</div>
            <CheckBox name="Выполнить задание №1" />
            <CheckBox name="Выполнить задание №2" />
            <CheckBox name="Выполнить задание №3" />
         </div>
         <div className={styles.saved}>
            <CustomButton
               variant={false}
               width={223}
               text="Отменить"
            />
            <CustomButton
               variant={true}
               width={223}
               text="Сохранить"
            />
         </div>
      </div>
   );
};
