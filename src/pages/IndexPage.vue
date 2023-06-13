<template>
  <q-page>
    <div class="row justify-center items-center">
      <q-virtual-scroll
        :items="_sortBy(menus)"
        virtual-scroll-horizontal
        v-slot="{ item, index }"
      >
        <div :key="index" class="row items-center">
          <q-item
            :active="selectedMenu?.menu === item"
            clickable
            @click="setMenu(item)"
          >
            <q-item-section>
              <q-item-label>
                {{ item }}
              </q-item-label>
            </q-item-section>
          </q-item>
        </div>
      </q-virtual-scroll>
    </div>
    <div class="row justify-center">
      <div class="col-3 q-px-sm">
        <q-card>
          <q-virtual-scroll
            v-if="selectedMenu"
            :items="selectedMenu.subMenus"
            v-slot="{ item, index }"
          >
            <q-item
              :active="selectedPrompt.title === item.title"
              :key="index"
              clickable
              @click="setPrompt(item)"
            >
              <q-item-section>
                <q-item-label>
                  {{ item.title }}
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-virtual-scroll>
        </q-card>
      </div>
      <div class="col-5">
        <q-card class="q-mb-md">
          <q-card-section>
            <q-card-main>
              <div v-for="(message, index) in conversation" :key="index">
                <div class="q-mb-sm" v-if="message.role === 'assistant'">
                  <strong>Assistant: </strong>{{ message.content }}
                </div>
              </div>
            </q-card-main>
          </q-card-section>
        </q-card>
        <div v-if="selectedPrompt.title && selectedPrompt.inputs.length === 1">
          <q-input
            class="q-mb-sm"
            v-model="input1"
            :placeholder="_startCase(selectedPrompt.inputs[0].keyword)"
            :hint="
              selectedPrompt.inputs[0].hint
                ? `e.g. ${_startCase(selectedPrompt.inputs[0].hint)}`
                : ''
            "
            outlined
            :disable="!selectedPrompt.title"
          ></q-input>
        </div>
        <div v-if="selectedPrompt.title && selectedPrompt.inputs.length === 2">
          <q-input
            class="q-mb-sm"
            v-model="input1"
            :placeholder="_startCase(selectedPrompt.inputs[0].keyword)"
            :hint="
              selectedPrompt.inputs[0].hint
                ? `e.g. ${_startCase(selectedPrompt.inputs[0].hint)}`
                : ''
            "
            outlined
            :disable="!selectedPrompt.title"
          ></q-input>
          <q-input
            class="q-mb-sm"
            v-model="input2"
            :placeholder="_startCase(selectedPrompt.inputs[1].keyword)"
            :hint="
              selectedPrompt.inputs[0].hint
                ? `e.g. ${_startCase(selectedPrompt.inputs[1].hint)}`
                : ''
            "
            outlined
            :disable="!selectedPrompt.title"
          ></q-input>
        </div>
        <div v-if="selectedPrompt.title && selectedPrompt.inputs.length === 3">
          <q-input
            class="q-mb-sm"
            :placeholder="_startCase(selectedPrompt.inputs[0].keyword)"
            :hint="
              selectedPrompt.inputs[0].hint
                ? `e.g. ${_startCase(selectedPrompt.inputs[0].hint)}`
                : ''
            "
            v-model="input1"
            outlined
            :disable="!selectedPrompt.title"
          ></q-input>
          <q-input
            class="q-mb-sm"
            :placeholder="_startCase(selectedPrompt.inputs[1].keyword)"
            :hint="
              selectedPrompt.inputs[0].hint
                ? `e.g. ${_startCase(selectedPrompt.inputs[1].hint)}`
                : ''
            "
            v-model="input2"
            outlined
            :disable="!selectedPrompt.title"
          ></q-input>
          <q-input
            class="q-mb-sm"
            :placeholder="_startCase(selectedPrompt.inputs[2].keyword)"
            :hint="
              selectedPrompt.inputs[0].hint
                ? `e.g. ${_startCase(selectedPrompt.inputs[2].hint)}`
                : ''
            "
            v-model="input3"
            outlined
            :disable="!selectedPrompt.title"
          ></q-input>
        </div>
        <div v-if="selectedPrompt.title && selectedPrompt.inputs.length === 4">
          <q-input
            class="q-mb-sm"
            :placeholder="_startCase(selectedPrompt.inputs[0].keyword)"
            :hint="
              selectedPrompt.inputs[0].hint
                ? `e.g. ${_startCase(selectedPrompt.inputs[0].hint)}`
                : ''
            "
            v-model="input1"
            outlined
            :disable="!selectedPrompt.title"
          ></q-input>
          <q-input
            class="q-mb-sm"
            :placeholder="_startCase(selectedPrompt.inputs[1].keyword)"
            :hint="
              selectedPrompt.inputs[0].hint
                ? `e.g. ${_startCase(selectedPrompt.inputs[1].hint)}`
                : ''
            "
            v-model="input2"
            outlined
            :disable="!selectedPrompt.title"
          ></q-input>
          <q-input
            class="q-mb-sm"
            :placeholder="_startCase(selectedPrompt.inputs[2].keyword)"
            :hint="
              selectedPrompt.inputs[0].hint
                ? `e.g. ${_startCase(selectedPrompt.inputs[2].hint)}`
                : ''
            "
            v-model="input3"
            outlined
            :disable="!selectedPrompt.title"
          ></q-input>
          <q-input
            class="q-mb-sm"
            :placeholder="_startCase(selectedPrompt.inputs[3].keyword)"
            :hint="
              selectedPrompt.inputs[0].hint
                ? `e.g. ${_startCase(selectedPrompt.inputs[3].hint)}`
                : ''
            "
            v-model="input4"
            outlined
            :disable="!selectedPrompt.title"
          ></q-input>
        </div>
        <div v-if="selectedPrompt.title && selectedPrompt.inputs.length === 5">
          <q-input
            class="q-mb-sm"
            :placeholder="_startCase(selectedPrompt.inputs[0].keyword)"
            :hint="
              selectedPrompt.inputs[0].hint
                ? `e.g. ${_startCase(selectedPrompt.inputs[0].hint)}`
                : ''
            "
            v-model="input1"
            outlined
            :disable="!selectedPrompt.title"
          ></q-input>
          <q-input
            class="q-mb-sm"
            :placeholder="_startCase(selectedPrompt.inputs[1].keyword)"
            :hint="
              selectedPrompt.inputs[0].hint
                ? `e.g. ${_startCase(selectedPrompt.inputs[1].hint)}`
                : ''
            "
            v-model="input2"
            outlined
            :disable="!selectedPrompt.title"
          ></q-input>
          <q-input
            class="q-mb-sm"
            :placeholder="_startCase(selectedPrompt.inputs[2].keyword)"
            :hint="
              selectedPrompt.inputs[0].hint
                ? `e.g. ${_startCase(selectedPrompt.inputs[2].hint)}`
                : ''
            "
            v-model="input3"
            outlined
            :disable="!selectedPrompt.title"
          ></q-input>
          <q-input
            class="q-mb-sm"
            :placeholder="_startCase(selectedPrompt.inputs[3].keyword)"
            :hint="
              selectedPrompt.inputs[0].hint
                ? `e.g. ${_startCase(selectedPrompt.inputs[3].hint)}`
                : ''
            "
            v-model="input4"
            outlined
            :disable="!selectedPrompt.title"
          ></q-input>
          <q-input
            class="q-mb-sm"
            :placeholder="_startCase(selectedPrompt.inputs[4].keyword)"
            :hint="
              selectedPrompt.inputs[0].hint
                ? `e.g. ${_startCase(selectedPrompt.inputs[4].hint)}`
                : ''
            "
            v-model="input5"
            outlined
            :disable="!selectedPrompt.title"
          ></q-input>
        </div>
        <q-btn
          :disable="!selectedPrompt.title"
          label="Submit"
          :loading="loading"
          @click="submitPrompt"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import { ref, defineComponent, onMounted, toRaw, onBeforeUnmount } from "vue";
