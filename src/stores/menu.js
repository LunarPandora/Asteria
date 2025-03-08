import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', () => {
  const isChatMode = ref(false)
  function toggleChatMode(){
    isChatMode.value = !isChatMode.value
  }

  return { isChatMode, toggleChatMode }
})
