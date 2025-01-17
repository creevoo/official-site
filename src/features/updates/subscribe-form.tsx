'use client'

import * as React from 'react'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  Button,
  Input,
} from '@shared/components'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  email: z
    .string()
    .email('Opps, your email is look bad')
    .min(2, 'Must be at least 2 characters'),
})

export function SubscribeForm(): React.ReactElement {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
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
