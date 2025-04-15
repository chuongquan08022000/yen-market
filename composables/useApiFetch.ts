export const useApiFetch = <T>(url: string, options = {}) => {
  const config = useRuntimeConfig()

  const apiUrl = config.public.apiBaseUrl // Fallback if not set in .env

  return useFetch<T>(`${apiUrl}${url}`, {
    key: url, // Cache by the URL
    headers: useRequestHeaders(['cookie']),
    ...options,
  })
}
