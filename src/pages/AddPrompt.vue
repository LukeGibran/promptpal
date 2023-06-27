<template>
  <q-page>
    <div class="q-pa-md">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <div class="row">
            <div class="col-12 q-mb-lg">
              <q-card class="no-shadow" style="border: 1px solid #ccc">
                <q-card-section>
                  <q-card-main>
                    <q-form>
                      <div class="text-h4 q-mb-md">Add Menu</div>
                      <q-input
                        outlined
                        v-model="menu"
                        label="Menu"
                        lazy-rules
                        class="q-mb-sm"
                      />
                      <div>
                        <q-btn
                          label="Add"
                          type="submit"
                          color="primary"
                          :loading="loading"
                          :disable="!menu"
                          @click.prevent="addMenu()"
                        />
                      </div>
                    </q-form>
                  </q-card-main>
                </q-card-section>
              </q-card>
            </div>

            <div class="col-12">
              <q-card class="no-shadow" style="border: 1px solid #ccc">
                <q-card-section>
                  <q-card-main>
                    <div class="text-h4 q-mb-md">Add Sub Menu</div>
                    <q-form>
                      <q-select
                        outlined
                        v-model="menuType"
                        label="Menu Type"
                        :loading="loadingMenus"
                        :options="menus"
                        class="q-pb-md"
                      />

                      <q-input
                        outlined
                        v-model="subMenu"
                        label="SubMenu Title"
                        lazy-rules
                        class="q-pb-md"
                      />

                      <q-input
                        outlined
                        v-model="prompt"
                        label="Prompt"
                        type="textarea"
                        lazy-rules
                        class="q-pb-md"
                      />

                      <q-select
                        outlined
                        v-model="numberOfInput"
                        :options="inputNumbers"
                        label="Number of Inputs"
                        class="q-pb-md"
                      />

                      <div v-if="numberOfInput">
                        <div v-if="numberOfInput >= 1">
                          <q-input
                            class="q-mb-sm"
                            v-model="input1"
                            label="Keyword 1"
                            outlined
                          ></q-input>
                          <q-input
                            class="q-mb-sm"
                            v-model="hint1"
                            label="Hint for keyword 1"
                            outlined
                          ></q-input>
                        </div>
                        <div v-if="numberOfInput >= 2">
                          <q-input
                            class="q-mb-sm"
                            v-model="input2"
                            label="Keyword 2"
                            outlined
                          ></q-input>
                          <q-input
                            class="q-mb-sm"
                            v-model="hint2"
                            label="Hint for keyword 2"
                            outlined
                          ></q-input>
                        </div>
                        <div v-if="numberOfInput >= 3">
                          <q-input
                            class="q-mb-sm"
                            v-model="input3"
                            label="Keyword 3"
                            outlined
                          ></q-input>
                          <q-input
                            class="q-mb-sm"
                            v-model="hint3"
                            label="Hint for keyword 3"
                            outlined
                          ></q-input>
                        </div>
                        <div v-if="numberOfInput >= 4">
                          <q-input
                            class="q-mb-sm"
                            v-model="input4"
                            label="Keyword 4"
                            outlined
                          ></q-input>
                          <q-input
                            class="q-mb-sm"
                            v-model="hint4"
                            label="Hint for keyword 4"
                            outlined
                          ></q-input>
                        </div>
                        <div v-if="numberOfInput >= 5">
                          <q-input
                            class="q-mb-sm"
                            v-model="input5"
                            label="Keyword 5"
                            outlined
                          ></q-input>
                          <q-input
                            class="q-mb-sm"
                            v-model="hint5"
                            label="Hint for keyword 5"
                            outlined
                          ></q-input>
                        </div>
                      </div>
                      <div>
                        <q-btn
                          label="Add"
                          type="submit"
                          color="primary"
                          :loading="addingSubMenu"
                          @click.prevent="submitSubMenu()"
                        />
                      </div>
                    </q-form>
                  </q-card-main>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref, defineComponent, onMounted, onBeforeUnmount } from "vue";
import { useMenuStore } from "stores/menu";
import { storeToRefs } from "pinia";
import { document } from "postcss";
import { dom } from "quasar";

export default defineComponent({
  name: "AddPrompt",
  setup() {
    const menuStore = useMenuStore();

    const { menus, menu, loading, loadingMenus, addingSubMenu } = storeToRefs(
      useMenuStore()
    );
    const { addMenu, getMenus, addSubMenu } = menuStore;

    const hint1 = ref("");
    const hint2 = ref("");
    const hint3 = ref("");
    const hint4 = ref("");
    const hint5 = ref("");
    const prompt = ref("");
    const input1 = ref("");
    const input2 = ref("");
    const input3 = ref("");
    const input4 = ref("");
    const input5 = ref("");
    const subMenu = ref("");
    const menuType = ref(null);
    const inputNumbers = ref([1, 2, 3, 4, 5]);
    const numberOfInput = ref(null);

    onMounted(() => {
      window.document.body.style.overflow = "auto";
      !menus.value.length && getMenus();
    });

    onBeforeUnmount(() => {
      window.document.body.style.overflow = "hidden";
    });

    async function submitSubMenu() {
      let inputs = [];

      if (input1.value) {
        inputs.push({ keyword: input1.value, hint: hint1.value });
      }
      if (input2.value) {
        inputs.push({ keyword: input2.value, hint: hint2.value });
      }
      if (input3.value) {
        inputs.push({ keyword: input3.value, hint: hint3.value });
      }

      if (input4.value) {
        inputs.push({ keyword: input4.value, hint: hint4.value });
      }

      if (input5.value) {
        inputs.push({ keyword: input5.value, hint: hint5.value });
      }

      await addSubMenu({
        title: subMenu.value,
        type: menuType.value,
        prompt: prompt.value,
        updatedAt: Date.now(),
        inputs,
      });

      // Reset everything
      subMenu.value = "";
      menuType.value = "";
      prompt.value = "";
      input1.value = "";
      input2.value = "";
      input3.value = "";
      input4.value = "";
      input5.value = "";
      hint1.value = "";
      hint2.value = "";
      hint3.value = "";
      hint4.value = "";
      hint5.value = "";
    }

    return {
      menu,
      menus,
      hint1,
      hint2,
      hint3,
      hint4,
      hint5,
      prompt,
      input1,
      input2,
      input3,
      input4,
      input5,
      subMenu,
      addMenu,
      loading,
      menuType,
      loadingMenus,
      inputNumbers,
      addingSubMenu,
      submitSubMenu,
      numberOfInput,
    };
  },
});
</script>
