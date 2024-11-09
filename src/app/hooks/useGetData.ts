import useSWR, { SWRResponse } from 'swr';
type GetDataResponse<T> = {
  data: T | undefined;
  error: Error | undefined;
  isLoading: boolean;
  isError: boolean;
  mutate: SWRResponse<T, Error>['mutate'];
};

export default function useGetData<T>(
  url: string,
  key?: string
): GetDataResponse<T> {
  const fetcher = async (url: string): Promise<T> => {
    const response = await fetch(url);
    return response.json();
  };

  const swrKey = key || url;

  const { data, error, isLoading, mutate } = useSWR<T, Error>(swrKey, () =>
    fetcher(url)
  );

  return {
    data,
    error,
    isLoading,
    mutate,
    isError: !!error,
  };
}
