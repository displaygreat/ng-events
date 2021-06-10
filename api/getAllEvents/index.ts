import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { Events } from "../model";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    // context.log('TypeScript queue trigger function processed');
    // context.log("Found Events" + context.bindings.events);
    
    context.res.json({
    text: "Hello from Get All Events",
    });
    
    const name = req.body.name;
    context.log(`get name`);
    context.bindings.events = name;

    context.res = {
        status: 200, /* Defaults to 200 */
        body: name,
    };
};

export default httpTrigger;