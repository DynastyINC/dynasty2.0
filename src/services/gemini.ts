import { GoogleGenAI, Type } from "@google/genai";
import { OracleResponse } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getOracleInsight = async (query: string): Promise<OracleResponse> => {
  try {
    const model = 'gemini-2.5-flash';
    
    const responseSchema = {
      type: Type.OBJECT,
      properties: {
        verdict: {
          type: Type.STRING,
          description: "A short, punchy 2-3 word verdict (e.g., 'HIGH POTENTIAL', 'RED FLAGS', 'MARKET LEADER')."
        },
        analysis: {
          type: Type.STRING,
          description: "A sophisticated, edgy paragraph analyzing the query from a venture capital perspective. Focus on market fit, tech innovation, and tokenomics."
        },
        score: {
          type: Type.INTEGER,
          description: "A viability score from 0 to 100."
        }
      },
      required: ["verdict", "analysis", "score"]
    };

    const systemInstruction = `You are 'DYNASTY AI', the digital brain of a high-end crypto venture capital firm. 
    You are edgy, sophisticated, and skeptical but visionary. 
    You analyze pitches or crypto market trends with a critical VC lens.
    Keep your tone professional, slightly futuristic, and authoritative. 
    Do not be overly enthusiastic; be realistic and calculating.`;

    const result = await ai.models.generateContent({
      model,
      contents: query,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema: responseSchema,
      }
    });

    const text = result.text;
    if (!text) throw new Error("No response from Oracle");

    return JSON.parse(text) as OracleResponse;

  } catch (error) {
    console.error("Oracle Error:", error);
    return {
      verdict: "SYSTEM ERROR",
      analysis: "Unable to connect to the Dynasty neural network. Please try again later.",
      score: 0
    };
  }
};