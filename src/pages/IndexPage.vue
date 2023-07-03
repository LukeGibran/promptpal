<template>
  <q-page>
    <!-- <div class="row justify-center items-center gt-sm q-mb-lg menu">
      <div class="col-xs-12 col-md-8 col-lg-7">
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
    </div> -->
    <!-- MOBILE VIEW -->
    <div class="row justify-center q-mb-sm lt-md menu">
      <div class="col-xs-12 col-md-8 col-lg-7 q-mb-sm q-px-md">
        <q-list bordered class="bg-white">
          <q-expansion-item
            expand-separator
            label="Menu"
            :caption="
              selectedMenu?.menu ? `${selectedMenu.menu}` : 'Choose a menu'
            "
          >
            <q-separator />
            <q-virtual-scroll
              :items="_sortBy(menus)"
              v-slot="{ item, index }"
              style="max-height: 200px"
            >
              <div :key="index" class="q-px-sm">
                <q-item
                  :active="selectedMenu?.menu === item"
                  clickable
                  @click="setMenu(item)"
                >
                  <q-item-section>
                    <q-item-label style="font-size: 14px">
                      {{ item }}
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </div>
            </q-virtual-scroll>
          </q-expansion-item>
          <q-expansion-item
            expand-separator
            label="Sub topic"
            :caption="
              selectedPrompt?.title
                ? selectedPrompt.title
                : 'Choose a sub topic'
            "
            v-if="selectedMenu?.subMenus"
          >
            <q-separator />
            <q-virtual-scroll
              :items="selectedMenu?.subMenus"
              v-slot="{ item, index }"
              style="max-height: 200px"
            >
              <div :key="index" class="q-px-sm">
                <q-item
                  :active="selectedPrompt?.title === item.title"
                  clickable
                  @click="setPrompt(item)"
                >
                  <q-item-section>
                    <q-item-label style="font-size: 14px">
                      {{ item.title }}
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </div>
            </q-virtual-scroll>
            <!-- <q-virtual-scroll
              v-if="selectedMenu"
              :items="selectedMenu.subMenus"
              v-slot="{ item, index }"
              style="max-height: 250px"
            >
              <q-card
                :key="index"
                class="q-mb-sm no-shadow custom-submenu-box q-mr-sm"
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
            </q-virtual-scroll> -->
          </q-expansion-item>
        </q-list>
      </div>
    </div>
    <!-- END MOBILE VIEW -->
    <div class="row justify-center">
      <div class="col-md-3 col-lg-2 q-px-sm gt-sm">
        <!-- <div class="text-body1 q-mb-sm" v-if="selectedMenu">
          Menu:
          <span class="credit-border text-positive active blue">{{
            selectedMenu?.menu
          }}</span>
        </div> -->
        <q-list class="q-mb-sm bg-white" bordered style="border-radius: 4px">
          <q-expansion-item
            expand-separator
            label="Menu"
            :caption="
              selectedMenu?.menu ? `${selectedMenu.menu}` : 'Choose a menu'
            "
          >
            <q-virtual-scroll
              :items="_sortBy(menus)"
              v-slot="{ item, index }"
              style="max-height: 300px"
            >
              <div :key="index" class="q-px-sm">
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
                <q-separator v-if="index + 1 != menus.length" />
              </div>
            </q-virtual-scroll>
          </q-expansion-item>
        </q-list>

        <q-list
          bordered
          class="bg-white"
          style="border-radius: 4px"
          v-if="selectedMenu?.subMenus"
        >
          <q-expansion-item
            expand-separator
            label="Sub topic"
            :caption="
              selectedPrompt?.title
                ? selectedPrompt.title
                : 'Choose a sub topic'
            "
          >
            <q-virtual-scroll
              :items="selectedMenu?.subMenus"
              v-slot="{ item, index }"
              style="max-height: 400px"
            >
              <div :key="index" class="q-px-sm">
                <q-item
                  :active="selectedPrompt?.title === item.title"
                  clickable
                  @click="setPrompt(item)"
                >
                  <q-item-section>
                    <q-item-label style="font-size: 18px">
                      {{ item.title }}
                    </q-item-label>
                  </q-item-section>
                </q-item>
                <q-separator v-if="index + 1 != selectedMenu.subMenus.length" />
              </div>
            </q-virtual-scroll>
            <!-- <q-virtual-scroll
              v-if="selectedMenu"
              :items="selectedMenu.subMenus"
              v-slot="{ item, index }"
              class="q-px-sm"
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
            </q-virtual-scroll> -->
          </q-expansion-item>
        </q-list>
      </div>
      <div class="col-xs-11 col-sm-12 col-md-8 col-lg-5">
        <div
          class="content custom-border q-mb-md"
          :class="conversation.length && 'active'"
        >
          <q-card class="q-mb-sm no-shadow" style="min-height: 450px">
            <q-card-section>
              <div class="row justify-between">
                <div class="text-subtitle1">
                  <span class="prompt-color">Prompt </span>
                  <span class="pal-color">Pal</span>
                </div>
                <div v-show="regenerateVal" class="row items-center">
                  <div class="text-caption">Not happy? Try again</div>
                  <q-btn
                    :disable="!regenerateVal || loading"
                    flat
                    rounded
                    color="primary"
                    icon="refresh"
                    size="sm"
                    v-if="checkActive"
                    :loading="loadingReg"
                    @click="regeneratePrompt()"
                  >
                    <q-tooltip class="bg-dark">Regenerate</q-tooltip>
                  </q-btn>
                </div>
              </div>
              <q-separator inset />
            </q-card-section>
            <q-card-section>
              <q-card-main>
                <q-virtual-scroll
                  ref="scrollRef"
                  :items="conversation"
                  v-slot="{ item, index }"
                  style="max-height: 350px"
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
        </div>
        <transition
          enter-active-class="animated fadeInDown"
          leave-active-class="animated fadeOut"
        >
          <q-card
            class="no-shadow q-mb-md custom-border"
            v-if="selectedPrompt.title && !checkActive"
          >
            <q-card-section>
              <q-card-main>
                <q-banner
                  v-if="user.data && user.loggedIn"
                  rounded
                  dense
                  class="bg-red text-white"
                >
                  You have no credits, you can select a new plan at our
                  subscrition page
                  <template v-slot:action>
                    <q-btn flat label="Go to Subscription" to="subscription" />
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
            class="no-shadow q-mb-md q-pa-md custom-border"
            v-if="selectedPrompt.title && checkActive"
          >
            <q-card-section class="q-pa-none">
              <q-card-main v-if="checkActive">
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
                        ? `e.g. ${selectedPrompt.inputs[0].hint}`
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
                        ? `e.g. ${selectedPrompt.inputs[0].hint}`
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
                        ? `e.g. ${selectedPrompt.inputs[1].hint}`
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
                        ? `e.g. ${selectedPrompt.inputs[0].hint}`
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
                        ? `e.g. ${selectedPrompt.inputs[1].hint}`
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
                        ? `e.g. ${selectedPrompt.inputs[2].hint}`
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
                        ? `e.g. ${selectedPrompt.inputs[0].hint}`
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
                        ? `e.g. ${selectedPrompt.inputs[1].hint}`
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
                        ? `e.g. ${selectedPrompt.inputs[2].hint}`
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
                        ? `e.g. ${selectedPrompt.inputs[3].hint}`
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
                        ? `e.g. ${selectedPrompt.inputs[0].hint}`
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
                        ? `e.g. ${selectedPrompt.inputs[1].hint}`
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
                        ? `e.g. ${selectedPrompt.inputs[2].hint}`
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
                        ? `e.g. ${selectedPrompt.inputs[3].hint}`
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
                        ? `e.g. ${selectedPrompt.inputs[4].hint}`
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
        </transition>
      </div>
    </div>

    <q-dialog v-model="suggestionPrompt" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Suggest a prompt</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input
            type="textarea"
            outlined
            dense
            v-model="suggestion"
            autofocus
            @keyup.enter="suggestionPrompt = false"
          />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn color="grey-8" flat label="Close" v-close-popup />
          <q-btn
            :loading="addingSuggestion"
            :disable="!suggestion"
            color="secondary"
            flat
            label="Suggest"
            @click="suggest"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-page-sticky class="gt-sm" position="bottom-right" :offset="[70, 20]">
      <q-fab
        color="yellow-9"
        icon="info"
        glossy
        hide-icon
        direction="up"
        label="Suggest a Prompt"
        padding="sm"
        @click="suggestionPrompt = true"
      />
    </q-page-sticky>
    <q-page-sticky class="lt-md" position="bottom-left" :offset="[10, 10]">
      <q-fab
        color="yellow-9"
        icon="keyboard_arrow_right"
        direction="right"
        padding="xs"
        glossy
      >
        <q-fab-action
          label="Suggest a prompt"
          @click="suggestionPrompt = true"
          color="blue-9"
          icon="info"
        />
      </q-fab>
    </q-page-sticky>
  </q-page>
