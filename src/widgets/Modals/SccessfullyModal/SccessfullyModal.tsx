import { CloseSquare, TickCircle } from 'iconsax-react'
import styles from './SccessfullyModal.module.scss'
import { FC, useEffect, useState } from 'react'

interface text {
    texts: string,
    modalScc: string,
    closeModal: () => void,
    style?: number;
}


export const SccessfullyModal: FC<text> = ({ texts, modalScc, closeModal, style }) => {
    const [displey, setDispley] = useState<string>('none');
    const [bool, setBool] = useState<boolean>(false)
    console.log(displey);

    useEffect(() => {

        if (modalScc === 'block') {
            setDispley('block' );
            console.log(displey);
            const timeoutId = setTimeout(() => {
                closeModal();
                setBool(true);  
            console.log(displey);

            }, 5000);
            if (bool === true) {
                const timeDisplay = setTimeout(() => {
                    setDispley('none');
            console.log(displey);

                }, 5300);
                return () => {
                    clearTimeout(timeDisplay);

                }
            }

            return () => {
                clearTimeout(timeoutId);

            };
        }

    }, [modalScc, closeModal]);


    return (
        <div style={{ transform: `translateX(${modalScc === 'block' ? '0' : '650px'})`, top: `${style ? `${style}px` : ' 170px'}`, display: displey }} className={styles.SccessfullyModal}>
            <div>
                <TickCircle size={34} color='green' />
                <p>{texts}</p>
                <CloseSquare size={34} onClick={() => closeModal()} />
            </div>
        </div>
    )
}

