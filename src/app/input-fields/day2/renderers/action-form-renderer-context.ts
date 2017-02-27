import {Injectable} from "@angular/core";
import {ActionToContextMapper, ActionToFormMapper,
    ContextToRendererMapper} from "./mappers";
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

    private actionToContextMap: {[key: string]: string[]} = {};
    private actionToFormMap: {[key: string]: any} = {};
    private contextToRendererMap: {[key: string]: string} = {};

    constructor(private actionToContextMapper: ActionToContextMapper,
                private actionToFormMapper: ActionToFormMapper,
                private contextToRendererMapper: ContextToRendererMapper) {
        this.actionToContextMap = actionToContextMapper.getActionToContextMap();
        this.actionToFormMap = actionToFormMapper.getActionToFormMap();
        this.contextToRendererMap = contextToRendererMapper.getContextToRendererMap();
    }

    public getRendererTypeBasedOnAction(action: string): string {
        let context: string;
        for (let key in this.actionToContextMap) {
            if (this.actionToContextMap[key].indexOf(action) !== -1) {
                context = key;
                break;
            }
        }

        return this.contextToRendererMap[context];
    }

    public getRendererFormBasedOnAction(action: string): string {
        return this.actionToFormMap[action];
    }
}