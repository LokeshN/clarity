import {Injectable} from "@angular/core";
import {STATIC_CONTEXT, DYNAMIC_CONTEXT} from "../constants/action-context-constants";
import {SCALE_IN, SCALE_OUT, CHANGE_LEASE} from "../constants/action-constants";
import {STATIC_RENDERER, DYNAMIC_RENDERER} from "../constants/action-renderer-constants";

import {ScaleInActionComponent} from "../actions/scalein-action.component";
import {ScaleOutActionComponent} from "../actions/scaleout-action.component";
import {DynamicLayoutComponent} from "../actions/dynamic/dynamic-layout-component";

@Injectable()
export class ActionToContextMapper {
    private actionToContextMap: {[key: string]: string[]} = {};

    constructor() {
        this.setActionToContext(SCALE_IN, STATIC_CONTEXT);
        this.setActionToContext(SCALE_OUT, STATIC_CONTEXT);
        this.setActionToContext(CHANGE_LEASE, DYNAMIC_CONTEXT);
    }

    public getActionToContextMap(): {[key: string]: string[]} {
        return this.actionToContextMap;
    }

    private setActionToContext(action: string, context: string): void {
        if (!this.actionToContextMap[context]) {
            this.actionToContextMap[context] = [];
        }

        this.actionToContextMap[context].push(action);
    }


}

@Injectable()
export class ActionToFormMapper {
    private actionToFormMap: {[key: string]: any} = {};

    constructor() {
        this.setActionToForm(SCALE_IN, ScaleInActionComponent);
        this.setActionToForm(SCALE_OUT, ScaleOutActionComponent);
        this.setActionToForm(CHANGE_LEASE, DynamicLayoutComponent);

    }

    public getActionToFormMap(): {[key: string]: string} {
        return this.actionToFormMap;
    }

    private setActionToForm(action: string, form: any): void {
        this.actionToFormMap[action] = form;
    }
}

@Injectable()
export class ContextToRendererMapper {
    private contextToRendererMap: {[key: string]: string} = {};

    constructor() {
        this.setContextToRenderer(STATIC_CONTEXT, STATIC_RENDERER);
        this.setContextToRenderer(DYNAMIC_CONTEXT, DYNAMIC_RENDERER);
    }

    public getContextToRendererMap(): {[key: string]: string} {
        return this.contextToRendererMap;
    }

    private setContextToRenderer(context: string, renderer: string): void {
        this.contextToRendererMap[context] = renderer;
    }

}