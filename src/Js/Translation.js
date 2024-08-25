"use client";

import { GoogleGenerativeAI } from "@google/generative-ai";

export async function getTranslation(text, targetLang) {
  const apiKey = "API-KEY"; // Replace with your Google API key
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

