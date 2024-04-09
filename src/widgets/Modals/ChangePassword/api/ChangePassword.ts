// import create from 'zustand';
// import axios from 'axios';

// interface OperationResult {
//     success: boolean;
//     message: string;
// }

// interface data {
//     changePassword: () => void;
// }

// export const useChangePasswordStore = create((set) => ({
//     // operationResult: {
//         success: false,
//         message: ""
//     } as OperationResult,

//     changePassword:<data> async (oldPassword: string, newPassword1: string, newPassword2: string) => {
//         try {
//             const response = await axios.put(`http://13.60.17.217:80/api/v1/users/change_password/${localStorage.getItem('id')}`, { 
//                 oldPassword: oldPassword,
//                 newPassword1: newPassword1,
//                 newPassword2: newPassword2
//              });

//             set({ operationResult: { success: true, message: "Password changed successfully." } });
//             return response;
//         } catch (error) {
//             console.error(error);
            // set({ operationResult: { success: false, message: "Failed to change password." } });
//         }
//     }
// }));
