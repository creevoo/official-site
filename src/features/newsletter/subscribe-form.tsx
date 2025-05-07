"use client"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  Button,
  Input,
  toast,
} from "@shared/components"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { newsletterService } from "."

const formSchema = z.object({
  email: z
    .string()
    .email("Opps, your email is look bad")
    .min(2, "Must be at least 2 characters"),
})

export function SubscribeForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await newsletterService.subscribe(values)
    form.reset()
    toast("Subscribed successfully")
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-2 w-full"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Your email address" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">Subscribe now</Button>
      </form>
    </Form>
  )
}
