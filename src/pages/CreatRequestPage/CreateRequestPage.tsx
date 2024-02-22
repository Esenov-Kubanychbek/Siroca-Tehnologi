import React from 'react';
import styles from './CreateRequestPage.module.scss'
import CreateRequest from '../../widgets/request/CreateRequest';
import Profile from '../../widgets/Header/ui/Profile';
import Dashboard from '../../widgets/Dashboard/ui/Dashboard';
const CreateRequestPage:React.FC = () => {
    return (
        <>
            <div className={styles.bodyAll}>
                <div className={styles.Menu}>
                    <Dashboard/>
                </div>
                <div className={styles.bodyReguest}>
                    <div className={styles.Header}>
                    <Profile/>
                    </div>
                    <CreateRequest/>
                </div>    
            </div>        
        </>
    );
};

export default CreateRequestPage;