import { functions } from "src/utils/firebaseProxy";
import { httpsCallable } from "firebase/functions";
import { useMenuStore } from "stores/menu";
import { storeToRefs } from "pinia";
import _startCase from "lodash/startCase";
import _sortBy from "lodash/sortBy";

export default defineComponent({
  name: "ChatPage",
  setup() {
    const menuStore = useMenuStore();

    const { menus, subMenus } = storeToRefs(menuStore);

    const { getMenus, getSubMenus, gettingSubMenus } = menuStore;

    const prompt = ref("");
    const input1 = ref("");
    const input2 = ref("");
    const input3 = ref("");
    const input4 = ref("");
    const input5 = ref("");
    const conversation = ref([]);
    const selectedMenu = ref(null);
    const selectedSubMenu = ref(null);
    const selectedPrompt = ref({});
    const loading = ref(false);

    const $q = useQuasar();
    let timer;

    onMounted(() => {
      !menus.value.length && getMenus();

      if (!subMenus.value.length) {
        getSubMenus();

        showLoading();
      }
    });

    onBeforeUnmount(() => {
      if (timer !== void 0) {
        clearTimeout(timer);
        $q.loading.hide();
      }
    });

    function showLoading() {
      $q.loading.show({
        message: "Fetching some data. Hang on...",
      });
      // hiding in 3s
      timer = setTimeout(() => {
        $q.loading.hide();
        timer = void 0;
      }, 3000);
    }

    async function submitPrompt() {
      if (!input1.value) return;

      loading.value = true;
      generatePrompt(selectedPrompt.value.prompt);
      conversation.value.push({ role: "user", content: prompt.value });

      const generatePromptResponse = httpsCallable(
        functions,
        "generatePromptResponse"
      );

      try {
        const res = await generatePromptResponse(prompt.value);
        conversation.value.push({
          role: "assistant",
          content: res.data.choices[0].message.content,
        });
      } catch (e) {
        console.log(e);
      } finally {
        loading.value = false;
      }
    }

    function setMenu(param) {
      selectedPrompt.value = {};
      let subs = subMenus.value.filter((menu) => menu.type == param);
      const menu = menus.value.find((m) => m === param);

      selectedMenu.value = {
        menu,
        subMenus: toRaw(subs),
      };
    }

    function setPrompt(val) {
      console.log(val);
      selectedPrompt.value = val;
      input1.value = "";
      input2.value = "";
      input3.value = "";
      input4.value = "";
      input5.value = "";
    }

    function generatePrompt(val) {
      let formattedPrompt = val;
      selectedPrompt.value.inputs.forEach((input, i) => {
        const pattern = new RegExp(`\\[${input.keyword}\\]`, "g");

        if (i === 0) {
          formattedPrompt = formattedPrompt.replace(pattern, input1.value);
        } else if (i === 1) {
          formattedPrompt = formattedPrompt.replace(pattern, input2.value);
        } else if (i === 2) {
          formattedPrompt = formattedPrompt.replace(pattern, input3.value);
        } else if (i === 3) {
          formattedPrompt = formattedPrompt.replace(pattern, input4.value);
        } else if (i === 4) {
          formattedPrompt = formattedPrompt.replace(pattern, input5.value);
        }
      });

      prompt.value = formattedPrompt;
    }

    return {
      menus,
      prompt,
      input1,
      input2,
      input3,
      input4,
      input5,
      _sortBy,
      loading,
      setMenu,
      subMenus,
      setPrompt,
      _startCase,
      selectedMenu,
      conversation,
      submitPrompt,
      selectedPrompt,
      gettingSubMenus,
      selectedSubMenu,
    };
  },
});
</script>
