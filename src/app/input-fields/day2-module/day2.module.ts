import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "../../../clarity-angular";
import {CommonRegistryModule} from "../common-registry/common-registry.module";
import {RendererFactory} from "../common-registry/utils/RendererFactory";
import {RendererUtil} from "../common-registry/utils/RendererUtil";
import {Registry} from "../common-registry/registry/Registry";
import {FormRequestComponent} from "./components/form-request.component";
import {ExtensionFormRequestComponent} from "./components/extension-form-request.component";
import {FormlessRequestComponent} from "./components/formless-request.component";
import {RequestActionComponent} from "./request-action.component";


@NgModule({
    imports: [
        CommonModule,
        CommonRegistryModule,
        ClarityModule
    ],
    declarations: [
        FormRequestComponent,
        ExtensionFormRequestComponent,
        FormlessRequestComponent,
        RequestActionComponent
    ],
    providers: [
        RendererUtil,
        Registry,
        RendererFactory
    ],
    bootstrap: [
    ],
    exports: [
        RequestActionComponent
    ],
    entryComponents: [
        FormRequestComponent,
        ExtensionFormRequestComponent,
        FormlessRequestComponent
    ]
})
export class Day2Module {

}