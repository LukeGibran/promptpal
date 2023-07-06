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
    <div class="row justify-center">
      <div class="gt-sm col-xs-10 col-md-11 col-lg-7">
        <div class="row justify-end">
          <q-btn
            flat
            color="info"
            label="Love Using PromptPal? Click Here"
            size="12px"
            icon-right="favorite"
            class="love-btn"
            @click="affLink = true"
          />
          <q-btn
            flat
            icon-right="help"
            label="How To Use PromptPal"
            size="12px"
            color="grey-8"
            class="love-btn"
            @click="startTourLg()"
          />
          <!-- <q-fab-action
              label="Start tutorial"
              color="secondary"
              padding="xs"
              icon="play_arrow"
            /> -->
        </div>
      </div>
      <div class="lt-md col-xs-10 col-md-8 col-lg-7">
        <div class="column items-center q-mt-sm">
          <q-btn
            flat
            color="info"
            label="Love Using PromptPal? Click Here"
            size="12px"
            icon-right="favorite"
            class="love-btn"
            @click="affLink = true"
          />
          <q-btn
            flat
            icon-right="help"
            direction="down"
            label="How to use PromptPal"
            size="12px"
            color="grey-8"
            class="love-btn"
            @click="startTourSm()"
          />
        </div>
      </div>
    </div>
    <!-- MOBILE VIEW -->
    <div class="row justify-center q-mb-sm lt-md menu">
      <div class="col-xs-12 col-md-8 col-lg-7 q-mb-sm q-px-md">
        <div ref="menuExpSm">
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
              disable
              caption="Choose a sub topic"
              ref="subExpSm"
              v-if="!selectedMenu?.subMenus"
            >
              <q-separator />
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
        <div ref="menuExpLg">
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
        </div>

        <div ref="subExpLg">
          <q-list
            bordered
            class="bg-white"
            style="border-radius: 4px"
            v-if="!selectedMenu?.subMenus"
          >
            <q-expansion-item
              disable
              expand-separator
              label="Sub topic"
              caption="Choose a sub topic"
            >
            </q-expansion-item>
          </q-list>
        </div>

        <div ref="subExpLg1">
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
                  <q-separator
                    v-if="index + 1 != selectedMenu.subMenus.length"
                  />
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
      </div>
      <div class="col-xs-11 col-sm-12 col-md-8 col-lg-5">
        <div
          class="content custom-border q-mb-md"
          :class="conversation.length && 'active'"
          ref="chatBox"
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
                <q-chat-message
                  bg-color="primary"
                  text-color="white"
                  v-if="gettingConversations"
                >
                  <template v-slot:name>Prompt Pal</template>
                  <template v-slot:avatar>
                    <img
                      class="q-message-avatar q-message-avatar--received"
                      src="~/assets/logo_initial.png"
                    />
                  </template>
                  <div>Getting your conversations..</div>

                  <q-spinner-dots size="2rem" />
                </q-chat-message>
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
          <div ref="inputBox">
            <q-card
              class="no-shadow q-mb-md q-pa-md custom-border"
              v-if="!selectedPrompt.title && checkActive"
            >
              <q-card-section class="q-pa-none">
                <q-card-main>
                  <div>
                    <q-input
                      class="q-mb-sm"
                      v-model="input1"
                      placeholder="keyword"
                      hint="Enter a keyword"
                      outlined
                      :disable="true"
                    ></q-input>
                  </div>
                  <div class="row justify-end">
                    <q-btn :disable="true" label="Generate" color="secondary" />
                  </div>
                </q-card-main>
              </q-card-section>
            </q-card>
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
                      :placeholder="
                        _startCase(selectedPrompt.inputs[0].keyword)
                      "
                      :hint="
                        selectedPrompt.inputs[0].hint
                          ? `e.g. ${selectedPrompt.inputs[0].hint}`
                          : ''
                      "
                      outlined
                      autogrow
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
                          ? `e.g. ${selectedPrompt.inputs[0].hint}`
                          : ''
                      "
                      outlined
                      :disable="!selectedPrompt.title"
                      autogrow
                    ></q-input>
                    <q-input
                      autogrow
                      class="q-mb-sm"
                      v-model="input2"
                      :placeholder="
                        _startCase(selectedPrompt.inputs[1].keyword)
                      "
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
                      autogrow
                      class="q-mb-sm"
                      :placeholder="
                        _startCase(selectedPrompt.inputs[0].keyword)
                      "
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
                      autogrow
                      class="q-mb-sm"
                      :placeholder="
                        _startCase(selectedPrompt.inputs[1].keyword)
                      "
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
                      autogrow
                      class="q-mb-sm"
                      :placeholder="
                        _startCase(selectedPrompt.inputs[2].keyword)
                      "
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
                      autogrow
                      class="q-mb-sm"
                      :placeholder="
                        _startCase(selectedPrompt.inputs[0].keyword)
                      "
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
                      autogrow
                      class="q-mb-sm"
                      :placeholder="
                        _startCase(selectedPrompt.inputs[1].keyword)
                      "
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
                      autogrow
                      class="q-mb-sm"
                      :placeholder="
                        _startCase(selectedPrompt.inputs[2].keyword)
                      "
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
                      autogrow
                      class="q-mb-sm"
                      :placeholder="
                        _startCase(selectedPrompt.inputs[3].keyword)
                      "
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
                      autogrow
                      class="q-mb-sm"
                      :placeholder="
                        _startCase(selectedPrompt.inputs[0].keyword)
                      "
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
                      autogrow
                      class="q-mb-sm"
                      :placeholder="
                        _startCase(selectedPrompt.inputs[1].keyword)
                      "
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
                      autogrow
                      class="q-mb-sm"
                      :placeholder="
                        _startCase(selectedPrompt.inputs[2].keyword)
                      "
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
                      autogrow
                      class="q-mb-sm"
                      :placeholder="
                        _startCase(selectedPrompt.inputs[3].keyword)
                      "
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
                      autogrow
                      class="q-mb-sm"
                      :placeholder="
                        _startCase(selectedPrompt.inputs[4].keyword)
                      "
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
          </div>
        </transition>
      </div>
    </div>

    <!-- <q-page-sticky class="gt-sm" position="bottom-left" :offset="[80, 60]">
      <q-fab
        color="yellow-9"
        icon="settings"
        glossy
        direction="up"
        hide-icon
        label="Suggest a prompt"
        padding="sm"
        @click="suggestionPrompt = true"
      >
      </q-fab>
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
    </q-page-sticky> -->

    <q-dialog v-model="affLink">
      <q-card class="no-shadow" style="border: 1px solid #ccc">
        <q-card-section>
          <div class="text-body2 q-mb-md">
            Love using PromptPal? Get rewarded for spreading the word! Share
            your unique link with friends, family and colleagues, and earn 20%
            of each person's lifetime subscription fees. Copy this link to
            share!
          </div>
          <q-card class="no-shadow" style="border: 1px solid #ccc">
            <q-card-section>
              <div class="row">
                <div class="col-12">
                  <q-icon
                    name="content_copy"
                    class="cursor-pointer q-mr-sm"
                    @click="copyLink(affiliateLink)"
                  >
                  </q-icon>
                  <div
                    class="text-body2 text-info cursor-pointer hover-underline ellipsis"
                    @click="copyLink(affiliateLink)"
                  >
                    {{ affiliateLink }}
                  </div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </q-card-section>
        <q-separator />
        <q-card-actions align="right">
          <q-btn flat label="Got it!" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { useQuasar, copyToClipboard, LocalStorage } from "quasar";
