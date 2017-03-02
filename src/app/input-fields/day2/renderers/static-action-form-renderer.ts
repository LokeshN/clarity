import {IRenderer} from "./IRenderer";
import {ActionFormRendererContext} from "./action-form-renderer-context";
import {ContextConfigMapper} from "./context-config-mapper";

export class StaticActionFormRenderer implements IRenderer {

    constructor(private context: ActionFormRendererContext,
                private mapper: ContextConfigMapper) {
        this.init();
    }

    init(): void {
        this.setContextData();
    }

    getRootComponent(action: string): any {
        return this.mapper.getRendererFormBasedOnAction(action);
    }

    private setContextData(): void {
        //should be changed to call operations on a reducer in redux;
        this.context.contextData = {
            header: "shutdown",
            title: "shutdown",
            titleImgSrc: "http://test.com",
            contentData: {
                test: "LOKN"
            }
        };
    }

}