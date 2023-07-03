<template>
  <q-page>
    <div class="row justify-center align-center q-mb-lg">
      <div class="col-xs-12 col-12-sm col-md-8 col-lg-5">
        <div class="row">
          <div class="col-12">
            <q-card
              class="no-shadow q-pa-xs q-pb-md"
              style="border: 1px solid #ccc"
            >
              <q-card-section>
                <div class="row justify-center items-center">
                  <div class="col-3">
                    <div class="column content-center">
                      <q-img
                        src="~assets/logo_initial.png"
                        style="height: 75px; width: 130px"
                        fit="scale-down"
                      />
                      <div class="text-subtitle2 text-center">
                        <span class="prompt-color">Prompt </span>
                        <span class="pal-color">Pal</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-9">
                    <div class="text-h5">Privacy Policy</div>
                    <div class="text-subtitle text-grey-7">
                      Last updated: 27.06.2023
                    </div>
                  </div>
                </div>
              </q-card-section>
              <q-card-section class="q-px-md">
                <q-separator />
              </q-card-section>
              <q-card-section class="q-pa-none">
                <q-scroll-area
                  :thumb-style="thumbStyle"
                  :bar-style="barStyle"
                  class="q-pa-md q-px-lg terms-privacy-height"
                >
                  <q-card-main>
                    <div class="text-body2 q-mb-sm">
                      At PromptPal, we are committed to protecting your privacy
                      as a user of our website and services. We value the
                      information you provide and adhere to industry-standard
                      privacy practices. Please read our privacy policy below
                      carefully.
                    </div>
                    <div class="text-h6">Information we collect from you</div>
                    <div class="text-body2 q-mb-md">
                      In the course of your visits to our website or use of our
                      services, we may collect the following information:
                      <ul>
                        <li class="text-body2">Name</li>
                        <li class="text-body2">Email address</li>
                        <li class="text-body2">Company name (if applicable)</li>
                        <li class="text-body2">Telephone number</li>
                        <li class="text-body2">IP address</li>
                        <li class="text-body2">
                          Usage data (such as access dates and times, pages
                          visited, and referring website)
                        </li>
                        <li class="text-body2">Support queries or feedback</li>
                      </ul>
                    </div>
                    <div class="text-h6">How we use your information</div>
                    <div class="text-body2 q-mb-md">
                      We use the information we collect to deliver and improve
                      our services, including:
                      <ul>
                        <li class="text-body2">
                          Providing the requested services and fulfilling your
                          inquiries
                        </li>
                        <li class="text-body2">
                          Communicating with you, including responding to your
                          inquiries and providing technical support
                        </li>
                        <li class="text-body2">
                          Personalizing your experience on our website
                        </li>
                        <li class="text-body2">
                          Analyzing and improving our services, including
                          measuring user satisfaction and conducting research
                          and development
                        </li>
                        <li class="text-body2">
                          Notifying you about updates, new features, or offers
                          related to our services, if you have opted to receive
                          such communications
                        </li>
                      </ul>
                    </div>
                    <div class="text-h6">
                      Sharing your information with third parties
                    </div>
                    <div class="text-body2 q-mb-md">
                      We do not sell or trade your personal information to third
                      parties for marketing purposes. However, we may share your
                      information with trusted service providers who assist us
                      in operating our website and delivering our services,
                      subject to strict confidentiality obligations. These
                      service providers are authorized to use your personal
                      information only as necessary to provide services to us.
                    </div>
                    <div class="text-body2 q-mb-md">
                      We may also disclose your information if required by law
                      or in response to valid legal requests, such as court
                      orders or government regulations.
                    </div>
                    <div class="text-h6">Data Security and Retention</div>
                    <div class="text-body2 q-mb-md">
                      We take appropriate measures to protect the security and
                      integrity of your personal information. We use
                      industry-standard security technologies and procedures to
                      safeguard your data from unauthorized access, use, or
                      disclosure.
                    </div>
                    <div class="text-body2 q-mb-md">
                      We retain your personal information only for as long as
                      necessary to fulfil the purposes outlined in this privacy
                      policy or as required by law. When your personal
                      information is no longer needed, we will securely dispose
                      of or anonymize it.
                    </div>
                    <div class="text-h6">Cookies and Tracking technologies</div>
                    <div class="text-body2 q-mb-md">
                      Our website may use cookies or similar tracking
                      technologies to enhance your browsing experience and
                      collect information about how you interact with our site.
                      You can control cookies through your browser settings and
                      opt-out of certain tracking technologies. However, please
                      note that disabling cookies may affect the functionality
                      of our website.
                    </div>
                    <div class="text-h6">Links to third-party websites</div>
                    <div class="text-body2 q-mb-md">
                      Our website may contain links to third-party websites or
                      services. We are not responsible for the privacy practices
                      or content of those websites. We encourage you to read the
                      privacy policies of any third-party websites you visit.
                    </div>
                    <div class="text-h6">Changes to this Privay Policy</div>
                    <div class="text-body2 q-mb-md">
                      We may update this privacy policy from time to time to
                      reflect changes in our practices or legal requirements.
                      Any updates will be posted on this page, and the "last
                      updated" date will be revised accordingly. We encourage
                      you to review this privacy policy periodically.
                    </div>
                    <div class="text-h6">Contact us</div>
                    <div class="text-body2 q-mb-md">
                      If you have any questions, concerns, or requests regarding
                      this privacy policy or the handling of your personal
                      information, please contact us at
                      <a
                        class="text-info text-body2"
                        href="mailto:hello@promptpal.me"
                      >
                        hello@promptpal.me
                      </a>
                      . We will strive to respond to your inquiries in a timely
                      manner.
                    </div>
                  </q-card-main>
                </q-scroll-area>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PrivacyPolicy",
  setup() {
    return {
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
