import styles from "./ReqSearch.module.scss";
import { ChangeEvent, FC, useState } from "react";
import { CloseSquare, SearchNormal1 } from "iconsax-react";
import axios from "axios";
import { getRequestApi } from "../../../widgets/RequestList/api/getRequestApi";
import { BASE_URL } from "../../../shared/variables/variables";

export const ReqSearch: FC = () => {
    const [state, setState] = useState<boolean>(false);
    const [inputState, setInputState] = useState<string>("");

    //onChange to search input
    const change = (e: ChangeEvent<HTMLInputElement>) => {
        setState(true);
        setInputState(e.target.value);
    };
    const fetchRequest = getRequestApi();

    //Search func
    const search = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/applications/form/?search=${inputState}`, {
                headers: {
                    Authorization: `JWT ${localStorage.getItem("access")}`,
                },
            });
            fetchRequest.setState(response.data.results.results);

            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    //To clear all searched things
    const updateSearch = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/applications/form/`, {
                headers: {
                    Authorization: `JWT ${localStorage.getItem("access")}`,
                },
            });
            fetchRequest.setState(response.data.results.results);

            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    //Search is work on click enter
    const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "Enter") {
            search();
        }
    };
    return (
        <div
            className={styles.Search}
            onKeyDown={(event: React.KeyboardEvent<HTMLDivElement>) => handleKeyPress(event)}
        >
            <SearchNormal1
                color="#929292"
                size={24}
            />
            <input
                className={styles.Input}
                value={inputState}
                onChange={change}
            />
            <CloseSquare
                variant="Bold"
                color="#3B3B3B"
                size={24}
                style={{ display: state ? "block" : "none" }}
                className={styles.Close}
                onClick={() => {
                    setState(false);
                    setInputState("");
                    updateSearch();
                }}
            />
        </div>
    );
};
