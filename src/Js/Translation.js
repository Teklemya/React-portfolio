"use client";

import { GoogleGenerativeAI } from "@google/generative-ai";

export async function getTranslation(text, targetLang) {
  const apiKey = "API-KE"; // Replace with your Google API key
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  try {
    const prompt = `Translate the name "${text}" to ${targetLang}.`;
    const response = await model.generateContent(prompt);

    console.log("API Response:", response); // Log the entire response for inspection

    if (response && response.candidates && response.candidates.length > 0) {
      const translatedText = response.candidates[0].content.parts[0].text;
      return translatedText;
    } else {
      console.error("Unexpected API response structure:", response);
      throw new Error("Unexpected API response structure");
    }
  } catch (error) {
    console.error("Error during translation:", error);
    return ` ${text}`;
  }
}

// export async function getTranslation(text, targetLang) {
//     const apiKey = 'open ai api key'; // Replace with your OpenAI API key
//     const url = `chat completion api url`; // Replace with the Chat Completion API URL
//     try {
//     const response = await fetch(url, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${apiKey}`
//         },
//         body: JSON.stringify({
//             model: "gpt-3.5-turbo",
//             messages: [
//                 { role: "system", content: "You are a helpful assistant that translates text into different languages." },
//                 { role: "user", content: `Translate the name "${text}" to ${targetLang}.` }
//             ]
//         })
//     });

//     const data = await response.json();
//     console.log(data);

//      // Check for API errors
//      if (data.error) {
//         console.error('API Error:', data.error);
//         throw new Error(data.error.message); // This will be caught by the catch block
//     }
//     // Check if choices exist and have content
//     if (data.choices && data.choices.length > 0) {
//         const translatedText = data.choices[0].message.content.trim();
//         return translatedText;
//     } else {
//         throw new Error('Unexpected API response structure');
//     }
// } catch (error) {
//     console.error('Error during translation:', error);
//     // return `Error translating ${text}`;
// }

// }
