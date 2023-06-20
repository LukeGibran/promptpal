<template>
  <q-page>
    <div class="row justify-center items-center">
      <div class="col-3">
        <div class="row">
          <div class="col-12">
            <q-card
              class="no-shadow q-px-md q-pb-md"
              style="border: 1px solid #ccc; min-w"
            >
              <q-card-section>
                <q-card-main>
                  <q-form>
                    <div class="text-h4 q-mb-md">Login</div>
                    <q-input
                      outlined
                      v-model="email"
                      label="Email"
                      lazy-rule
                      class="q-mb-md"
                      :rules="[rules.required, rules.email]"
                    />
                    <q-input
                      outlined
                      v-model="password"
                      :type="isPwd ? 'password' : 'text'"
                      class="q-mb-md"
                      label="Password"
                      :rules="[rules.required]"
                    >
                      <template v-slot:append>
                        <q-icon
                          :name="isPwd ? 'visibility_off' : 'visibility'"
                          class="cursor-pointer"
                          @click="isPwd = !isPwd"
                        />
                      </template>
                    </q-input>
                    <q-btn-group spread>
                      <q-btn
                        :loading="loggingIn"
                        @click="loginUser()"
                        label="Login"
                        type="submit"
                        color="primary"
                      />
                    </q-btn-group>
                  </q-form>
                </q-card-main>
              </q-card-section>
              <q-separator />
              <q-card-section>
                <q-btn-group spread>
                  <q-tooltip> Coming soon </q-tooltip>
                  <q-btn disable type="submit" color="white" text-color="dark">
                    <q-avatar size="20px" class="q-mr-md">
                      <img src="~/assets/g-logo.png" />
                    </q-avatar>
                    Sign in with Google
                  </q-btn>
                </q-btn-group>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script>
import { useQuasar } from "quasar";
import { ref, defineComponent, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useUserStore } from "stores/user";
import { useRouter } from "vue-router";
import rules from "../utils/rules";

export default defineComponent({
  name: "LoginPage",
  setup() {
    const userStore = useUserStore();
    const { logIn } = userStore;
    const { user, loggingIn } = storeToRefs(userStore);

    const router = useRouter();

    const $q = useQuasar();

    const email = ref("");
    const password = ref("");
    const isPwd = ref(true);

    const loginUser = async () => {
      try {
        await logIn({ email: email.value, password: password.value });

        router.push("/");
        $q.notify({
          message: `Welcome back!`,
          color: "positive",
          position: "top-right",
        });
      } catch (error) {
        console.log(error);
        $q.notify({
          message: "Invalid email/password. Please try again",
          color: "negative",
          position: "top-right",
        });
      }
    };

    return {
      user,
      email,
      rules,
      isPwd,
      password,
      loggingIn,
      loginUser,
    };
  },
});
</script>
