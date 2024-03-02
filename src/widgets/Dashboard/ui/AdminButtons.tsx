import { DashboardButton } from "../../../features/Dashboard";
import { AddSquare, Edit, Home, HomeHashtag, People, Profile2User, ProfileTick, UserAdd, UserEdit } from "iconsax-react";

export const AdminButtons = () => {
   return (
      <div>
         <div>
            <DashboardButton
               name="/clientpage"
            ><Home /></DashboardButton>
            <DashboardButton
               name="/managercreate"
            ><Edit /></DashboardButton>
            <div></div>
         </div>
         <div>
            <DashboardButton
               name="/createcompany"
            ><AddSquare /></DashboardButton>
            <DashboardButton
               name="/createuser"
            ><UserAdd/></DashboardButton>
            <DashboardButton
               name="/createposition"
            ><UserEdit/></DashboardButton>
            <div></div>
         </div>
         <div>
            <DashboardButton
               name="/companies"
            ><HomeHashtag/></DashboardButton>
            <DashboardButton
               name="/users"
            ><People/></DashboardButton>
            <DashboardButton
               name="/positions"
            ><ProfileTick/></DashboardButton>
            <DashboardButton
               name="/roles"
            ><Profile2User/></DashboardButton>
            <div></div>
         </div>
      </div>
   );
};
