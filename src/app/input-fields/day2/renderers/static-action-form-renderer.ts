import {IRenderer} from "./IRenderer";
import {ActionFormRendererContext} from "./action-form-renderer-context";
import {ContextMapper} from "./context-mapper";

export class StaticActionFormRenderer implements IRenderer {

    constructor(private context: ActionFormRendererContext,
                private mapper: ContextMapper) {

    }

    getRootComponent(action: string): any {
        return this.mapper.getRendererFormBasedOnAction(action);
    }

}