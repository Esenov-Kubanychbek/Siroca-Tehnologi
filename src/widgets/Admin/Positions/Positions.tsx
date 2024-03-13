import { RequestInner } from "../../../entities";
import { SearchInput } from "../../../features";
import { ButtonCreate } from "../../../shared/ui/ButtonCreate/ButtonCreate";
import { ListTop } from "../../../shared/ui/ListTop/ListTop";
import { ListTopName } from "../../../shared/ui/ListTop/ListTopName";
import styles from "./Positions.module.scss";

export const Positions = () => {
    return (
        <div className={styles.Positions}>
            <div className={styles.Name}>Поиск по должностям</div>
            <div className={styles.Input}>
                <SearchInput /> <ButtonCreate />
            </div>
            <div className={styles.PositionsList}>
                <div className={styles.Inner}>
                    <ListTop>
                        <ListTopName
                            name="Имеющихся должности"
                            width={350}
                        />
                    </ListTop>
                    <RequestInner
                        content="Директор филиала"
                        width={350}
                    />
                    <RequestInner
                        content="Директор филиала"
                        width={350}
                    />
                    <RequestInner
                        content="Директор филиала"
                        width={350}
                    />
                    <RequestInner
                        content="Директор филиала"
                        width={350}
                    />
                    <RequestInner
                        content="Директор филиала"
                        width={350}
                    />
                    <RequestInner
                        content="Директор филиала"
                        width={350}
                    />
                    <RequestInner
                        content="Директор филиала"
                        width={350}
                    />
                    <RequestInner
                        content="Директор филиала"
                        width={350}
                    />
                    <RequestInner
                        content="Директор филиала"
                        width={350}
                    />
                    <RequestInner
                        content="Директор филиала"
                        width={350}
                    />
                    <RequestInner
                        content="Директор филиала"
                        width={350}
                    />
                    <RequestInner
                        content="Директор филиала"
                        width={350}
                    />
                    <RequestInner
                        content="Директор филиала"
                        width={350}
                    />
                    <RequestInner
                        content="Директор филиала"
                        width={350}
                    />
                    <RequestInner
                        content="Директор филиала"
                        width={350}
                    />
                    <RequestInner
                        content="Директор филиала"
                        width={350}
                    />
                </div>
            </div>
        </div>
    );
};
