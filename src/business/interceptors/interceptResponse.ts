import { AxiosError, AxiosResponse } from "axios";

export const interceptResponse = async (response: AxiosResponse | any): Promise<AxiosResponse> => {
  if (response.data?.errors && response.data?.errors.length) {
    throw new AxiosError(response.data?.errors[0]);
  }
  return response;
};
