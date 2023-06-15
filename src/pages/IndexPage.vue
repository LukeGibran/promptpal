<template>
  <q-page>
    <div class="row justify-center items-center q-mb-md">
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
              <q-item-label style="font-size: 18px">
                {{ item }}
              </q-item-label>
            </q-item-section>
          </q-item>
        </div>
      </q-virtual-scroll>
    </div>
    <div class="row justify-center">
      <div class="col-2 q-px-sm">
        <q-virtual-scroll
          v-if="selectedMenu"
          :items="selectedMenu.subMenus"
          v-slot="{ item, index }"
          style="max-height: 400px"
        >
          <q-card
            :key="index"
            class="q-mb-sm no-shadow custom-submenu-box"
            :class="selectedPrompt.title === item.title ? 'active' : ''"
            style="border: 1px solid #ccc"
            clickable
            @click="setPrompt(item)"
          >
            <q-card-section>
              <q-card-main>
                <div class="text-body1">{{ item.title }}</div>
              </q-card-main>
            </q-card-section>
          </q-card>
        </q-virtual-scroll>
      </div>
      <div class="col-5">
        <q-card
          class="q-mb-md no-shadow"
          style="min-height: 450px; border: 1px solid #ccc"
        >
          <q-card-section>
            <div class="row justify-between">
              <div class="text-subtitle1">
                <span class="prompt-color">Prompt </span>
                <span class="pal-color">Pal</span>
              </div>
              <q-btn
                :disable="!regenerateVal || loading"
                flat
                rounded
                color="primary"
                icon="refresh"
                size="sm"
                :loading="loadingReg"
                @click="regeneratePrompt()"
              >
                <q-tooltip class="bg-dark">Regenerate</q-tooltip>
              </q-btn>
            </div>
            <q-separator inset />
          </q-card-section>
          <q-card-section>
            <q-card-main>
              <q-virtual-scroll
                ref="scrollRef"
                :items="conversation"
                v-slot="{ item, index }"
                style="max-height: 400px"
              >
                <transition appear enter-active-class="animated fadeInUp">
                  <q-item :key="index" style="padding-left: 0 !important">
                    <q-item-section>
                      <q-chat-message
                        name="PromptPal"
                        avatar="~/assets/logo_initial.png"
                        :text="[`${item.content}`]"
                        text-color="white"
                        :bg-color="index % 2 === 0 ? 'secondary' : 'primary'"
                      >
                      </q-chat-message>
                      <div class="row justify-end">
                        <q-btn
                          flat
                          rounded
                          color="dark"
                          icon="content_copy"
                          size="xs"
                          @click="copyText(item.content)"
                        >
                          <q-tooltip class="bg-dark">Copy Response</q-tooltip>
                        </q-btn>
                      </div>
                    </q-item-section>
                  </q-item>
                </transition>
              </q-virtual-scroll>
            </q-card-main>
          </q-card-section>
        </q-card>
        <q-card
          class="no-shadow"
          v-if="selectedPrompt.title"
          style="border: 1px solid #ccc"
        >
          <q-card-section>
            <q-card-main>
              <div
                v-if="
                  selectedPrompt.title && selectedPrompt.inputs.length === 1
                "
              >
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
              <div
                v-if="
                  selectedPrompt.title && selectedPrompt.inputs.length === 2
                "
              >
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
              <div
                v-if="
                  selectedPrompt.title && selectedPrompt.inputs.length === 3
                "
              >
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
              <div
                v-if="
                  selectedPrompt.title && selectedPrompt.inputs.length === 4
                "
              >
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
                  {{
                  typeWriterText
                  }}
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
              <div
                v-if="
                  selectedPrompt.title && selectedPrompt.inputs.length === 5
                "
              >
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

              <div class="row justify-end">
                <q-btn
                  :disable="!selectedPrompt.title || loadingReg"
                  label="Generate"
                  color="secondary"
                  :loading="loading"
                  @click="submitPrompt"
                />
              </div>
            </q-card-main>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { useQuasar, copyToClipboard } from "quasar";
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
    const loading = ref(false);
    const scrollRef = ref(null);
    const conversation = ref([]);
    const regenerateVal = ref("");
    const loadingReg = ref(false);
    const selectedMenu = ref(null);
    const typeWriterText = ref("");
    const selectedPrompt = ref({});
    const selectedSubMenu = ref(null);

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

      const generatePromptResponse = httpsCallable(
        functions,
        "generatePromptResponse"
      );

      try {
        const res = await generatePromptResponse(prompt.value);
        let date = Date.now();
        conversation.value.push({
          role: "assistant",
          content: "",
          date,
        });
        startTypewriter(res.data.choices[0].message.content, date);
        scrollRef.value.scrollTo(conversation.value.length, "start-force");
      } catch (e) {
        console.log(e);
      } finally {
        regenerateVal.value = prompt.value;
        prompt.value = "";
        loading.value = false;
      }
    }

    async function regeneratePrompt() {
      loadingReg.value = true;
      const generatePromptResponse = httpsCallable(
        functions,
        "generatePromptResponse"
      );

      try {
        const res = await generatePromptResponse(regenerateVal.value);
        let date = Date.now();
        conversation.value.push({
          role: "assistant",
          content: "",
          date,
        });
        startTypewriter(res.data.choices[0].message.content, date);
        scrollRef.value.scrollTo(conversation.value.length, "start-force");
      } catch (e) {
        console.log(e);
      } finally {
        loadingReg.value = false;
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

    function startTypewriter(text, d) {
      let i = 0;
      let currentConvo = conversation.value.find((c) => c.date === d);
      setTimeout(() => {
        const type = () => {
          if (i < text.length) {
            // if (i % 100 === 0)
            // scrollRef.value.scrollTo(conversation.value.length, "start-force");
            currentConvo.content += text.charAt(i);
            i++;
            setTimeout(type, 15);
          }
        };

        type();
      }, 450);
    }

    async function copyText(text) {
      try {
        await copyToClipboard(text);
        $q.notify({
          message: "Text successfully copied!",
          color: "positive",
          position: "top-right",
        });
      } catch (error) {
        $q.notify({
          message: "Something went wrong. Please try again",
          color: "negative",
          position: "top-right",
        });
      }
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
      copyText,
      scrollRef,
      setPrompt,
      loadingReg,
      _startCase,
      selectedMenu,
      conversation,
      submitPrompt,
      regenerateVal,
      typeWriterText,
      selectedPrompt,
      gettingSubMenus,
      selectedSubMenu,
      regeneratePrompt,
    };
  },
});
</script>
