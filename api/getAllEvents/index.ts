import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { Events } from "../model";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: context.bindings.events
    };
    
};

export default httpTrigger;