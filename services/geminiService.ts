// Gemini API dependencies removed for static hosting compatibility.
// This service is now a placeholder.

export const generateAIResponse = async (
  message: string,
  history: { role: 'user' | 'model'; text: string }[]
): Promise<string> => {
  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return "AI chat capabilities are currently disabled for this static deployment.";
};