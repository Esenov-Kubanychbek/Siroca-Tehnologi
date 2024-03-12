import Button from "../../../../ClientProfile/shared/Button/Button";
import "./Buttons.scss";

const Buttons = () => {
    return (
        <div>
            <Button
                value="Профиль"
                className="blue"
            />
            <Button
                value="Сменить пароль"
                className="white"
            />
            <Button
                value="Контакты"
                className="white"
            />
        </div>
    );
};

export default Buttons;
