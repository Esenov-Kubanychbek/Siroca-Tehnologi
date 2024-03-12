import "./MenedjerProfile.scss";
import close from "../icon/close-square.svg";
import BlockOne from "./components/BlockOne/BlockOne";
import Profile from "./components/Profile/Profile";
const MenedjerProfile = () => {
    return (
        <div className="MenedjerProfile">
            <img
                className="close"
                src={close}
                alt="close"
            />
            <BlockOne />
            <Profile />
        </div>
    );
};

export default MenedjerProfile;
