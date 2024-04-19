import { ChangeEvent, FC, useState } from "react";
import axios from "axios";
import { getRequestApi } from "../../../widgets/RequestList/api/getRequestApi";
import { BASE_URL } from "../../../shared/variables/variables";
import { SearchInput } from "../../SearchInput/SearchInput";

export const ReqSearch: FC = () => {
    const [closeState, setCloseState] = useState<boolean>(false);
    const [inputState, setInputState] = useState<string>("");

    //onChange to search input
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCloseState(true);
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
    const closeFunc = () => {
        setCloseState(false);
        setInputState("");
        updateSearch();
    }
    return (
        <SearchInput value={inputState} onChange={handleChange} onKeyDown={handleKeyPress} closeFunc={closeFunc} closeState={closeState}/>
    );
};
