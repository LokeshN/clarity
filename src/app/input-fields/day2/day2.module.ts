import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "../../../clarity-angular";
import {RequestActionComponent} from "./request-action.component";
import {ActionFormRendererFactory} from "./renderers/action-form-renderer-factory";
import {ActionFormRendererContext} from "./renderers/action-form-renderer-context";
import {ContextConfigMapper} from "./renderers/context-config-mapper";
import {ConfigEnhancer} from "./renderers/config-enhancer";
import {APP_CONFIG, CONFIG} from "./renderers/config";
import {BaseActionComponent} from "./actions/base-action.component";
import {ScaleInActionComponent} from "./actions/scalein-action.component";
import {VSphereMachineComponent} from "./actions/machines/vsphere-machine.component";
import {AwsMachineComponent} from "./actions/machines/aws-machine.component";
import {AzureMachineComponent} from "./actions/machines/azure-machine.component";
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
        BaseActionComponent,
        ScaleInActionComponent,
        VSphereMachineComponent,
        AwsMachineComponent,
        AzureMachineComponent,
        ScaleOutActionComponent,
        DynamicLayoutComponent,
        DynamicComponent
    ],
    providers: [
        ActionFormRendererFactory,
        ActionFormRendererContext,
        ContextConfigMapper,
        DynamicRowDataMapper,
        {provide: APP_CONFIG, useValue: CONFIG},
        ConfigEnhancer
    ],
    exports: [
        RequestActionComponent
    ],
    entryComponents: [
        BaseActionComponent,
        ScaleInActionComponent,
        VSphereMachineComponent,
        AwsMachineComponent,
        AzureMachineComponent,
        ScaleOutActionComponent,
        DynamicLayoutComponent
    ]
})
export class Day2Module {

}