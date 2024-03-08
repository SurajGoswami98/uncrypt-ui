<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  components: { VueperSlides, VueperSlide },
  data: () => ({
    slides: [
      {
        title: 'Slide #1',
        content: 'Slide 1 content.'
      },
      {
        title: 'Slide #2',
        content: 'Mintu.'
      }
    ]
  })
}
</script>
<template>
  <vueper-slides>
    <vueper-slide
      v-for="(slide, i) in slides"
      :key="i"
      :title="slide.title"
      :content="slide.content"
      :class="'bg-red'"
    >
    </vueper-slide>
  </vueper-slides>
</template>
