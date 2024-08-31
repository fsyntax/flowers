<template>
  <Header />
  <UContainer>
    <UPageError
      status-code="404"
      title="Page not found" description="The page you are looking for does not exist."
      :ui="{
        name: 'font-glory',
      }"
    />
  </UContainer>
</template>
