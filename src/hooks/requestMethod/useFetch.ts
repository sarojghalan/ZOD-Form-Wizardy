import React from 'react';
import { QueryKey, useQuery } from '@tanstack/react-query';
import { service } from '../../utils/network';
import { AxiosError } from 'axios';

interface FetchOptions<TParam = Record<string, unknown>> {
  params?: TParam;
  enabled?: boolean;
}

const FETCH_OPTIONS: FetchOptions = {
  enabled: true,
};

export const useFetch = <
  TQueryFnData = unknown,
  TParam = Record<string, unknown>
>(
  queryKey: QueryKey,
  url: string,
  options: FetchOptions<TParam> = {}
) => {
  const { params, ...finalOptions } = {
    ...FETCH_OPTIONS,
    ...options,
  };

  const fetchData = React.useCallback(() => {
    return service
      .get(url, {
        params,
      })
      .then((res) => res.data);
  }, [url, params]);

  const { data, isLoading, error, refetch } = useQuery<
    TQueryFnData,
    AxiosError,
    TQueryFnData,
    QueryKey
  >(queryKey, fetchData, finalOptions);
  return { data, isLoading, error, refetch };
};
