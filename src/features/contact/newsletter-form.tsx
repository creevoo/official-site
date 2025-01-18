'use client'

import * as React from 'react'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  Button,
  Input,
  toast,
} from '@shared/components'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { newsletterService } from '@features/newsletter'

const formSchema = z.object({
  email: z
    .string()
    .email('Opps, your email is look bad')
    .min(2, 'Must be at least 2 characters'),
})

export function NewsletterForm(): React.ReactElement {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await newsletterService.subscribe(values)
    toast('Subscribed successfully')
    form.reset()
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col tablet:flex-row gap-3"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="tablet:w-[300px]">
              <FormControl>
                <Input placeholder="Your email address" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="transition-all duration-300 hover:translate-x-1"
        >
          Subscribe now
        </Button>
      </form>
    </Form>
  )
}
