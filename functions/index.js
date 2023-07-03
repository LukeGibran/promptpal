const marked = require("marked");
const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");

const app = express();

const { Stripe } = require("stripe");
const stripe = new Stripe(process.env.STRIPE_API_KEY);

function convertToHtml(plainTextResponse) {
  return marked.parse(plainTextResponse);
}

const { ChatOpenAI } = require("langchain/chat_models/openai");
const { HumanChatMessage, SystemChatMessage } = require("langchain/schema");

app.use(cors({ origin: "*", optionsSuccessStatus: 200 }));

app.post("/generateResponse", async (req, res) => {
  const { query } = req.body;
  try {
    res.writeHead(200, {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
    });

    const sendToken = (data) => {
      res.write(`${data}`);
    };
    const chat = new ChatOpenAI({
      openAIApiKey: process.env.OPENAI_API_KEY,
      temperature: 0.9,
      streaming: true,
      callbacks: [
        {
          async handleLLMNewToken(token) {
            sendToken(token);
          },
          async handleLLMEnd(done) {
            console.log(done);
          },
          handleLLMError: async (e) => {
            console.log(e);
          },
        },
      ],
    });

    await chat.call([
      new SystemChatMessage(
        "You are a helpful assistant that answers questions as best as you can."
      ),
      new HumanChatMessage(query),
    ]);

    res.end();
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

exports.widgets = functions.https.onRequest(app);

// exports.generatePromptResponse = functions.https.onCall(async function (
//   data,
//   context
// ) {
//   try {
//     const chat = new ChatOpenAI({
//       openAIApiKey: process.env.OPENAI_API_KEY,
//       temperature: 0.9,
//     });

//     const response = await chat.call([
//       new SystemChatMessage(
//         "You are a helpful assistant that answers questions as best as you can."
//       ),
//       new HumanChatMessage(data),
//     ]);

//     console.log(response);
//     return response.text;
//   } catch (error) {
//     console.error("Error generating prompt response:", error);
//     throw new functions.https.HttpsError(
//       "internal",
//       "Failed to generate prompt response."
//     );
//   }
// });

// exports.generatePromptResponse = functions.https.onCall(function (
//   data,
//   context
// ) {
//   return openai
//     .createChatCompletion({
//       model: "gpt-3.5-turbo-0613",
//       messages: [
//         { role: "system", content: "You are a helpful assistant." },
//         { role: "user", content: data },
//       ],
//       format: "html",
//     })
//     .then(({ data }) => {
//       return convertToHtml(data.choices[0].message.content);
//     })
//     .catch((error) => {
//       console.error("Error generating prompt response:", error);
//       throw new functions.https.HttpsError(
//         "internal",
//         "Failed to generate prompt response."
//       );
//     });
// });

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
