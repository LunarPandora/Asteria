<script setup>
    import { useRouter } from 'vue-router'

    const router = useRouter()

    function openChat(p){
        router.push({
            name: 'chat',
            params: {
                prompt: p
            }
        })
    }
</script>

<template>
    <div class="flex flex-col w-full h-full p-3 bg-white rounded-xl">
      <div class="flex w-full p-2">
        <p class="text-2xl font-medium text-skyblue">What can I help you with today? ✨</p>
      </div>
      <div class="flex w-full flex-wrap px-2 py-1 gap-2">
        <div class="bg-gradient-to-r from-skyblue via-moonlit to-starlight p-[0.25em] rounded-lg group hover:-translate-y-1 transition-all duration-300 ease-in-out hover:drop-shadow-lg" @click="openChat('Asteria, i need help on my code!')">
          <div class="bg-white group-hover:bg-transparent rounded-sm px-4 py-1 flex gap-1 transition-all duration-300 ease-in-out">
            💻
            <p class="group-hover:text-white bg-gradient-to-r from-skyblue via-moonlit to-starlight text-transparent bg-clip-text font-medium transition-all duration-300 ease-in-out">I need help on my code!</p>
          </div>
        </div>
        <div class="bg-gradient-to-r from-skyblue via-moonlit to-starlight p-[0.25em] rounded-lg group hover:-translate-y-1 transition-all duration-300 ease-in-out hover:drop-shadow-lg" @click="openChat('Hello, Asteria! I need a help on my homework!')">
          <div class="bg-white group-hover:bg-transparent rounded-sm px-4 py-1 flex gap-1 transition-all duration-300 ease-in-out">
            ✍️
            <p class="group-hover:text-white bg-gradient-to-r from-skyblue via-moonlit to-starlight text-transparent bg-clip-text font-medium transition-all duration-300 ease-in-out">Help me on my homework!</p>
          </div>
        </div>
        <div class="bg-gradient-to-r from-skyblue via-moonlit to-starlight p-[0.25em] rounded-lg group hover:-translate-y-1 transition-all duration-300 ease-in-out hover:drop-shadow-lg" @click="openChat('Asteria, help me brainstorm on some ideas!')">
          <div class="bg-white group-hover:bg-transparent rounded-sm px-4 py-1 flex gap-1 transition-all duration-300 ease-in-out">
            🧠
            <p class="group-hover:text-white bg-gradient-to-r from-skyblue via-moonlit to-starlight text-transparent bg-clip-text font-medium transition-all duration-300 ease-in-out">Help me brainstorm on some ideas!</p>
          </div>
        </div>
        <div class="bg-gradient-to-r from-skyblue via-moonlit to-starlight p-[0.25em] rounded-lg group hover:-translate-y-1 transition-all duration-300 ease-in-out hover:drop-shadow-lg" @click="openChat('Hey Asteria, i have something crazy to share!')">
          <div class="bg-white group-hover:bg-transparent rounded-sm px-4 py-1 flex gap-1 transition-all duration-300 ease-in-out">
            😂
            <p class="group-hover:text-white bg-gradient-to-r from-skyblue via-moonlit to-starlight text-transparent bg-clip-text font-medium transition-all duration-300 ease-in-out">Let's just talk about crazy things!</p>
          </div>
        </div>
        <div class="bg-gradient-to-r from-skyblue via-moonlit to-starlight p-[0.25em] rounded-lg group hover:-translate-y-1 transition-all duration-300 ease-in-out hover:drop-shadow-lg" @click="openChat('Yo Asteria, tell me any fun fact about universe!')">
          <div class="bg-white group-hover:bg-transparent rounded-sm px-4 py-1 flex gap-1 transition-all duration-300 ease-in-out">
            🌟
            <p class="group-hover:text-white bg-gradient-to-r from-skyblue via-moonlit to-starlight text-transparent bg-clip-text font-medium transition-all duration-300 ease-in-out">Tell me any fun fact about universe!</p>
          </div>
        </div>
        <div class="bg-gradient-to-r from-skyblue via-moonlit to-starlight p-[0.25em] rounded-lg group hover:-translate-y-1 transition-all duration-300 ease-in-out hover:drop-shadow-lg" @click="openChat('Hey Asteria, do you have time?')">
          <div class="bg-white group-hover:bg-transparent rounded-sm px-4 py-1 flex gap-1 transition-all duration-300 ease-in-out">
            🍵
            <p class="group-hover:text-white bg-gradient-to-r from-skyblue via-moonlit to-starlight text-transparent bg-clip-text font-medium transition-all duration-300 ease-in-out">Let's just have a nice talk!</p>
          </div>
        </div>
        <div class="bg-gradient-to-r from-skyblue via-moonlit to-starlight p-[0.25em] rounded-lg group hover:-translate-y-1 transition-all duration-300 ease-in-out hover:drop-shadow-lg" @click="openChat('Hey Asteria, i need your help on generating something for me!')">
          <div class="bg-white group-hover:bg-transparent rounded-sm px-4 py-1 flex gap-1 transition-all duration-300 ease-in-out">
            🖼️
            <p class="group-hover:text-white bg-gradient-to-r from-skyblue via-moonlit to-starlight text-transparent bg-clip-text font-medium transition-all duration-300 ease-in-out">Generate me something!</p>
          </div>
        </div>
        <div class="bg-gradient-to-r from-skyblue via-moonlit to-starlight p-[0.25em] rounded-lg group hover:-translate-y-1 transition-all duration-300 ease-in-out hover:drop-shadow-lg">
          <div class="bg-white group-hover:bg-transparent rounded-sm px-4 py-1 flex gap-1 transition-all duration-300 ease-in-out">
            🚪
            <p class="group-hover:text-white bg-gradient-to-r from-skyblue via-moonlit to-starlight text-transparent bg-clip-text font-medium transition-all duration-300 ease-in-out">Time to sleep</p>
          </div>
        </div>
      </div>
    </div>
</template>