import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "../../../clarity-angular";
import {RequestActionComponent} from "./request-action.component";
import {ActionFormRendererFactory} from "./renderers/action-form-renderer-factory";
import {ActionFormRendererContext} from "./renderers/action-form-renderer-context";
import {ContextMapper} from "./renderers/context-mapper";
import {APP_CONFIG, CONFIG} from "./renderers/config";
import {ScaleInActionComponent} from "./actions/scalein-action.component";
import {ScaleOutActionComponent} from "./actions/scaleout-action.component";
import {DynamicRowDataMapper} from "./actions/dynamic/dynamic-row-data-mapper";
import {DynamicLayoutComponent} from "./actions/dynamic/dynamic-layout-component";
import {DynamicComponent} from "./actions/dynamic/dynamic-component";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule
    ],
    declarations: [
        RequestActionComponent,
        ScaleInActionComponent,
        ScaleOutActionComponent,
        DynamicLayoutComponent,
        DynamicComponent
    ],
    providers: [
        ActionFormRendererFactory,
        ActionFormRendererContext,
        ContextMapper,
        DynamicRowDataMapper,
        {provide: APP_CONFIG, useValue: CONFIG}
    ],
    exports: [
        RequestActionComponent
    ],
    entryComponents: [
        ScaleInActionComponent,
        ScaleOutActionComponent,
        DynamicLayoutComponent
    ]
})
export class Day2Module {

}