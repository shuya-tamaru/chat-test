import { Configuration, OpenAIApi } from "openai";
import * as dotenv from "dotenv";
dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
export async function ask(content: string, model = "gpt-3.5-turbo-0301") {
  const response = await openai.createChatCompletion({
    model,
    messages: [{ role: "user", content: content }],
  });

  const answer = response.data.choices[0].message?.content;
  console.log(answer);
}

const question = "Final Fantasy XIV の都市「ウルダハ」について教えてください";
ask(question);
