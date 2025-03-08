<script setup>
  import { useRoute } from 'vue-router'
  import { watch, ref } from 'vue'

  const route = useRoute()
  const isChatMode = ref(false)

  watch(() => route.path, (newPath) => {
    if(route.name == 'chat'){
      isChatMode.value = true
    }
    else{
      isChatMode.value = false
    }

    console.log(isChatMode.value)
  })
</script>

<template>
  <div class="flex flex-col gap-3 items-center justify-center w-full h-[100vh] bg-nebula p-5">
    <div class="flex w-full h-[30vh] bg-white rounded-xl overflow-hidden items-center">
      <div class="flex flex-col w-full p-5">
        <p class="title text-3xl font-semibold text-skyblue">
          Hello, I'm 
          <span class="bg-gradient-to-tl from-skyblue via-moonlit to-nebula bg-clip-text text-transparent">Asteria!</span>
        </p>

        <p class="text-skyblue text-sm font-medium">Status: Online</p>
      </div>
      
      <div class="overflow-hidden h-full flex justify-end items-start pr-3">
        <img src="@/assets/bot/normal.png" class="w-[40%] transition-all duration-500 ease-in-out" :class="[isChatMode ? 'opacity-100' : 'opacity-0']">
      </div>
    </div>
    
    <div class="h-[70vh] w-full">
      <RouterView></RouterView>
    </div>

    <img src="@/assets/bot/normal.png" class="absolute right-0 w-1/4 transition-all duration-500 ease-in" :class="[isChatMode ? '-bottom-[15em]' : 'bottom-0']">
  </div>
</template>
