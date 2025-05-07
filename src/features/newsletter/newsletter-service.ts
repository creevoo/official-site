"use server"

import { loopsAPI } from "@shared/libs/connections"

export async function subscribe(values: { email: string }): Promise<void> {
  const endpoint = "/v1/contacts/create"

  const parsedName = values.email.split("@")[0]
  const payload = {
    email: values.email,
    firstName: parsedName,
    mailingLists: {
      cm624i1n500pk0mjphqxo8ype: true,
    },
  }

  await loopsAPI(endpoint, {
    method: "POST",
    body: payload,
  })
}
