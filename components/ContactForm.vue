<script setup lang="ts">
import { type InferType, object, string } from 'yup'
import type { FormSubmitEvent } from '#ui/types'

const schema = object({
  name: string().required('Name wird benötigt'),
  email: string().email('Invalid email').required('Email wird benötigt'),
  // phone: string().matches(/^\d{10}$/, 'Nummer muss 10 Ziffern haben'),
  message: string().required('Nachricht wird benötigt'),
})

type Schema = InferType<typeof schema>

const state = reactive({
  name: undefined,
  email: undefined,
  phone: undefined,
  message: undefined,
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Handle form submission
  console.log(event.data)
  // You would typically send this data to a server or API
}
</script>

<template>
  <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
    <UFormGroup label="Dein Name" name="name" required>
      <UInput v-model="state.name" placeholder="Dein Name" />
    </UFormGroup>

    <UFormGroup label="Email" name="email" required>
      <UInput v-model="state.email" type="email" placeholder="deine@email.com" />
    </UFormGroup>

    <UFormGroup label="Telefon" name="phone">
      <UInput v-model="state.phone" type="tel" placeholder="1234567890" />
    </UFormGroup>

    <UFormGroup label="Deine Nachricht" required name="message">
      <UTextarea v-model="state.message" placeholder="Deine Nachricht bzw. Anfrage" />
    </UFormGroup>

    <UButton type="submit" color="primary" variant="solid" size="lg">
      Nachricht senden
    </UButton>
  </UForm>
</template>
