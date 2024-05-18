import { FC, useState } from "react";
import styles from "./RequestMenu.module.scss";
import { HambergerMenu, InfoCircle, Link1, Message2, TaskSquare } from "iconsax-react";

enum Sections {
    DETAILS = "Details",
    JIRA_LINK = "JiraLink",
    DESCRIPTION = "Description",
    COMMENTS = "Comments",
    CHECKLISTS = "Checklists",
}

export const RequestMenu: FC = () => {
    const [activeSection, setActiveSection] = useState<Sections | null>(Sections.DETAILS);

    const scrollToSection = (section: Sections) => {
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setActiveSection(section);
        }
    };

    return (
        <div className={styles.RequestMenu}>
            <div
                className={activeSection === Sections.DETAILS ? styles.Active : styles.NotActive}
                onClick={() => scrollToSection(Sections.DETAILS)}
            >
                <InfoCircle />
            </div>
            <div
                className={activeSection === Sections.JIRA_LINK ? styles.Active : styles.NotActive}
                onClick={() => scrollToSection(Sections.JIRA_LINK)}
            >
                <Link1 />
            </div>
            <div
                className={activeSection === Sections.DESCRIPTION ? styles.Active : styles.NotActive}
                onClick={() => scrollToSection(Sections.DESCRIPTION)}
            >
                <HambergerMenu />
            </div>
            <div
                className={activeSection === Sections.COMMENTS ? styles.Active : styles.NotActive}
                onClick={() => scrollToSection(Sections.COMMENTS)}
            >
                <Message2 />
            </div>
            <div
                className={activeSection === Sections.CHECKLISTS ? styles.Active : styles.NotActive}
                onClick={() => scrollToSection(Sections.CHECKLISTS)}
            >
                <TaskSquare />
            </div>
        </div>
    );
};
