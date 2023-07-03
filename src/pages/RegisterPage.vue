<template>
  <q-page>
    <div class="row justify-center align-center">
      <div class="col-xs-12 col-sm-12 col-md-5 col-lg-3">
        <div class="row">
          <div class="col-12">
            <q-card
              class="no-shadow q-px-md q-pb-md custom-border remove-border"
            >
              <q-card-section>
                <q-card-main>
                  <q-form ref="myForm">
                    <div class="text-h4 q-mb-md gt-sm">Register</div>
                    <div class="text-h5 q-mb-md lt-sm">Register</div>
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
                      :rules="[rules.required]"
                      class="q-mb-md"
                      label="Select One:"
                    />

                    <q-select
                      outlined
                      v-if="selectedIndustry"
                      v-model="selectedOccupation"
                      :rules="[rules.required]"
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
                      class="q-mb-sm"
                    >
                      <template v-slot:append>
                        <q-icon
                          :name="isPwd1 ? 'visibility_off' : 'visibility'"
                          class="cursor-pointer"
                          @click="isPwd1 = !isPwd1"
                        />
                      </template>
                    </q-input>
                    <div class="row justify-start items-start q-mb-md">
                      <div class="col-1 q-mr-sm">
                        <q-checkbox
                          v-model="termsAgree"
                          color="secondary"
                          true-value="yes"
                          false-value="no"
                          :rules="[rules.required]"
                        />
                      </div>
                      <div class="col-10">
                        <div class="q-pt-sm">
                          By ticking, you are confirming that you have read,
                          understood and agree to our
                          <a
                            href="#"
                            class="text-info"
                            @click.prevent="modal = true"
                            >Terms and Conditions</a
                          >.
                        </div>
                      </div>
                    </div>
                    <q-btn-group spread>
                      <q-btn
                        :loading="registering"
                        :disable="termsAgree == 'no'"
                        label="Register"
                        type="submit"
                        color="primary"
                        @click.prevent="registerUser()"
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
    <q-dialog v-model="modal">
      <q-card>
        <q-card-section>
          <div class="row justify-center items-center">
            <div class="col-3">
              <div class="column content-center">
                <q-img
                  src="~assets/logo_initial.png"
                  style="height: 50px; width: 130px"
                  fit="scale-down"
                />
                <div class="text-subtitle2 text-center">
                  <span class="prompt-color">Prompt </span>
                  <span class="pal-color">Pal</span>
                </div>
              </div>
            </div>
            <div class="col-9">
              <div class="text-h5">Terms & Conditions</div>
              <div class="text-subtitle text-grey-7">
                Effective Date: 27th June, 2023
              </div>
            </div>
          </div>
        </q-card-section>

        <q-separator />

        <q-card-section style="max-height: 50vh" class="scroll">
          <div class="text-body2 q-mb-sm">
            These Terms & Conditions ("Agreement") govern the use of Prompt Pal
            ("the platform"), operated by CRQ Co PTY LTD, trading as Prompt Pal
            ("Prompt Pal"). By accessing and using the Prompt Pal website,
            mobile app, or services, you agree to comply with these terms and
            conditions. Please read this Agreement carefully before using the
            platform.
          </div>
          <div class="text-h6">1. Purpose and Scope</div>
          <div class="text-body2 q-mb-md">
            a. Purpose of Terms and Conditions: These terms and conditions
            govern the use of the Prompt Pal platform and outline the rights,
            responsibilities, and obligations of users. The purpose of these
            terms and conditions is to ensure a clear understanding between
            Prompt Pal and its users regarding the use of the platform.
          </div>
          <div class="text-body2 q-mb-md">
            b. Scope of Application: These terms and conditions apply to all
            users who access and use the Prompt Pal website, mobile app, or
            services. By using the platform, users agree to comply with these
            terms and conditions.
          </div>
          <div class="text-body2 q-mb-md">
            c. Information Accuracy and User Responsibility: Prompt Pal aims to
            save users time by providing various content generation features.
            However, none of the information provided by Prompt Pal should be
            assumed to be 100% accurate or error-free. Users are solely
            responsible for verifying and validating any information obtained
            from Prompt Pal before using it or relying on it for any purpose
          </div>
          <div class="text-body2 q-mb-md">
            d. No Guarantee of Results: While Prompt Pal strives to provide
            valuable content generation capabilities, it does not guarantee any
            specific outcomes, results, or performance improvements. The use of
            Prompt Pal is at the user's own risk, and Prompt Pal shall not be
            held liable for any consequences resulting from the use of the
            platform.
          </div>
          <div class="text-h6">2. User Agreement</div>
          <div class="text-body2 q-mb-md">
            a. Agreement between Prompt Pal and Users: These terms and
            conditions constitute an agreement between Prompt Pal and users,
            outlining the rights and responsibilities of both parties.
          </div>
          <div class="text-body2 q-mb-md">
            b. Prompt Pal's Obligations: Prompt Pal agrees to provide a
            time-saving content generation solution through its platform. Prompt
            Pal endeavours to deliver efficient and effective services; however,
            it bears no responsibility for the accuracy, reliability, or
            suitability of the information or content produced by the platform.
          </div>
          <div class="text-body2 q-mb-md">
            c. User Responsibility: Users agree to take full responsibility for
            the use of any information or content generated by Prompt Pal. Users
            acknowledge that they have the ultimate responsibility to verify,
            validate, and assess the accuracy, completeness, and appropriateness
            of any information obtained through the platform before using it or
            relying on it for any purpose.
          </div>
          <div class="text-body2 q-mb-md">
            d. No Guarantee of Results: Prompt Pal does not guarantee any
            specific outcomes, results, or performance improvements. The use of
            Prompt Pal is at the user's own risk, and Prompt Pal shall not be
            held liable for any consequences resulting from the use of the
            platform.
          </div>
          <div class="text-body2 q-mb-md">
            e. Compliance with Laws and Terms: Users agree to comply with all
            applicable laws, regulations, and these terms and conditions while
            using Prompt Pal. Any violation of these terms may result in the
            termination or suspension of the user's access to the platform.
          </div>
          <div class="text-h6">3. Acceptance of Terms</div>
          <div class="text-body2 q-mb-md">
            a. Access to Terms and Conditions: Prompt Pal provides users with
            access to these terms and conditions and the privacy policy. By
            signing up for an account or accessing Prompt Pal's website, app, or
            services, users acknowledge that they have read, understood, and
            agree to be bound by these terms and conditions and the privacy
            policy.
          </div>
          <div class="text-body2 q-mb-md">
            b. Agreeing to Terms and Conditions: Upon signing up for an account,
            users will be presented with the terms and conditions and the
            privacy policy. By clicking the "I Agree" button or by using Prompt
            Pal's website, app, or services, users indicate their acceptance of
            these terms and conditions.
          </div>
          <div class="text-body2 q-mb-md">
            c. Continued Acceptance: By continuing to use Prompt Pal's website,
            app, or services, users reaffirm their ongoing
          </div>
          <div class="text-h6">4. User Obligations</div>
          <div class="text-body2 q-mb-md">
            a. Compliance with Terms and Conditions: Users should agree to abide
            by the terms and conditions, acknowledging that their use of the
            website, app, or services is subject to these terms.
          </div>
          <div class="text-body2 q-mb-md">
            b. Lawful Use: Users must agree to use the Prompt Pal platform only
            for lawful purposes and not engage in any illegal activities while
            using it.
          </div>
          <div class="text-body2 q-mb-md">
            c. Accurate Information: Users should provide accurate and
            up-to-date information when creating accounts, submitting data, or
            interacting with the platform.
          </div>
          <div class="text-body2 q-mb-md">
            d. Account Security: Users are responsible for maintaining the
            security and confidentiality of their account credentials and should
            not share their login information with others.
          </div>
          <div class="text-body2 q-mb-md">
            e. Prohibited Content: Users are strictly prohibited from uploading,
            posting, or sharing any content on the Prompt Pal platform that
            includes hate speech, explicit or offensive material, copyrighted
            content, or any content that violates the rights of others.
          </div>
          <div class="text-body2 q-mb-md">
            f. Respect for Others: Users should treat other users with respect,
            refraining from engaging in harassment, discrimination, or any
            behavior that may harm or offend others.
          </div>
          <div class="text-body2 q-mb-md">
            g. Intellectual Property: Users should respect the intellectual
            property rights of others and should not use or distribute
            copyrighted material without proper authorization.
          </div>
          <div class="text-body2 q-mb-md">
            h. Prohibited Activities: Users are not allowed to engage in
            activities such as spamming, hacking attempts, data scraping, or any
            behavior that disrupts the functionality or security of the Prompt
            Pal website or app.
          </div>
          <div class="text-body2 q-mb-md">
            i. Lawful Compliance: Users should comply with all applicable laws,
            regulations, and third-party agreements while using the Prompt Pal
            platform.
          </div>
          <div class="text-body2 q-mb-md">
            j. Reporting Violations: Prompt Pal encourages users to report any
            violations of the user obligations or terms and conditions to the
            platform. A clear procedure for reporting such incidents will be
            provided.
          </div>
          <div class="text-h6">5. Intellectual Property Rights</div>
          <div class="text-body2 q-mb-md">
            a. Ownership of Intellectual Property: Prompt Pal and its licensors
            retain all rights, title, and interest in and to the Prompt Pal
            website, app, and services, including any trademarks, copyrights,
            logos, or other intellectual property displayed on or associated
            with the platform.
          </div>
          <div class="text-body2 q-mb-md">
            b. Prohibited Use of Intellectual Property: Users are strictly
            prohibited from using, copying, distributing, modifying, or creating
            derivative works of any intellectual property displayed or
            accessible through the Prompt Pal platform without explicit
            permission from the respective rights holders.
          </div>
          <div class="text-body2 q-mb-md">
            c. User-Generated Content: If users contribute any content to Prompt
            Pal, such as comments, suggestions, or other materials, they grant
            Prompt Pal a non-exclusive, worldwide, royalty-free license to use,
            reproduce, modify, adapt, publish, translate, distribute, and
            display that content for the purpose of providing the services.
          </div>
          <div class="text-body2 q-mb-md">
            d. Respect for Others' Rights: Users must respect the intellectual
            property rights of others and should not upload, post, or share any
            content that infringes upon the copyrights, trademarks, or other
            intellectual property rights of third parties.
          </div>
          <div class="text-body2 q-mb-md">
            e. Notification of Infringement: Prompt Pal is committed to
            addressing intellectual property infringement. If users believe that
            their intellectual property rights have been violated on the
            platform, they should promptly notify Prompt Pal with the relevant
            details, including the infringing content and their contact
            information.
          </div>
          <div class="text-body2 q-mb-md">
            f. Consequences of Infringement: Prompt Pal reserves the right to
            remove any infringing content and take appropriate action against
            users who repeatedly violate intellectual property rights or fail to
            comply with the policies.
          </div>
          <div class="text-h6">6. Privacy Policy</div>
          <div class="text-body2 q-mb-md">
            Prompt Pal's Privacy Policy outlines how user data is collected,
            stored, and used. By using the Prompt Pal platform, users agree to
            the terms and conditions stated in the Privacy Policy.
          </div>
          <div class="text-h6">7. Dispute Resolution</div>
          <div class="text-body2 q-mb-md">
            a. Negotiation and Mediation: In the event of any dispute,
            controversy, or claim arising out of or relating to the use of the
            Prompt Pal website, app, or services, Prompt Pal encourages users to
            first attempt to resolve the matter amicably through good-faith
            negotiation and mediation.
          </div>
          <div class="text-body2 q-mb-md">
            b. Applicable Law and Jurisdiction: Any dispute that cannot be
            resolved through negotiation or mediation shall be subject to the
            exclusive jurisdiction of the courts in Australia. These terms and
            your use of the Prompt Pal website, app, or services shall be
            governed by and construed in accordance with the laws of Australia.
          </div>
          <div class="text-body2 q-mb-md">
            c. Arbitration: If negotiation, mediation, or other informal dispute
            resolution methods fail to resolve the dispute, both parties may
            agree to submit the matter to binding arbitration. The arbitration
            shall be conducted in accordance with the rules and procedures of
            the Australian Centre for International Commercial Arbitration
            (ACICA) as in effect at the time of the dispute.
          </div>
          <div class="text-body2 q-mb-md">
            d. Waiver of Class Action: Users agree that any dispute resolution
            proceedings, whether through negotiation, mediation, arbitration, or
            litigation, will be conducted on an individual basis and not as a
            class or representative action. Users waive the right to participate
            in any collective or class-wide dispute resolution proceedings.
          </div>
          <div class="text-h6">8. Limitations of Liability</div>
          <div class="text-body2 q-mb-md">
            a. Disclaimer of Liability: By using Prompt Pal's website, app, or
            services, you agree that Prompt Pal, its founder, directors,
            employees, and agents shall not be held liable for any damages,
            losses, or liabilities arising out of or in connection with your use
            of the platform. This includes, but is not limited to, any direct,
            indirect, incidental, consequential, or special damages, whether
            based on contract, tort, strict liability, or any other legal
            theory.
          </div>
          <div class="text-body2 q-mb-md">
            b. No Warranty: Prompt Pal provides its services on an "as is" and
            "as available" basis without any warranties or representations,
            express or implied. Prompt Pal does not warrant that the platform
            will be error-free, secure, uninterrupted, or free of viruses or
            other harmful components. Users acknowledge that they use the
            platform at their own risk.
          </div>
          <div class="text-body2 q-mb-md">
            c. Third-Party Services: Prompt Pal may integrate or provide links
            to third-party services, applications, or websites for user
            convenience. Prompt Pal does not endorse or assume any
            responsibility for the content, functionality, or actions of these
            third-party services. Users are solely responsible for their
            interactions with such services.
          </div>
          <div class="text-body2 q-mb-md">
            d. Limitation of Liability: To the fullest extent permitted by law,
            the total liability of Prompt Pal and its founder, directors,
            employees, and agents for any claims, damages, losses, or
            liabilities arising out of or related to your use of the platform
            shall be limited to the amount paid by you, if any, for the use of
            our services.
          </div>
          <div class="text-body2 q-mb-md">
            e. Indemnification: Users agree to indemnify and hold Prompt Pal and
            its founder, directors, employees, and agents harmless from any
            claims, demands, losses, liabilities, costs, or expenses (including
            reasonable attorneys' fees) arising out of or in connection with
            their use of the platform, violation of these terms and conditions,
            or infringement of any rights of third parties.
          </div>
          <div class="text-h6">9. Termination</div>
          <div class="text-body2 q-mb-md">
            e. Indemnification: Users agree to indemnify and hold Prompt Pal and
            its founder, directors, employees, and agents harmless from any
            claims, demands, losses, liabilities, costs, or expenses (including
            reasonable attorneys' fees) arising out of or in connection with
            their use of the platform, violation of these terms and conditions,
            or infringement of any rights of third parties.
          </div>
          <div class="text-body2 q-mb-md">
            b. Effect of Termination: Upon termination, all rights and licenses
            granted to the user will immediately cease, and the user must
            discontinue all use of the Prompt Pal platform. Prompt Pal shall not
            be liable to the user or any third party for any consequences
            resulting from the termination or suspension of access to the
            platform.
          </div>
          <div class="text-body2 q-mb-md">
            c. Data Retention: Prompt Pal may, but is not obligated to, retain
            and store user data following termination or suspension. The
            handling of user data will be in accordance with Prompt Pal's
            privacy policy.
          </div>
          <div class="text-body2 q-mb-md">
            d. Survival of Provisions: Any provisions in these terms and
            conditions that, by their nature, should survive termination
            (including, but not limited to, intellectual property rights,
            limitations of liability, and dispute resolution provisions) shall
            continue to remain in effect after termination.
          </div>
          <div class="text-h6">10. Modifications to Terms</div>
          <div class="text-body2 q-mb-md">
            a. Right to Modify: Prompt Pal reserves the right to modify, update,
            or change these terms and conditions at any time without prior
            notice. Any modifications will become effective immediately upon
            posting on the Prompt Pal website or app. By continuing to use the
            platform after the modified terms are posted, users agree to be
            bound by the updated terms and conditions.
          </div>
          <div class="text-body2 q-mb-md">
            b. Notification of Changes: Prompt Pal will make reasonable efforts
            to notify users of any material changes to the terms and conditions.
            Users will be notified via the email address they provided during
            registration. It is the user's responsibility to ensure that their
            contact information is accurate and up to date. Prompt Pal will aim
            to send the notification within 48 hours of any changes.
          </div>
          <div class="text-body2 q-mb-md">
            c. Review of Updated Terms: Users are advised to review the updated
            terms and conditions periodically to stay informed of any
            modifications. Continued use of the Prompt Pal platform after
            changes have been made indicates acceptance of the modified terms.
          </div>
          <div class="text-body2 q-mb-md">
            d. Disagreement with Modifications: If a user disagrees with the
            modified terms and conditions, their sole recourse is to discontinue
            the use of Prompt Pal's website, app, or services.
          </div>
          <div class="text-h6">11. Severability</div>
          <div class="text-body2 q-mb-md">
            If any provision of these terms and conditions is found to be
            invalid, illegal, or unenforceable by a court of competent
            jurisdiction, such provision shall be deemed severed from the terms
            and conditions, and the remaining provisions shall continue to be
            valid and enforceable to the fullest extent permitted by law.
          </div>
          <div class="text-body2 q-mb-md">
            These Terms & Conditions constitute the entire agreement between
            Prompt Pal and the users and supersede any prior agreements or
            understandings. By using the Prompt Pal platform, you acknowledge
            that you have read, understood, and agreed to be bound by these
            terms and conditions.
          </div>
          <div class="text-body2 q-mb-md">
            If you have any questions or concerns regarding these terms and
            conditions, please contact Prompt Pal at
            <a class="text-info text-body2" href="mailto:hello@promptpal.me">
              hello@promptpal.me
            </a>
          </div>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn flat label="close" color="grey" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
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
    const modal = ref(false);
    const email = ref("");
    const myForm = ref(null);
    const isPwd1 = ref(true);
    const lastName = ref("");
    const password = ref("");
    const password1 = ref("");
    const firstName = ref("");
    const termsAgree = ref("no");
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
      myForm.value.validate().then(async (success) => {
        if (success) {
          const refById = router.currentRoute.value?.query.ref
            ? router.currentRoute.value?.query.ref
            : "";
          try {
            await register({
              email: email.value,
              password: password.value,
              lastName: lastName.value,
              firstName: firstName.value,
              refBy: refById,
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
        }
      });
    };

    return {
      isPwd,
      email,
      rules,
      modal,
      isPwd1,
      myForm,
      lastName,
      password,
      password1,
      firstName,
      termsAgree,
      registering,
      occupations,
      registerUser,
      selectedIndustry,
      selectedOccupation,
    };
  },
});
</script>
