import styles from "./ReqSearch.module.scss";
import { ChangeEvent, FC, useState } from "react";
import { CloseSquare, SearchNormal1 } from "iconsax-react";
import axios from "axios";
import { getRequestApi } from "../../../widgets/RequestList/api/getRequestApi";
import { BASE_URL } from "../../../shared/variables/variables";

export const ReqSearch: FC = () => {
    const [state, setState] = useState<boolean>(false);
    const [inputState, setInputState] = useState<string>("");
    const change = (e: ChangeEvent<HTMLInputElement>) => {
        setState(true);
        setInputState(e.target.value);
    };
    const fetchRequest = getRequestApi()
    const search = async() => {
        try {
            const response = await axios.get(`${BASE_URL}/applications/form/?search=${inputState}`, {
                headers: {
                    Authorization: `JWT ${localStorage.getItem("access")}`
                }
            })
            fetchRequest.setState(response.data.results.results)

            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className={styles.Search}>
            <SearchNormal1
                color="#929292"
                size={24}
            />
            <input
                className={styles.Input}
                value={inputState}
                onChange={change}
                // onClick={handleKeyDown}

            />
            <button onClick={search}>Search</button>
            <CloseSquare
                variant="Bold"
                color="#3B3B3B"
                size={24}
                style={{ display: state ? "block" : "none" }}
                className={styles.Close}
                onClick={() => {
                    setState(false);
                    setInputState("");
                }}
            />
        </div>
    );
};
