<template>
  <q-page>
    <div class="row justify-center align-center">
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
                    <div class="text-h4 q-mb-md">Register</div>
                    <q-input
                      outlined
                      v-model="firstName"
                      label="First Name"
                      lazy-rule
                      :rules="[rules.required]"
                      class="q-mb-md"
                    />
                    <q-input
                      outlined
                      v-model="lastName"
                      label="Last Name"
                      :rules="[rules.required]"
                      lazy-rule
                      class="q-mb-md"
                    />
                    <q-select
                      outlined
                      v-model="selectedIndustry"
                      :options="occupations"
                      class="q-mb-md"
                      label="Select One:"
                    />

                    <q-select
                      outlined
                      v-if="selectedIndustry"
                      v-model="selectedOccupation"
                      :options="selectedIndustry.occupations"
                      class="q-mb-md"
                      label="Occupation:"
                    />

                    <q-input
                      outlined
                      v-model="email"
                      :rules="[rules.required, rules.email]"
                      label="Email"
                      lazy-rule
                      class="q-mb-md"
                    />
                    <q-input
                      outlined
                      v-model="password"
                      :rules="[rules.required, rules.password]"
                      :type="isPwd ? 'password' : 'text'"
                      label="Password"
                      class="q-mb-md"
                    >
                      <template v-slot:append>
                        <q-icon
                          :name="isPwd ? 'visibility_off' : 'visibility'"
                          class="cursor-pointer"
                          @click="isPwd = !isPwd"
                        />
                      </template>
                    </q-input>
                    <q-input
                      outlined
                      v-model="password1"
                      :rules="[
                        rules.required,
                        (val) => val === password || 'Passwords do not match!',
                      ]"
                      :type="isPwd1 ? 'password' : 'text'"
                      label="Retype password"
                      class="q-mb-md"
                    >
                      <template v-slot:append>
                        <q-icon
                          :name="isPwd1 ? 'visibility_off' : 'visibility'"
                          class="cursor-pointer"
                          @click="isPwd1 = !isPwd1"
                        />
                      </template>
                    </q-input>
                    <q-btn-group spread>
                      <q-btn
                        :loading="registering"
                        label="Register"
                        type="submit"
                        color="primary"
                        @click="registerUser()"
                      />
                    </q-btn-group>
                  </q-form>
                </q-card-main>
              </q-card-section>
              <!-- <q-separator />
              <q-card-section>
                <q-btn-group spread>
                  <q-btn type="submit" color="white" text-color="dark">
                    <q-avatar size="20px" class="q-mr-md">
                      <img src="~/assets/g-logo.png" />
                    </q-avatar>
                    Sign up with Google
                  </q-btn>
                </q-btn-group>
              </q-card-section> -->
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script>
import { useQuasar } from "quasar";
import { ref, defineComponent } from "vue";
import { storeToRefs } from "pinia";
import { useUserStore } from "stores/user";
import { useRouter } from "vue-router";

import rules from "../utils/rules";

