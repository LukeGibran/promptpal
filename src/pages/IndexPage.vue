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
          class="q-pr-sm"
          style="max-height: 450px"
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
                <div style="font-size: 18px">
                  {{ item.title }}
                </div>
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
                v-if="hasCredits"
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
                        :text-html="true"
                        text-color="white"
                        :bg-color="index % 2 === 0 ? 'secondary' : 'primary'"
                        id="chat-messages"
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
        <transition
          enter-active-class="animated fadeInDown"
          leave-active-class="animated fadeOut"
        >
          <q-card
            class="no-shadow q-mb-md"
            v-if="selectedPrompt.title && !hasCredits"
            style="border: 1px solid #ccc"
          >
            <q-card-section>
              <q-card-main>
                <q-banner
                  v-if="user.data && user.loggedIn"
                  inline-actions
                  rounded
                  class="bg-red text-white"
                >
                  You've used up all your credits! You can buy more at our
                  subscription page
                  <template v-slot:action>
                    <q-btn flat label="Go to Subscription" to="" />
                  </template>
                </q-banner>

                <q-banner
                  v-else
                  inline-actions
                  rounded
                  class="bg-red text-white"
                >
                  Oh no! You've used up your free credits! You can have 3 more
                  if you signup or login to your account!
                  <template v-slot:action>
                    <q-btn flat label="Login" to="login" />
                    <q-btn flat label="Signup" to="register" />
                  </template>
                </q-banner>
              </q-card-main>
            </q-card-section>
          </q-card>
        </transition>
        <transition
          appear
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOutDown"
        >
          <q-card
            class="no-shadow q-mb-md"
            v-if="selectedPrompt.title && hasCredits"
            style="border: 1px solid #ccc"
          >
            <q-card-section class="q-pa-none">
              <q-scroll-area
                style="min-height: 150px; max-height: 400px"
                :style="setHeight(selectedPrompt.inputs.length)"
                :thumb-style="thumbStyle"
                :bar-style="barStyle"
                class="q-pa-md"
              >
                <q-card-main v-if="hasCredits">
                  <div
                    v-if="
                      selectedPrompt.title && selectedPrompt.inputs.length === 1
                    "
                  >
                    <q-input
                      class="q-mb-sm"
                      v-model="input1"
                      :placeholder="
                        _startCase(selectedPrompt.inputs[0].keyword)
                      "
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
                      :placeholder="
                        _startCase(selectedPrompt.inputs[0].keyword)
                      "
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
                      :placeholder="
                        _startCase(selectedPrompt.inputs[1].keyword)
                      "
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
                      :placeholder="
                        _startCase(selectedPrompt.inputs[0].keyword)
                      "
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
                      :placeholder="
                        _startCase(selectedPrompt.inputs[1].keyword)
                      "
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
                      :placeholder="
                        _startCase(selectedPrompt.inputs[2].keyword)
                      "
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
                      :placeholder="
                        _startCase(selectedPrompt.inputs[0].keyword)
                      "
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
                      :placeholder="
                        _startCase(selectedPrompt.inputs[1].keyword)
                      "
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
                      :placeholder="
                        _startCase(selectedPrompt.inputs[2].keyword)
                      "
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
                      :placeholder="
                        _startCase(selectedPrompt.inputs[3].keyword)
                      "
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
                      :placeholder="
                        _startCase(selectedPrompt.inputs[0].keyword)
                      "
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
                      :placeholder="
                        _startCase(selectedPrompt.inputs[1].keyword)
                      "
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
                      :placeholder="
                        _startCase(selectedPrompt.inputs[2].keyword)
                      "
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
                      :placeholder="
                        _startCase(selectedPrompt.inputs[3].keyword)
                      "
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
                      :placeholder="
                        _startCase(selectedPrompt.inputs[4].keyword)
                      "
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
              </q-scroll-area>
            </q-card-section>
          </q-card>
        </transition>
      </div>
    </div>
  </q-page>
</template>

<script>
import { useQuasar, copyToClipboard, LocalStorage } from "quasar";
import { ref, defineComponent, onMounted, toRaw, computed } from "vue";
import { functions } from "src/utils/firebaseProxy";
import { httpsCallable } from "firebase/functions";
import { useMenuStore } from "stores/menu";
import { useUserStore } from "stores/user";
import { storeToRefs } from "pinia";
import _startCase from "lodash/startCase";
import _sortBy from "lodash/sortBy";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "ChatPage",
  setup() {
    const router = useRouter();
    const menuStore = useMenuStore();
    const { menus, subMenus } = storeToRefs(menuStore);
    const { getMenus, getSubMenus, gettingSubMenus } = menuStore;

    const userStore = useUserStore();
    const { user, freeCredits } = storeToRefs(userStore);
    const { updateFreeCredits, updateCredits } = userStore;

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

    onMounted(() => {
      !menus.value.length && getMenus();

      if (!subMenus.value.length) {
        getSubMenus();
      }
    });

    const hasCredits = computed(() => {
      if (user.value.data && user.value.loggedIn) {
        return !!user.value.data.credits;
      }

      return !!freeCredits.value;
    });

    function setHeight(inputsLength) {
      if (inputsLength == 1) return { height: "155px " };
      else if (inputsLength == 2) return { height: "250px " };
      else return { height: "330px" };
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
        const res = await generatePromptResponse(`${prompt.value}`);
        let date = Date.now();
        conversation.value.push({
          role: "assistant",
          content: res.data,
          date,
        });
        // startTypewriter(, date);
        setTimeout(() => {
          scrollRef.value.scrollTo(conversation.value.length - 1, "smooth");
        }, 400);

        checkCredit();
      } catch (e) {
        console.log(e);
        $q.notify({
          message: "Something went wrong. Please try again",
          color: "negative",
          position: "top-right",
        });
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
        const res = await generatePromptResponse(`${regenerateVal.value}`);
        let date = Date.now();
        conversation.value.push({
          role: "assistant",
          content: res.data,
          date,
        });
        // startTypewriter(, date);
        setTimeout(() => {
          scrollRef.value.scrollTo(conversation.value.length - 1, "smooth");
        }, 400);

        checkCredit();
      } catch (e) {
        console.log(e);
        $q.notify({
          message: "Something went wrong. Please try again",
          color: "negative",
          position: "top-right",
        });
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
        let t;
        const type = () => {
          if (i < text.length) {
            // if (i % 100 === 0)
            //   scrollRef.value.scrollTo(conversation.value.length - 1, "smooth");
            currentConvo.content += text.charAt(i);
            i++;
            t = setTimeout(type, 10);
          }
        };

        type();
        if (i == text.length) clearTimeout(t);
      }, 450);
    }

    async function copyText(text) {
      try {
        const removeHTMLTags = text.replace(/<\/?[^>]+>/gi, "");

        await copyToClipboard(removeHTMLTags);
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

    async function checkCredit() {
      if (user.value.data && user.value.loggedIn) {
        if (user.value.data.credits === -1) return;

        if (user.value.data.credits) updateCredits(user.value.data.credits - 1);
      } else {
        if (freeCredits.value) updateFreeCredits(freeCredits.value - 1);
      }
    }

    return {
      user,
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
      setHeight,
      hasCredits,
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

      thumbStyle: {
        right: "4px",
        borderRadius: "7px",
        backgroundColor: "#e7e5b7",
        width: "4px",
        opacity: 0.75,
      },

      barStyle: {
        right: "2px",
        borderRadius: "9px",
        backgroundColor: "transparent",
        width: "8px",
        opacity: 0.2,
      },
    };
  },
});
</script>