</template>

<script>
import { useQuasar, copyToClipboard, LocalStorage } from "quasar";
import { ref, defineComponent, onMounted, toRaw, computed } from "vue";
import { functions } from "src/utils/firebaseProxy";
import { httpsCallable } from "firebase/functions";
import { useMenuStore } from "stores/menu";
import { useUserStore } from "stores/user";
import { useSubStore } from "stores/subscription";
import { storeToRefs } from "pinia";
import _startCase from "lodash/startCase";
import _sortBy from "lodash/sortBy";
import { useRouter } from "vue-router";
import { api } from "boot/axios";
import { marked } from "marked";

export default defineComponent({
  name: "ChatPage",
  setup() {
    const router = useRouter();
    const menuStore = useMenuStore();
    const { menus, subMenus, addingSuggestion } = storeToRefs(menuStore);
    const { getMenus, getSubMenus, gettingSubMenus, addSuggestion } = menuStore;

    const userStore = useUserStore();
    const { user, hasCredits } = storeToRefs(userStore);
    const { updateCredits } = userStore;

    const subStore = useSubStore();
    const { active } = storeToRefs(subStore);

    const prompt = ref("");
    const input1 = ref("");
    const input2 = ref("");
    const input3 = ref("");
    const input4 = ref("");
    const input5 = ref("");
    const suggestion = ref("");
    const loading = ref(false);
    const scrollRef = ref(null);
    const conversation = ref([]);
    const regenerateVal = ref("");
    const loadingReg = ref(false);
    const selectedMenu = ref(null);
    const typeWriterText = ref("");
    const selectedPrompt = ref({});
    const selectedSubMenu = ref(null);
    const suggestionPrompt = ref(false);

    const $q = useQuasar();

    onMounted(() => {
      !menus.value.length && getMenus();

      if (!subMenus.value.length) {
        getSubMenus();
      }
    });

    const checkActive = computed(() => {
      return active.value ? active.value : hasCredits.value;
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

      // const generatePromptResponse = httpsCallable(
      //   functions,
      //   "generateResponse"
      // );

      try {
        // const res = await fetch("http://localhost:5000/prompt/", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({
        //     query: `${prompt.value}`,
        //     history: [],
        //   }),
        // });

        // const stream = res.body;

        // const reader = stream.getReader();

        // try {
        // let date = Date.now();
        // let i = 0;
        // while (true) {
        //   const { done, value } = await reader.read();
        //   if (done) break;
        //   const decodedValue = new TextDecoder().decode(value);
        //   if (i == 0)
        //     conversation.value.push({
        //       role: "assistant",
        //       content: decodedValue,
        //       date,
        //     });
        //   else {
        //     let currentConvo = conversation.value.find(
        //       (c) => c.date === date
        //     );
        //     currentConvo.content += decodedValue;
        //   }
        //   i++;
        // }
        // } catch (error) {
        //   throw new Error(error);
        // } finally {
        //   reader.releaseLock();
        //   scrollRef.value.scrollTo(conversation.value.length - 1, "smooth");
        // }

        const sse = new EventSource(
          `https://api.promptpal.me/prompt/gpt?query=${prompt.value}`
        );

        let i = 0;
        let date = Date.now();
        sse.addEventListener("message", ({ data }) => {
          let msgObj = JSON.parse(data);
          if (i == 0)
            conversation.value.push({
              role: "assistant",
              content: msgObj.text,
              date,
            });
          else {
            let currentConvo = conversation.value.find((c) => c.date === date);
            currentConvo.content += msgObj.text;
          }

          i++;
        });
        sse.addEventListener("error", ({ data }) => {
          let currentConvo = conversation.value.find((c) => c.date === date);

          if (currentConvo.content.length > 150) {
            const parsed = marked.parse(currentConvo.content);
            currentConvo.content =
              "formatting the result for you, please wait...";

            setTimeout(() => {
              currentConvo.content = parsed;
              loading.value = false;
              scrollRef.value.scrollTo(conversation.value.length - 1, "smooth");
            }, 1500);
          } else {
            loading.value = false;
            scrollRef.value.scrollTo(conversation.value.length - 1, "smooth");
          }

          regenerateVal.value = prompt.value;
          prompt.value = "";
          sse.close();
        });

        checkCredit();
      } catch (e) {
        console.log(e);
        $q.notify({
          message: "Something went wrong. Please try again",
          color: "negative",
          position: "top-right",
        });
      }
    }

    async function regeneratePrompt() {
      loadingReg.value = true;
      // const generatePromptResponse = httpsCallable(
      //   functions,
      //   "generatePromptResponse"
      // );

      try {
        // const res = await generatePromptResponse(`${regenerateVal.value}`);
        // let date = Date.now();
        // conversation.value.push({
        //   role: "assistant",
        //   content: res.data,
        //   date,
        // });
        // startTypewriter(, date);

        const sse = new EventSource(
          `https://api.promptpal.me/prompt/gpt?query=${regenerateVal.value}`
        );

        let i = 0;
        let date = Date.now();
        sse.addEventListener("message", ({ data }) => {
          let msgObj = JSON.parse(data);
          if (i == 0)
            conversation.value.push({
              role: "assistant",
              content: msgObj.text,
              date,
            });
          else {
            let currentConvo = conversation.value.find((c) => c.date === date);
            currentConvo.content += msgObj.text;
          }

          i++;
        });
        sse.addEventListener("error", ({ data }) => {
          let currentConvo = conversation.value.find((c) => c.date === date);

          if (currentConvo.content.length > 150) {
            const parsed = marked.parse(currentConvo.content);
            currentConvo.content = "parsing the result for you, please wait...";

            setTimeout(() => {
              currentConvo.content = parsed;
              loadingReg.value = false;
              scrollRef.value.scrollTo(conversation.value.length - 1, "smooth");
            }, 1500);
          } else {
            loadingReg.value = false;
            scrollRef.value.scrollTo(conversation.value.length - 1, "smooth");
          }

          sse.close();
        });

        checkCredit();
      } catch (e) {
        console.log(e);
        $q.notify({
          message: "Something went wrong. Please try again",
          color: "negative",
          position: "top-right",
        });
      }
    }

    function setMenu(param) {
      selectedPrompt.value = {};
      let subs = subMenus.value.filter((menu) => menu.type == param);
      const menu = menus.value.find((m) => m === param);

      selectedMenu.value = {
        menu,
        subMenus: _sortBy(toRaw(subs), [
          function (o) {
            return o.title;
          },
        ]),
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
      if (active.value) return;

      if (user.value.data.credits && user.value.data.credits != -1)
        updateCredits(user.value.data.credits - 1);
    }

    async function suggest() {
      if (!suggestion.value) return;

      await addSuggestion(suggestion.value, user.value.data);

      suggestion.value = "";
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
      active,
      _sortBy,
      loading,
      suggest,
      setMenu,
      subMenus,
      copyText,
      scrollRef,
      setPrompt,
      setHeight,
      loadingReg,
      suggestion,
      _startCase,
      checkActive,
      selectedMenu,
      conversation,
      submitPrompt,
      regenerateVal,
      typeWriterText,
      selectedPrompt,
      gettingSubMenus,
      selectedSubMenu,
      addingSuggestion,
      suggestionPrompt,
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
