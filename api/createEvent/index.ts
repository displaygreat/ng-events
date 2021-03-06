import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { Events } from "../model";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {

    const entry = new Events(req.body.name, req.body.name, req.body.author, req.body.date, req.body.time, req.body.slots);

    context.log(`Adding new entry`);

    context.bindings.projectSaver = entry;

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: entry,
    };

    context.log('Send events from Cosmos');

};

export default httpTrigger;