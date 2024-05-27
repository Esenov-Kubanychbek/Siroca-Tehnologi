import styles from "./CompanyDetails.module.scss";
import { Modal } from "antd";
import { ChangeEvent, FC, useEffect, useState } from "react";
import { ButtonCreate, ItemExists } from "@/shared/ui";
import { CreateJobTitle } from "@/widgets/Modals/CreateJobTitle/CreateJobTitle";
import { postUserApi } from "../../api/postUserApi";
import { allCompaniesListApi } from "@/shared/api";
import { inputBorder } from "@/shared/helpers";
import { jobTitleApi } from "@/widgets/Admin/JobTitles/api/jobTitleApi";

export const CompanyDetails: FC = () => {
    const { companyInputState, companyInputChange, companyExists, getAllCompaniesList } = allCompaniesListApi();
    const { postUserState, postUserChange, postUserAdded, jobTitleExists, setJobTitleExist } = postUserApi();
    const { jobTitleList, getJobTitleList } = jobTitleApi();
    const [jobTitleModal, setJobTitleModal] = useState<boolean>(false);
    const jobTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        postUserChange(e), setJobTitleExist(jobTitleList);
    };
    const companyChange = (e: ChangeEvent<HTMLInputElement>) => {
        postUserChange(e), companyInputChange(e);
    };
    useEffect(() => {
        getJobTitleList();
        getAllCompaniesList();
    }, []);
    return (
        <div className={styles.CompanyDetails}>
            <div className={styles.Bottom}>
                <div className={styles.Text}>Компания</div>
                <div className={styles.Input}>
                    <input
                        value={postUserState.main_company}
                        type="text"
                        style={{
                            border: inputBorder(companyInputState, postUserAdded.main_company, companyExists),
                        }}
                        name="main_company"
                        placeholder="Напишите..."
                        onChange={companyChange}
                    />
                    <ItemExists
                        inputState={companyInputState}
                        exists={companyExists}
                        text="Компании с таким названием не существует! Повторите попытку, или создайте новую компанию."
                    />
                </div>
            </div>
            <div className={styles.Bottom}>
                <div className={styles.Text}>Должность в компании</div>
                <div className={styles.AddJobTitle}>
                    <div className={styles.Input}>
                        <input
                            value={postUserState.job_title}
                            name="job_title"
                            style={{
                                border: inputBorder(postUserState.job_title, postUserAdded.job_title, jobTitleExists),
                            }}
                            placeholder="Напишите..."
                            onChange={jobTitleChange}
                        />
                        <ItemExists
                            inputState={postUserState.job_title}
                            exists={jobTitleExists}
                            text="Данной должности не существует! Повторите попытку, или создайте новую должность."
                        />
                    </div>
                    <ButtonCreate onClick={() => setJobTitleModal(true)} />
                </div>
            </div>
            <Modal
                width={700}
                centered
                open={jobTitleModal}
                onCancel={() => setJobTitleModal(false)}
                zIndex={10}
            >
                <CreateJobTitle setModal={setJobTitleModal} />
            </Modal>
        </div>
    );
};
