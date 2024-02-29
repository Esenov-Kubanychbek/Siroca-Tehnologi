import { Edit, Home } from "iconsax-react";
import { DashboardButton } from "../../../features/Dashboard";

export const ManagerButtons = () => {
   return (
      <div>
         <DashboardButton
            src={<Home />}
            name="/clientpage"
         />
         <DashboardButton
            src={<Edit />}
            name="/managercreate"
         />
      </div>
   );
};
