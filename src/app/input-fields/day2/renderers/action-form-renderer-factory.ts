import {Injectable} from "@angular/core";

import {IRenderer} from "./IRenderer";
import {ActionFormRendererContext} from "./action-form-renderer-context";
import {ContextMapper} from "./context-mapper";
import {StaticActionFormRenderer} from "./static-action-form-renderer";
import {DynamicActionFormRenderer} from "./dynamic-action-form-renderer";
import {Context} from "./config";

@Injectable()
export class ActionFormRendererFactory {
    constructor (private context: ActionFormRendererContext,
                 private mapper: ContextMapper) {}

    public getRenderer(action: string): IRenderer {
        let type: string = this.mapper.getRendererTypeBasedOnAction(action);
        switch (type) {
            case Context.STATIC:
                return new StaticActionFormRenderer(this.context, this.mapper);
            case Context.DYNAMIC:
                return new DynamicActionFormRenderer(this.context, this.mapper);
            default:
                return null;
        }
   }
}