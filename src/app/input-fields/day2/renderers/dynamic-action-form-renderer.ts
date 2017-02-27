import {IRenderer} from "./IRenderer";
import {ActionFormRendererContext} from "./action-form-renderer-context";

export class DynamicActionFormRenderer implements IRenderer {

    constructor(private context: ActionFormRendererContext) {

    }

    getRootComponent(action: string): any {
        return this.context.getRendererFormBasedOnAction(action);
    }

}