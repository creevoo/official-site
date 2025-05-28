const WAITLIST_BASE_URL = `https://api.getwaitlist.com/api`

type Options = {
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH"
  headers?: HeadersInit
  body?: any
}

export function createConnection(
  baseURL: string,
  defaultOptions: Options = {},
) {
  return async function <T = any>(
    endpoint: string,
    options: Options = {},
  ): Promise<T> {
    const combinedOptions: Options = {
      method: "GET",
      headers: {},
      ...defaultOptions,
      ...options,
    }

    const { method, headers, body } = combinedOptions
    const fetchUrl = `${baseURL}${endpoint}`

    const res = await fetch(fetchUrl, {
      method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...headers,
      },
      body: body ? JSON.stringify(body) : undefined,
    })

    if (!res.ok) {
      console.log(await res.json())
      throw new Error("Error fetching data")
    }

    return await res.json()
  }
}

export const waitlistAPI = createConnection(WAITLIST_BASE_URL, {})
