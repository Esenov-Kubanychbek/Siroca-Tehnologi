import styles from "./notification.module.scss"
import CloseBtn from "../../shared/close_button/Close_button.tsx"
import New_notification from "./New_notification.tsx"

const Notification: React.FC = () => {
    return(
        <div className={styles.notificationModalWindow}>
            <div className={styles.container}>
                <div className={styles.headerNotification}>
                    <h3 className={styles.notifactionHeaderH3}>
                        Уведомление
                    </h3>
                    <CloseBtn/>
                </div>
                <div className={styles.contentBlock}>
                  <New_notification active={true}/>
                <New_notification active={false}/>  
                </div>
                
            </div>
        </div>
        
    )
}

export default Notification