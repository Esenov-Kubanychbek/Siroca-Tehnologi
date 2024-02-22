import React from 'react';
import styles from './CreateRequestPage.module.scss'
import CreateRequest from '../../widgets/request/CreateRequest';
const CreateRequestPage:React.FC = () => {
    return (
        <>
            <div className={styles.bodyAll}>
                <div className={styles.Menu}>
                    
                </div>
                <div className={styles.bodyReguest}>
                    <div className={styles.Header}>
                    
                    </div>
                    <CreateRequest/>
                </div>    
            </div>        
        </>
    );
};

export default CreateRequestPage;