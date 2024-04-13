import { Timer1 } from "iconsax-react";
import styles from "./CheckList.module.scss";
import "../Style.scss";
import { FC } from "react";

export const CheckList: FC = () => {
    return (
        <div className={styles.ChekcLists}>
            <div className={styles.panel}>
                <div className={styles.block1}>
                    <input
                        type="checkbox"
                        name="check"
                        id="check"
                    />
                    <p>Заявка выглядит полной и информативной</p>
                </div>
                <div className={styles.block2}>
                    <span>Ажиржанова У.</span>
                    <div>
                        <Timer1 />
                        <p>20 март</p>
                    </div>
                </div>
            </div>
            <div className={styles.panel}>
                <div className={styles.block1}>
                    <input
                        type="checkbox"
                        name="check"
                        id="check"
                    />
                    <p>Заявка выглядит полной и информативной</p>
                </div>
                <div className={styles.block2}>
                    <span>Ажиржанова У.</span>
                    <div>
                        <Timer1 />
                        <p>20 март</p>
                    </div>
                </div>
            </div>
            <div className={styles.panel}>
                <div className={styles.block1}>
                    <input
                        type="checkbox"
                        name="check"
                        id="check"
                    />
                    <p>Заявка выглядит полной и информативной</p>
                </div>
                <div className={styles.block2}>
                    <span>Ажиржанова У.</span>
                    <div>
                        <Timer1 />
                        <p>20 март</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
