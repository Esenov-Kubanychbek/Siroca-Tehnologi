import Button from "../../../MenedjerProfile/shared/Button/Button";
import InputProfile from "../../../MenedjerProfile/shared/InputProfile/InputProfile";
import "./Profile.scss";
const Profile = () => {
    return (
        <div className="Profile">
            <div className="block1">
                <p>Профиль</p>
            </div>
            <div className="block2">
                <label htmlFor="name">Name</label>
                <br />
                <InputProfile
                    name="name"
                    placeholder=""
                />
                <label htmlFor="lastName">Фамилия</label>
                <br />
                <InputProfile
                    name="lastName"
                    placeholder=""
                />
                <label htmlFor="dol">Должность в компании</label>
                <br />
                <InputProfile
                    name="dol"
                    placeholder=""
                />
                <label htmlFor="company">Компания</label>
                <br />
                <InputProfile
                    name="company"
                    placeholder=""
                />
                <label htmlFor="login">Логин</label>
                <br />
                <InputProfile
                    name="login"
                    placeholder=""
                />
                <Button
                    value="Сохранить"
                    className="blue"
                />
            </div>
        </div>
    );
};

export default Profile;
