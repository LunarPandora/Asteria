<script setup>
    import { ref, onMounted } from 'vue'
    import { axios } from 'axios'

    const chatHistory = ref([])
    const props = defineProps(['prompt'])

    // onMounted(() => {
    //     chatHistory.value = []

    //     sendPrompt(props.prompt)
    // })

    // async function sendPrompt(p){
        // const response = await axios.post("")
    // }

</script>

<template>
    <div class="flex flex-col w-full h-full p-3 bg-white rounded-xl gap-2">
        <div class="w-full h-full flex flex-col">
            <div class="w-fit self-end flex flex-col">
                <p class="text-skyblue text-xs self-end pr-1">You</p>
                <div class="px-3 py-2 bg-blue-400 rounded-lg rounded-br-none text-white dialog">
                    <p>My prompt here!</p>
                </div>
            </div>
            <div class="w-fit max-w-[80%] self-start flex flex-col">
                <p class="text-neutron text-xs self-start">Asteria</p>
                <div class="px-3 py-2 bg-neutron rounded-lg rounded-bl-none text-white dialog">
                    <p>Responds prompt here! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim dicta, quibusdam accusamus consectetur aliquid magni asperiores culpa adipisci? Corrupti veniam, adipisci inventore sunt ipsam doloremque. Blanditiis ullam saepe dicta repellendus?</p>
                </div>
            </div>
        </div>
        <div class="w-full">
            <div class="bg-pearl p-3 rounded-lg flex items-center gap-3">
                <textarea class="w-full h-fit bg-transparent border-0 outline-0 text-sm text-slate-800 resize-none"></textarea>
                <button class="bg-transparent border-0 outline-0">
                    <fa icon="fas fa-paper-plane" class="text-skyblue"></fa>
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
    textarea::-webkit-scrollbar {
        display: none; /* Hides scrollbar in WebKit browsers */
    }
</style>