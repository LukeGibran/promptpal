const functions = require("firebase-functions");
const { OpenAIApi, Configuration } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

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
    })
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      console.error("Error generating prompt response:", error);
      throw new functions.https.HttpsError(
        "internal",
        "Failed to generate prompt response."
      );
    });
});
