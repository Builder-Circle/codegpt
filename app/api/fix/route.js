import openai from "../openai/openai";

export async function POST(request) {
    try {
        const {content} = await request.json();
        const chat = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                {"role": "system", "content": "You are best programmer that ever exist in the world!"},
                {"role": "user", "content": `Fix the error in the following code\n\n${content}\n\n`}
            ],
            temperature: 0,
        });
        return new Response(JSON.stringify({ message: chat.data.choices[0].message.content }));
    } catch (error) {
        let code
        let message
        if (error.response) {
            code = error.response.status
            message = error.response.data
        } else {
            code = 404
            message = error.message
        }
        return new Response(JSON.stringify({ code: code, error: message }));
    }
}