type Options = RequestInit & {}

export function connectionInstance(
  baseURL: string,
  defaultOptions: Options = {},
) {
  return async function <T = any>(
    endpoint: string,
    options: Options = {},
  ): Promise<T> {
    // merge default options with the provided options
    const parsedBody = JSON.stringify(options.body)
    const config = {
      ...defaultOptions,
      ...options,
      body: parsedBody,
      headers: {
        ...defaultOptions.headers,
        ...options.headers,
      },
    }

    try {
      const response = await fetch(`${baseURL}${endpoint}`, config)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const payload = await response.json()
      return payload as T
    } catch (error) {
      console.error('Fetch error:', error)
      throw error
    }
  }
}
