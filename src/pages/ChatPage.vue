<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <q-input v-model="prompt" label="Enter your prompt" outlined></q-input>
        <q-btn label="Submit" @click="submitPrompt" />
        <q-card>
          <q-card-section>
            <q-card-title>Response</q-card-title>
            <q-card-main>
              <q-markup>{{ response }} </q-markup>
            </q-card-main>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref, defineComponent } from "vue";
import { functions } from "src/utils/firebaseProxy";
import { httpsCallable } from "firebase/functions";

export default defineComponent({
  name: "ChatPage",
  setup() {
    const prompt = ref("");
    const response = ref("");

    async function submitPrompt() {
      const generatePromptResponse = httpsCallable(
        functions,
        "generatePromptResponse"
      );
      const res = await generatePromptResponse(prompt.value);
      response.value = res.data.choices[0].message.content;
    }

    return {
      prompt,
      response,
      submitPrompt,
    };
  },
});
</script>
