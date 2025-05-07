"use client"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  Button,
  Input,
  toast,
  FormMessage,
} from "@shared/components"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { newsletterService } from "@features/newsletter"

const formSchema = z.object({
  email: z
    .string()
    .min(2, "Must be at least 2 characters")
    .email("Opps, your email is look bad"),
})

export function WaitlistForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await newsletterService
      .subscribe(values)
      .then(() => {
        toast("Subscribed successfully")
        form.reset()
      })
      .catch(() => {
        form.setError("email", { message: "Opps, something bad happen" })
        toast("Opps, something error")
      })
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col tablet:flex-row gap-2 w-full"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex flex-col grow">
              <FormControl>
                <Input placeholder="Your email address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">
          Join waiting list
          <i className="fi fi-br-paper-plane" />
        </Button>
      </form>
    </Form>
  )
}
