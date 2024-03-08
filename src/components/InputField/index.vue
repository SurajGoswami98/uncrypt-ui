<script>
export default {
  props: {
    label: String,
    placeholder: String,
    classes: String,
    type: String
  }
}
</script>
<template>
  <div>
    <label v-if="label" class="block text-white mb-2 capitalize text-sm font-medium">{{
      label
    }}</label>
    <input
      :type="type"
      :placeholder="placeholder"
      :class="[
        'w-full block px-4 py-5 text-white text-xs bg-custom-primary border-0 rounded-sm outline-none placeholder:uppercase  placeholder:text-white  leading-1 focus-visible:!outline-blue-700'
      ]"
    />
  </div>
</template>
