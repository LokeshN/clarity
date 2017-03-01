import {Injectable} from "@angular/core";

import {ActionFormRendererContextData} from "./action-form-renderer-context-data";

@Injectable()
export class ActionFormRendererContext {
    /*
     * Contains the layout information for rendering the dynamic forms.
     * Note: This may subjected to change.
     */
    public layout: any;
    /*
     * Contains the data like header to show in popup, context info like the selected deployment,
     * selected blueprint information etc.
     * Note: This may subjected to change.
     */
    public contextData: ActionFormRendererContextData;

    constructor() {}
}