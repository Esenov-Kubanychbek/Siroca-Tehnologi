import { FC } from 'react';
import styles from './LinkJira.module.scss';
import { DropDown } from './DropDown';
import { CustomInput } from '../../../shared/ui';

export const LinkJira:FC = () => {
    return (
        <div className={styles.LinkJira}>
            <DropDown text="Ссылка на Jira:" />
            <CustomInput width={540} height={44} placeholder="https://"/>
        </div>
    )
}
