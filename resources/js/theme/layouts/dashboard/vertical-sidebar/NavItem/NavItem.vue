<script setup>
import { ref, onMounted } from 'vue'
import SvgSprite from '../../../../components/shared/SvgSprite.vue'

const props = defineProps({
  item: Object,
  level: Number
})

const relativeURL = ref('')

onMounted(() => {
  relativeURL.value = import.meta.env.BASE_URL || '/'
})
</script>

<template>
  <!-- ================= Single Item ================= -->

  <!-- con URL relativa -->
  <v-list-item
    v-if="props.item.getURL === true"
    :to="item.type === 'external' ? '' : item.to"
    :href="`${relativeURL}${item.to}`"
    rounded
    color="primary"
    :disabled="item.disabled"
    :target="item.type === 'external' ? '_blank' : ''"
  >
    <template #prepend>
      <SvgSprite :name="props.item.icon || ''" :level="props.level" />
    </template>

    <v-list-item-title>
      {{ item.title }}
    </v-list-item-title>

    <v-list-item-subtitle
      v-if="item.subCaption"
      class="text-caption mt-0 hide-menu"
    >
      {{ item.subCaption }}
    </v-list-item-subtitle>

    <template #append v-if="item.chip">
      <v-chip
        :color="item.chipColor"
        size="small"
        :variant="item.chipVariant"
        :prepend-icon="item.chipIcon"
      >
        {{ item.chip }}
      </v-chip>
    </template>
  </v-list-item>


  <!-- normal -->
  <v-list-item
    v-else
    :to="item.type === 'external' ? '' : item.to"
    :href="item.type === 'external' ? item.to : ''"
    rounded
    color="primary"
    :disabled="item.disabled"
    :target="item.type === 'external' ? '_blank' : ''"
  >
    <template #prepend>
      <SvgSprite :name="props.item.icon || ''" :level="props.level" />
    </template>

    <v-list-item-title>
      {{ item.title }}
    </v-list-item-title>

    <v-list-item-subtitle
      v-if="item.subCaption"
      class="text-caption mt-0 hide-menu"
    >
      {{ item.subCaption }}
    </v-list-item-subtitle>

    <template #append v-if="item.chip">
      <v-chip
        :color="item.chipColor"
        size="small"
        :variant="item.chipVariant"
        :prepend-icon="item.chipIcon"
      >
        {{ item.chip }}
      </v-chip>
    </template>
  </v-list-item>
</template>
