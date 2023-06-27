const marked = require("marked");
const functions = require("firebase-functions");
const { OpenAIApi, Configuration } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const { Stripe } = require("stripe");
const stripe = new Stripe(process.env.STRIPE_API_KEY);

function convertToHtml(plainTextResponse) {
  return marked.parse(plainTextResponse);
}

exports.generatePromptResponse = functions.https.onCall(function (
  data,
  context
) {
  return openai
    .createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: data },
      ],
      format: "html",
    })
    .then(({ data }) => {
      return convertToHtml(data.choices[0].message.content);
    })
    .catch((error) => {
      console.error("Error generating prompt response:", error);
      throw new functions.https.HttpsError(
        "internal",
        "Failed to generate prompt response."
      );
    });
});

exports.listAllCards = functions.https.onCall(async (data, context) => {
  const paymentMethods = await stripe.paymentMethods.list({
    customer: data.customer,
    type: "card",
  });

  return paymentMethods;
});

exports.cancelSubscription = functions.https.onCall(async (data, context) => {
  const deleted = await stripe.subscriptions.del(data.text).catch((error) => {
    console.log(error);
  });

  return deleted;
});

exports.customerPortal = functions.https.onCall(async (data, context) => {
  const session = await stripe.billingPortal.sessions.create({
    customer: data.customer,
    return_url: data.url,
  });

  return session;
});
