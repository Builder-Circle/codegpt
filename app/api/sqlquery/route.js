import openai from "../openai/openai";

export async function POST(request) {
    try {
        const {dataRequire, alltable} = await request.json();
        let database = ""
        for (let i = 0; i < alltable.length; i++) {
            database += `Table name is ${alltable[i].tableName}, primary key is ${alltable[i].primarykey}, foreign key is ${alltable[i].foreignkey} and attributes are ${alltable[i].attributes}\n`
        }
        const chat = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                {"role": "system", "content": "You are best programmer that ever exist in the world!"},
                {"role": "user", "content": `What's the MySQL command for ${dataRequire} which in following data ${database}`}
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