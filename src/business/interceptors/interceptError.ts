// import { AxiosError } from "axios";

// import { StorageKeys, storageService } from "";
// import { HttpErrors } from "@/utils";

// /* eslint-disable @typescript-eslint/no-explicit-any */
// export const onResponseError = async (error: Error | any): Promise<void> => {
//   if (error?.message === "Network Error") {
//     throw new Error("Sem conexão com a internet, tente novamente mais tarde");
//   }
//   if (error.code === "ECONNABORTED") {
//     throw new AxiosError("Nosso servidor demorou muito tempo para responder, tente novamente mais tarde");
//   }
//   if (error?.response?.status === HttpErrors.UNAUTHORIZED) {
//     storageService.removeItem(StorageKeys.ACESS_TOKEN);
//   }
//   if (error?.response?.status === HttpErrors.BAD_REQUEST || error?.response?.status === HttpErrors.UNSUPPORTED_MEDIA_TYPE) {
//     throw new AxiosError(error?.response?.data?.errors);
//   }

//   if (error?.response?.data?.errors?.length) {
//     throw new AxiosError(error.response.data.errors[0]);
//   }

//   throw error;
// };
