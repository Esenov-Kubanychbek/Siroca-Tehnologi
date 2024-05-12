import { FC, useEffect } from "react";
import styles from "./RequestMenu.module.scss";
import { HambergerMenu, InfoCircle, Link1, Message2, TaskSquare } from "iconsax-react";

export enum Sections {
    DETAILS = "details",
    JIRA_LINK = "jiraLink",
    DESCRIPTION = "description",
    COMMENTS = "comments",
    CHECKLISTS = "checklists",
}

interface RequestMenuProps {
    setActiveSection: (section: Sections | null) => void;
}

export const RequestMenu: FC<RequestMenuProps> = ({ setActiveSection }) => {
    const handleScroll = () => {
        const scrollPosition = window.scrollY;

        const detailsSection = document.getElementById(Sections.DETAILS);
        const jiraLinkSection = document.getElementById(Sections.JIRA_LINK);
        const descriptionSection = document.getElementById(Sections.DESCRIPTION);
        const commentsSection = document.getElementById(Sections.COMMENTS);
        const checklistsSection = document.getElementById(Sections.CHECKLISTS);

        if (
            scrollPosition >= detailsSection!.offsetTop &&
            scrollPosition < jiraLinkSection!.offsetTop
        ) {
            setActiveSection(Sections.DETAILS);
        } else if (
            scrollPosition >= jiraLinkSection!.offsetTop &&
            scrollPosition < descriptionSection!.offsetTop
        ) {
            setActiveSection(Sections.JIRA_LINK);
        } else if (
            scrollPosition >= descriptionSection!.offsetTop &&
            scrollPosition < commentsSection!.offsetTop
        ) {
            setActiveSection(Sections.DESCRIPTION);
        } else if (
            scrollPosition >= commentsSection!.offsetTop &&
            scrollPosition < checklistsSection!.offsetTop
        ) {
            setActiveSection(Sections.COMMENTS);
        } else if (scrollPosition >= checklistsSection!.offsetTop) {
            setActiveSection(Sections.CHECKLISTS);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToSection = (section: Sections) => {
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className={styles.RequestMenu}>
            <div onClick={() => scrollToSection(Sections.DETAILS)}>
                <InfoCircle />
            </div>
            <div onClick={() => scrollToSection(Sections.JIRA_LINK)}>
                <Link1 />
            </div>
            <div onClick={() => scrollToSection(Sections.DESCRIPTION)}>
                <HambergerMenu />
            </div>
            <div onClick={() => scrollToSection(Sections.COMMENTS)}>
                <Message2 />
            </div>
            <div onClick={() => scrollToSection(Sections.CHECKLISTS)}>
                <TaskSquare />
            </div>
        </div>
    );
};
