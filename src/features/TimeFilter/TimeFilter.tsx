import { TabsProps } from "antd";
import { RequestList } from "../../widgets";
import { ConfigProvider, Tabs } from "antd";
import { FC, useEffect } from "react";
import { getRequestApi } from "../../widgets/RequestList/api/getRequestApi";

export const TimeFilter: FC<{ role: string }> = ({ role }) => {
    const fetchRequest = getRequestApi();
    useEffect(() => {
        fetchRequest.getting();
    }, []);
    const items: TabsProps["items"] = [
        {
            key: "1",
            label: "Всё время",
            children: (
                <RequestList
                    role={role}
                    api={fetchRequest.getState}
                />
            ),
        },
        {
            key: "2",
            label: "Неделя",
            children: (
                <RequestList
                    role={role}
                    api={fetchRequest.getState}
                />
            ),
        },
        {
            key: "3",
            label: "Месяц",
            children: (
                <RequestList
                    role={role}
                    api={fetchRequest.getState}
                />
            ),
        },
    ];
    return (
        <ConfigProvider
            theme={{
                components: {
                    Tabs: {
                        inkBarColor: "#1C6AD2",
                        itemColor: "#252525",
                        itemHoverColor: "#1C6AD2",
                        itemSelectedColor: "#1C6AB1",
                        fontFamily: "Geologica",
                        fontSize: 20,
                    },
                },
            }}
        >
            <Tabs
                defaultActiveKey="1"
                items={items}
                tabBarStyle={{
                    padding: "24px",
                    width: "1764px",
                    fontWeight: 700,
                    backgroundColor: "white",
                }}
            />
        </ConfigProvider>
    );
};
