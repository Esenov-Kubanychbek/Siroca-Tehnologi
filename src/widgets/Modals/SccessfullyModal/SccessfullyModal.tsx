import { CloseSquare, TickCircle } from 'iconsax-react'
import styles from './SccessfullyModal.module.scss'
import { FC, useEffect } from 'react'

interface text {
    texts: string,
    modalScc: string,
    closeModal: () => void,
}


export const SccessfullyModal: FC<text> = ({ texts, modalScc, closeModal}) => {

        useEffect(() => {
            if (modalScc === 'block') {
                const timeoutId = setTimeout(() => {
                        closeModal();
                }, 2000);
    
                return () => {
                    clearTimeout(timeoutId); 
                };
            }
        }, [modalScc, closeModal]);

    return (
        <div style={{   marginRight: `${modalScc==='block' ? '0' : '-500px'}` }} className={styles.SccessfullyModal}>
            <div>
                <TickCircle size={34} color='green' />
                <p>{texts}</p>
                <CloseSquare size={34} />
            </div>
        </div>
    )
}

