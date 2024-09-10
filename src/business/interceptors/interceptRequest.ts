// import { AxiosRequestConfig } from "axios";

// import { storageService, StorageKeys } from ""; // non existent at the moment

// type CustomRequest = {
//   authorization?: string;
// };

// export const interceptRequest = async (config: AxiosRequestConfig): Promise<AxiosRequestConfig & CustomRequest> => {
//   const token = storageService.getItem(StorageKeys.ACESS_TOKEN);

//   if (!token) {
//     return config;
//   }
//   return {
//     ...config,
//     headers: {
//       ...config.headers,
//       Authorization: "Bearer " + token,
//     },
//   };
// };
