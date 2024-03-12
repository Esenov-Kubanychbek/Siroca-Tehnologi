import Avatar from "./Avatar/Avatar";
import "./BlockOne.scss";
import Buttons from "./Buttons/Buttons";
import Menedjer from "./Menedjer/Menedjer";
const BlockOne = () => {
    return (
        <div className="BlockOne">
            <Avatar />
            <Menedjer />
            <Buttons />
        </div>
    );
};

export default BlockOne;
