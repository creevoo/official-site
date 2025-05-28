import { waitlistAPI } from "@shared/libs"

export async function subscribe(values: { email: string }): Promise<void> {
  const endpoint = "/v1/signup"

  const parsedName = values.email.split("@")[0]
  const payload = {
    email: values.email,
    firstName: parsedName,
    waitlist_id: 28810,
  }

  await waitlistAPI(endpoint, {
    method: "POST",
    body: payload,
  })
}
