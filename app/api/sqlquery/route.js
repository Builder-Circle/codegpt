import openai from "../openai/openai";

export async function POST(request) {
    try {
        const {dataRequire, alltable} = await request.json();
        const chat = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                {"role": "system", "content": "You are best programmer that ever exist in the world!"},
                {"role": "user", "content": `What's the MySQL command for ${dataRequire} in the table which table name is ${alltable[0].tableName}, primary key is ${alltable[0].primarykey}, foreign key is ${alltable[0].foreignkey} and attributes are ${alltable[0].attributes}\n\n`}
            ],
            temperature: 0,
        });
        console.log(chat.data.choices[0].message.content)
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