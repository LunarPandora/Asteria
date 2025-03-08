<script setup>
    import { ref, onMounted } from 'vue'
    import axios from 'axios';
    import { marked } from 'marked';

    const chatHistory = ref([])
    const onProcess = ref(false)
    const props = defineProps(['prompt'])
    const copied = ref(false)
    const message = ref('')

    onMounted(() => {
        chatHistory.value = []

        sendPrompt(props.prompt)
    })

    async function sendPrompt(p, isRefresh = false, id = 0){
        onProcess.value = true
        message.value = ''

        const url = 'https://openrouter.ai/api/v1/chat/completions'
        const key = import.meta.env.VITE_OPENROUTER_API_KEY
        const role = import.meta.env.VITE_SYSTEM_ROLE

        if(!isRefresh){
            chatHistory.value.push(['user', p])
        }

        try {
            const response = await axios.post(url, {
                model: "deepseek/deepseek-r1:free",
                messages: [
                    { role: "system", content: role },
                    { role: "user", content: p },
                ]
            }, 
            {
                headers: {
                    "Authorization": `Bearer ${key}`,
                    "Content-Type": "application/json",
                },
            })
            .then((res) => {
                if(isRefresh){
                    if(res.data?.choices[0]?.message?.content){
                        chatHistory.value[id][1] = res.data.choices[0].message.content
                        chatHistory.value[id][2] = false
                    }
                    else{
                        chatHistory.value[id][1] = 'Sorry! Asteria is currently offline right now. Try again later!'
                        chatHistory.value[id][2] = true
                    }
                }
                else{
                    if(res.data?.choices[0]?.message?.content){
                        chatHistory.value.push(['bot', res.data.choices[0].message.content, false])
                    }
                    else{
                        chatHistory.value.push(['bot', 'Sorry! Asteria is currently offline right now. Try again later!', true])
                    }
                }  
            })
        } catch (error) {
            console.error("Error fetching AI response:", error);
        } finally {
            onProcess.value = false
        }
    }

    async function copyToClipboard(id){
        await navigator.clipboard.writeText(chatHistory.value[id][1])
        copied.value = true
        setTimeout(() => (copied.value = false), 1500);
    }

</script>

<template>
    <div class="flex flex-col w-full h-full p-3 bg-white rounded-xl gap-2">
        <div class="w-full h-full flex flex-col overflow-y-scroll">
            <TransitionGroup name="list">
                <div v-for="(chat, index) in chatHistory" :key="chat" class="w-fit max-w-[80%] flex flex-col transition-all duration-300 ease-in-out" :class="[chat[0] == 'user' ? 'self-end' : 'self-start']">
                    <p class="text-xs" :class="[chat[0] == 'user' ? 'text-skyblue text-xs self-end pr-1' : 'text-neutron text-xs self-start']">{{ chat[0] == 'user' ? 'You' : 'Asteria' }}</p>
                    <div class="px-3 py-2 rounded-lg text-white" :class="[chat[0] == 'user' ? 'bg-blue-400 rounded-br-none' : 'bg-neutron rounded-bl-none']">
                        <p v-if="chat[0] == 'user'">{{ chat[1] }}</p>
                        <div v-else v-html="marked(chat[1], { sanitize: true })"></div>
                    </div>
                    <div class="pt-1 pb-4 flex gap-2 w-full" :class="[chat[0] == 'user' ? 'justify-start text-blue-400' : 'justify-end text-neutron']">
                        <button class="bg-transparent border-0 outline-0" @click="sendPrompt(chatHistory[index - 1][1], true, index)" v-if="chat[0] != 'user' || chat[2] == false">
                            <fa icon="fas fa-refresh" class="text-sm"></fa>
                        </button>

                        <button class="bg-transparent border-0 outline-0" @click="copyToClipboard(index)">
                            <fa icon="fas fa-copy" class="text-sm"></fa>
                        </button>
                    </div>
                </div>
            </TransitionGroup>
            <Transition name="list">
                <div class="w-fit max-w-[80%] flex flex-col self-start" v-if="onProcess">
                    <p class="text-xs text-neutron self-start">Asteria</p>
                    <div class="px-3 py-2 rounded-lg text-white bg-neutron rounded-bl-none animate-pulse">
                        <fa icon="fas fa-ellipsis" class="text-white text-lg" fixed-width></fa>
                    </div>
                </div>
            </Transition>
        </div>
        <div class="flex flex-col items-center w-full gap-2">
            <span class="bg-nebula flex items-center gap-2 absolute bottom-[14%] z-10 px-3 py-1 text-sm text-blue-500 font-medium rounded-lg transition-all duration-300 ease-in-out" :class="[copied ? 'opacity-100' : 'opacity-0']">
                <fa icon="fas fa-check"></fa>
                Copied!
            </span>

            <div class="bg-pearl p-3 rounded-lg flex items-center gap-3 w-full">
                <textarea :disabled="onProcess" class="w-full h-fit bg-transparent border-0 outline-0 text-sm text-slate-800 resize-none" v-model="message"></textarea>
                <button class="bg-transparent border-0 outline-0" @click="sendPrompt(message)">
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

    .list-enter-active,
    .list-leave-active {
        transition: all 0.5s ease;
    }

    .list-enter-from,
    .list-leave-to {
        opacity: 0;
        transform: translateY(10px);
    }
</style>