export default defineComponent({
  name: "RegisterPage",
  setup() {
    const userStore = useUserStore();

    const { register } = userStore;

    const { registering, user } = storeToRefs(userStore);

    const isPwd = ref(true);
    const email = ref("");
    const isPwd1 = ref(true);
    const lastName = ref("");
    const password = ref("");
    const password1 = ref("");
    const firstName = ref("");
    const selectedOccupation = ref("");
    const selectedIndustry = ref(null);
    const occupations = ref([
      {
        label: "Healthcare Practitioners and Technical Occupations",
        id: 1,
        occupations: [
          "Chiropractor",
          "Dentist",
          "Dietitian or Nutritionist",
          "Optometrist",
          "Pharmacist",
          "Doctor",
          "Podiatrist",
          "Occupational Therapist",
          "Psychologist/Psychiatrist/Counsellor",
          " Veterinarian",
          "Health Technologist or Technician",
          "Other Healthcare Practitioners and Technical Occupation",
          "Nursing, Psychiatric, or Home Health Aide",
          "Other Healthcare Support Occupation",
        ],
      },
      {
        label: "Business, Executive, Management, and Financial Occupations",
        id: 2,
        occupations: [
          "Chief Executive",
          "General and Operations Manager",
          " Advertising, Marketing, Promotions, Public Relations, and Sales Manager",
          "Operations Specialties Manager",
          "Construction Manager",
          "Engineering Manager",
          "Accountant, Auditor",
          "Business Operations or Financial Specialist",
          "Business Owner",
          "Other Business, Executive, Management, Financial Occupation",
        ],
      },
      {
        label: "Architecture and Engineering Occupations:",
        id: 3,
        occupations: [
          "Architect, Surveyor, or Cartographer",
          "Engineer",
          "Other Architecture and Engineering Occupation",
        ],
      },
      {
        label: "Education, Training, and Library Occupations",
        id: 4,
        occupations: [
          "Postsecondary Teacher",
          "Primary, Secondary, or Special Education School Teacher",
          "Other Teacher or Instructor",
          "Other Education, Training, and Library Occupation",
        ],
      },
      {
        label: "Other Professional Occupations",
        id: 5,
        occupations: [
          "Arts, Design, Entertainment, Sports, and Media Occupations",
          "Computer Specialist, Mathematical Science",
          "Counselor, Social Worker, or Other Community and Social Service Specialist",
          "Lawyer, Judge",
          "Life Scientist",
          "Physical Scientist",
          "Religious Worker",
          "Social Scientist and Related Worker",
          "Other Professional Occupation",
        ],
      },
      {
        label: "Office and Administrative Support Occupations",
        id: 6,
        occupations: [
          "Supervisor of Administrative Support Workers",
          "Financial Clerk",
          "Secretary or Administrative Assistant",
          "Material Recording, Scheduling, and Dispatching Worker",
          "Other Office and Administrative Support Occupation",
        ],
      },
      {
        label: "Services Occupations",
        id: 7,
        occupations: [
          "Protective Service",
          "Chef or Head Cook",
          "Cook or Food Preparation Worker",
          "Food and Beverage Serving Worker",
          "Building and Grounds Cleaning and Maintenance",
          "Personal Care and Service",
          "Sales Supervisor, Retail Sales",
          "Retail Sales Worker",
          "Insurance Sales Agent",
          "Sales Representative",
          "Real Estate Sales Agent",
          "Other Services Occupation",
        ],
      },
      {
        label:
          "Agriculture, Maintenance, Repair, and Skilled Crafts Occupations",
        id: 8,
        occupations: [
          "Construction and Extraction",
          "Farming, Fishing, and Forestry",
          "Installation, Maintenance, and Repair",
          "Production Occupations",
          "Other Agriculture, Maintenance, Repair, and Skilled Crafts Occupation",
        ],
      },
      {
        label: "Transportation Occupations",
        id: 9,
        occupations: [
          "Aircraft Pilot or Flight Engineer",
          "Motor Vehicle Operator",
          "Other Transportation Occupation",
        ],
      },
      {
        label: "Other Occupations",
        id: 10,
        occupations: [
          "Military",
          "Homemaker",
          "Other Occupation",
          "Don't Know",
          "Not Applicable",
        ],
      },
    ]);

    const router = useRouter();

    const $q = useQuasar();

    const registerUser = async () => {
      try {
        await register({
          email: email.value,
          password: password.value,
          lastName: lastName.value,
          firstName: firstName.value,
          occupation: selectedOccupation.value,
          industryId: selectedIndustry.value.id,
        });

        router.push("/");

        $q.notify({
          message: `Welcome ${firstName.value}!`,
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
    };

    return {
      isPwd,
      email,
      rules,
      isPwd1,
      lastName,
      password,
      password1,
      firstName,
      registering,
      occupations,
      registerUser,
      selectedIndustry,
      selectedOccupation,
    };
  },
});
</script>
