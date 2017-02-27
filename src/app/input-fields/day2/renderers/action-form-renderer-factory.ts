import {Injectable} from "@angular/core";

import {IRenderer} from "./IRenderer";
import {ActionFormRendererContext} from "./action-form-renderer-context";
import {StaticActionFormRenderer} from "./static-action-form-renderer";
import {DynamicActionFormRenderer} from "./dynamic-action-form-renderer";
import {STATIC_RENDERER, DYNAMIC_RENDERER} from "../constants/action-renderer-constants";

@Injectable()
export class ActionFormRendererFactory {
    constructor (private context: ActionFormRendererContext) {}

    public getRenderer(action: string): IRenderer {
        let type: string = this.context.getRendererTypeBasedOnAction(action);
        switch (type) {
            case STATIC_RENDERER:
                return new StaticActionFormRenderer(this.context);
            case DYNAMIC_RENDERER:
                return new DynamicActionFormRenderer(this.context);
            default:
                return null;
        }
   }
}