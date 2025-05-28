"use client"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  Button,
  Input,
  FormMessage,
} from "@shared/components"
import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { newsletterService } from "@features/newsletter"
import { SuccessJoinWaitlistDialog } from "./success-join-waitlist-dialog"

const formSchema = z.object({
  email: z
    .string()
    .min(2, "Must be at least 2 characters")
    .email("Opps, your email is look bad"),
})

export function WaitlistForm() {
  const [isOpenModal, setOpenModal] = React.useState(false)

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
        form.reset()
        setOpenModal(true)
      })
      .catch(() => {
        form.setError("email", { message: "Opps, something bad happen" })
      })
  }

  return (
    <>
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

      <SuccessJoinWaitlistDialog
        open={isOpenModal}
        onOpenChange={setOpenModal}
      />
    </>
  )
}
