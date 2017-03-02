import {IRenderer} from "./IRenderer";
import {ActionFormRendererContext} from "./action-form-renderer-context";
import {ContextConfigMapper} from "./context-config-mapper";

export class DynamicActionFormRenderer implements IRenderer {

    constructor(private context: ActionFormRendererContext,
                private mapper: ContextConfigMapper) {
        this.init();
    }

    init(): void {
        this.setLayoutData();
    }

    getRootComponent(action: string): any {
        return this.mapper.getRendererFormBasedOnAction(action);
    }

    private setLayoutData() {
        //call the layout form REST and set the layout to the context
        this.context.layout = {};
    }

}