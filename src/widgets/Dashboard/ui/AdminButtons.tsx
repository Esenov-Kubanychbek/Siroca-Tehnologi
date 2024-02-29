import { DashboardButton } from "../../../features/Dashboard";
import { Edit, Home, HomeHashtag, People, Profile2User, ProfileTick, UserAdd, UserEdit } from "iconsax-react";

export const AdminButtons = () => {
   return (
      <div>
         <div>
            <DashboardButton
               src={<Home />}
               name="/clientpage"
            />
            <DashboardButton
               src={<Edit />}
               name="/managercreate"
            />
            <div></div>
         </div>
         <div>
            <DashboardButton
               src={<HomeHashtag />}
               name="/createcompany"
            />
            <DashboardButton
               src={<UserAdd />}
               name="/createuser"
            />
            <DashboardButton
               src={<UserEdit />}
               name="/createposition"
            />
            <div></div>
         </div>
         <div>
            <DashboardButton
               src={<HomeHashtag />}
               name="/companies"
            />
            <DashboardButton
               src={<People />}
               name="/users"
            />
            <DashboardButton
               src={<ProfileTick />}
               name="/positions"
            />
            <DashboardButton
               src={<Profile2User />}
               name="/roles"
            />
            <div></div>
         </div>
      </div>
   );
};
