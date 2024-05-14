'use client'

import { BaseSyntheticEvent, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'

import GCSButton from '../GCSButton'
import GCSInput from '../GCSInput'

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
      email: '',
    },
  })

  const onSubmit = async (data: ActionCallFormData, event?: BaseSyntheticEvent) => {
    event?.preventDefault()

    // here you can submit the form
    setIsFormSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex  flex-col justify-between gap-y-8">
      <h5 className="text-[28px] font-normal">Be the first to know about our new works, special offers, etc.</h5>
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
          <GCSInput onChange={onChange} label="Your E-mail" className="text-xs" error={errors.email?.message} />
        )}
      />
      <GCSButton isWhite className="py-4" type="submit">
        {isFormSubmitted ? 'Submitted' : 'Get free estimate today'}
      </GCSButton>
    </form>
  )
}
