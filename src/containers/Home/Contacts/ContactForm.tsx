'use client'

import { BaseSyntheticEvent, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'

import GCSButton from '@/components/GCSButton'
import GCSInput from '@/components/GCSInput'
import GCSTextarea from '@/components/GCSTextarea'

type ActionCallFormData = {
  email: string
}
export default function Form() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      message: '',
    },
  })

  const onSubmit = async (data: ActionCallFormData, event?: BaseSyntheticEvent) => {
    event?.preventDefault()
    // here you can submit the form
    setIsFormSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-5 flex w-full max-w-md flex-col justify-between">
      <Controller
        name="name"
        control={control}
        rules={{
          required: 'Name is required',
        }}
        render={({ field: { onChange } }) => (
          <GCSInput
            onChange={onChange}
            label="Your Name"
            className="text-xs"
            error={errors.name?.message}
            noBorderTop
          />
        )}
      />
      <Controller
        name="phone"
        control={control}
        rules={{
          required: 'Phone is required',
        }}
        render={({ field: { onChange } }) => (
          <GCSInput
            onChange={onChange}
            label="Your Phone"
            className="text-xs"
            error={errors.phone?.message}
            noBorderTop
          />
        )}
      />
      <Controller
        name="email"
        control={control}
        rules={{
          required: 'Email is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address',
          },
        }}
        render={({ field: { onChange } }) => (
          <GCSInput
            onChange={onChange}
            label="Your E-mail"
            className="text-xs"
            error={errors.email?.message}
            noBorderTop
          />
        )}
      />
      <Controller
        name="message"
        control={control}
        rules={{
          required: 'Message is required',
        }}
        render={({ field: { onChange } }) => (
          <GCSTextarea
            onChange={onChange}
            label="Your Message"
            className="text-xs"
            error={errors.message?.message}
            noBorderTop
          />
        )}
      />
      <GCSButton isWhite className="mt-10 py-4" type="submit">
        {isFormSubmitted ? 'Submitted' : 'Get free estimate today'}
      </GCSButton>
    </form>
  )
}
