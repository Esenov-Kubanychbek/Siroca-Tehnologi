import { FC } from "react";
import { CloseSquare, MoreSquare } from "iconsax-react";
import styles from "./RequestView.module.scss";
import ViewModal from "../../shared/hooks/modalHooks/useViewRequest";
import { MenuRequest } from "./ui/Menu/MenuRequest";
import { Logs } from "./ui/Logs/Logs";
import DetailsAplication from "./ui/DetailsAplication/DetailsAplication";
import { Link } from "./ui/Link/Link";
import Peoples from "./ui/Peoples/Peoples";
import { Date } from "./ui/Date/Date";
import { Comments } from "./ui/Comments/Comments";
import { Description } from "./ui/Description/Description";
import { BriefDescription } from "./ui/BriefDescription/BriefDescription";
import { ChekcLists } from "./ui/ChekcLists/ChekcLists";

export const RequestView: FC = () => {
    const modal = ViewModal();
    return (
        <div className={styles.RequestView}>
            <MenuRequest />
            <div className={styles.Container}>
                <div className={styles.block1}>
                    <div className={styles.h1}>Заявка - Оптима Банк</div>
                    <div className={styles.buttons}>
                        <MoreSquare
                            variant="Bulk"
                            color="#5c5c5c"
                            size={34}
                        />
                        <CloseSquare
                            onClick={modal.close}
                            color="#5C5C5C"
                            variant="Bold"
                            size={34}
                        />
                    </div>
                </div>
                <div className={styles.block2}>
                    Номер заявки:
                    <div className={styles.number}>YMF021256</div>
                </div>
                <Logs />
                <DetailsAplication />
                <Link />
                <Peoples />
                <Date />
                <Comments />
                <Description />
                <BriefDescription />
                <ChekcLists />
            </div>
        </div>
    );
};