import { ref, defineComponent, onMounted, toRaw, computed, watch } from "vue";
import { useConversationStore } from "stores/conversation";
import { functions } from "src/utils/firebaseProxy";
import { httpsCallable } from "firebase/functions";
import { useMenuStore } from "stores/menu";
import { useUserStore } from "stores/user";
import { useSubStore } from "stores/subscription";
import { storeToRefs } from "pinia";
import { useShepherd } from "vue-shepherd";
import "../css/shepherd.css";

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
    const { menus, subMenus } = storeToRefs(menuStore);
    const { getMenus, getSubMenus, gettingSubMenus } = menuStore;

    const userStore = useUserStore();
    const { user, hasCredits, affiliateLink } = storeToRefs(userStore);
    const { updateCredits } = userStore;

    const subStore = useSubStore();
    const { active } = storeToRefs(subStore);

    const conversationStore = useConversationStore();
    const { conversations, gettingConversations } =
      storeToRefs(conversationStore);
    const { addConversation, getConversations } = conversationStore;

    const prompt = ref("");
    const input1 = ref("");
    const input2 = ref("");
    const input3 = ref("");
    const input4 = ref("");
    const input5 = ref("");
    const chatBox = ref("");
    const subExpLg = ref("");
    const inputBox = ref("");
    const menuExpLg = ref("");
    const menuExpSm = ref("");
    const affLink = ref(false);
    const loading = ref(false);
    const scrollRef = ref(null);
    const conversation = ref([]);
    const regenerateVal = ref("");
    const loadingReg = ref(false);
    const selectedMenu = ref(null);
    const typeWriterText = ref("");
    const selectedPrompt = ref({});
    const selectedSubMenu = ref(null);
    const prod = "https://api.promptpal.me/prompt";
    const dev = "http://localhost:5000/prompt";

    const $q = useQuasar();

    onMounted(() => {
      !menus.value.length && getMenus();

      if (!subMenus.value.length) {
        getSubMenus();
      }

      if (user.value.id) getConversations(user.value.id);

      if (!$q.cookies.get("first_time")) {
        startTour();
      } else {
        let c = $q.cookies.get("first_time");

        if (Date.now() >= c) {
          $q.cookies.remove("first_time");
          setCookies();
        }
      }
    });

    watch(
      () => conversations.value,
      (data) => {
        if (data) {
          conversation.value = [...data];
          setTimeout(() => {
            scrollRef.value.scrollTo(conversation.value.length - 1, "smooth");
          }, 801);
        }
      },
      { deep: true }
    );

    const checkActive = computed(() => {
      return active.value ? active.value : hasCredits.value;
    });

    function startTour() {
      const tour = useShepherd({
        useModalOverlay: true,
      });
      tour.addStep({
        text: "Welcome to Prompt Pal! We are going to show you the basics of our app!",
        arrow: true,
        buttons: [
          {
            text: "Okay!",
            action: tour.next,
          },
        ],
      });
      tour.addStep({
        attachTo: { element: menuExpLg.value, on: "right" },
        text: "You can start by choosing from the menu dropdown",
        arrow: true,
        buttons: [
          {
            text: "Next",
            action: tour.next,
          },
        ],
      });

      tour.addStep({
        attachTo: { element: subExpLg.value, on: "right" },
        text: "Then choose a sub topic from the this dropdown",
        arrow: true,
        buttons: [
          {
            text: "Back",
            action: tour.back,
          },
          {
            text: "Next",
            action: tour.next,
          },
        ],
      });
      tour.addStep({
        attachTo: { element: inputBox.value, on: "left" },
        text: "Enter the required keyword, phrase etc.",
        arrow: true,
        buttons: [
          {
            text: "Back",
            action: tour.back,
          },
          {
            text: "Next",
            action: tour.next,
          },
        ],
      });

      tour.addStep({
        attachTo: { element: chatBox.value, on: "top" },
        text: "Then PrompPal's respond will be displayed here",
        arrow: true,
        buttons: [
          {
            text: "Back",
            action: tour.back,
          },
          {
            text: "Next",
            action: tour.next,
          },
        ],
      });

      tour.addStep({
        text: "That's it! You can now enjoy using our app! Thank you!",
        arrow: true,
        buttons: [
          {
            text: "Back",
            action: tour.back,
          },
          {
            text: "Got it!",
            action: tour.cancel,
          },
        ],
      });

      tour.start();
      setCookies();
    }

    function setCookies() {
      let date = new Date();
      $q.cookies.set(
        "first_time",
        {
          val: true,
          expiresIn: date.setDate(date.getDate() + 7),
        },
        {
          expires: "7d",
        }
      );
    }

    function startTourLg() {
      const tour = useShepherd({
        useModalOverlay: true,
      });
      tour.addStep({
        attachTo: { element: menuExpLg.value, on: "right" },
        text: "Start by choosing from the menu dropdown",
        arrow: true,
        buttons: [
          {
            text: "Next",
            action: tour.next,
          },
        ],
      });

      tour.addStep({
        attachTo: { element: subExpLg.value, on: "right" },
        text: "Then choose a sub topic from the this dropdown",
        arrow: true,
        buttons: [
          {
            text: "Back",
            action: tour.back,
          },
          {
            text: "Next",
            action: tour.next,
          },
        ],
      });
      tour.addStep({
        attachTo: { element: inputBox.value, on: "left" },
        text: "Enter the required keyword, phrase etc.",
        arrow: true,
        buttons: [
          {
            text: "Back",
            action: tour.back,
          },
          {
            text: "Next",
            action: tour.next,
          },
        ],
      });

      tour.addStep({
        attachTo: { element: chatBox.value, on: "top" },
        text: "Then PrompPal's respond will be displayed here",
        arrow: true,
        buttons: [
          {
            text: "Back",
            action: tour.back,
          },
          {
            text: "Done",
            action: tour.cancel,
          },
        ],
      });

      tour.start();
    }

    function startTourSm() {
      const tour = useShepherd({
        useModalOverlay: true,
      });
      tour.addStep({
        attachTo: { element: menuExpSm.value, on: "bottom" },
        text: "Start by choosing from the menu and sub topic dropdown",
        arrow: true,
        buttons: [
          {
            text: "Next",
            action: tour.next,
          },
        ],
      });

      tour.addStep({
        attachTo: { element: inputBox.value, on: "bottom" },
        text: "Enter the required keyword, phrase etc.",
        arrow: true,
        buttons: [
          {
            text: "Back",
            action: tour.back,
          },
          {
            text: "Next",
            action: tour.next,
          },
        ],
      });

      tour.addStep({
        attachTo: { element: chatBox.value, on: "bottom" },
        text: "Then PrompPal's respond will be displayed here",
        arrow: true,
        buttons: [
          {
            text: "Back",
            action: tour.back,
          },
          {
            text: "Done",
            action: tour.cancel,
          },
        ],
      });

      tour.start();
    }

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
        // const res = await fetch(`${prod}/gpt3`, {
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

        // let date = Date.now();
        // let currentConvo;
        // try {
        //   let i = 0;
        //   while (true) {
        //     const { done, value } = await reader.read();
        //     if (done) break;
        //     const decodedValue = new TextDecoder().decode(value);
        //     if (i == 0)
        //       conversation.value.push({
        //         role: "assistant",
        //         content: decodedValue,
        //         date,
        //       });
        //     else {
        //       currentConvo = conversation.value.find((c) => c.date === date);
        //       currentConvo.content += decodedValue;
        //     }
        //     i++;
        //   }
        // } catch (error) {
        //   throw new Error(error);
        // } finally {
        //   regenerateVal.value = prompt.value;
        //   prompt.value = "";
        //   reader.releaseLock();
        //   setTimeout(() => {
        //     if (currentConvo.content.length > 150) {
        //       const parsed = marked.parse(currentConvo.content);
        //       currentConvo.content =
        //         "formatting the result for you, please wait...";

        //       setTimeout(() => {
        //         currentConvo.content = parsed;
        //         loading.value = false;
        //         scrollRef.value.scrollTo(
        //           conversation.value.length - 1,
        //           "smooth"
        //         );
        //       }, 1500);
        //     }
        //   });
        // }

        const sse = new EventSource(`${prod}/gpt3?query=${prompt.value}`);

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
        sse.addEventListener("error", async ({ data }) => {
          let currentConvo = conversation.value.find((c) => c.date === date);

          if (currentConvo.content.length > 150) {
            const parsed = marked.parse(currentConvo.content);
            currentConvo.content =
              "formatting the result for you, please wait...";

            setTimeout(async () => {
              currentConvo.content = parsed;
              await addConversation(
                {
                  role: "assistant",
                  content: parsed,
                  date,
                },
                user.value.id
              );
              loading.value = false;
              scrollRef.value.scrollTo(conversation.value.length - 1, "smooth");
            }, 1500);
          } else {
            await addConversation(
              {
                role: "assistant",
                content: currentConvo.content,
                date,
              },
              user.value.id
            );
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
          `${prod}/gpt3?query=${regenerateVal.value}`
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

    async function copyLink(text) {
      try {
        await copyToClipboard(text);
        $q.notify({
          message: "Link copied!",
          color: "positive",
          position: "top-right",
        });
      } catch (error) {
        console.log(error);
        $q.notify({
          message: "Something went wrong. Please try again",
          color: "negative",
          position: "top-right",
        });
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
      active,
      _sortBy,
      loading,
      affLink,
      setMenu,
      chatBox,
      subMenus,
      copyText,
      copyLink,
      subExpLg,
      inputBox,
      setPrompt,
      menuExpLg,
      scrollRef,
      menuExpSm,
      setHeight,
      loadingReg,
      _startCase,
      checkActive,
      startTourLg,
      startTourSm,
      selectedMenu,
      conversation,
      submitPrompt,
      affiliateLink,
      regenerateVal,
      typeWriterText,
      selectedPrompt,
      gettingSubMenus,
      selectedSubMenu,
      regeneratePrompt,
      gettingConversations,

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
