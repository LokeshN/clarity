import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Registry} from "./registry/Registry";
import {RendererFactory} from "./utils/RendererFactory";
import {RendererUtil} from "./utils/RendererUtil";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
    ],
    providers: [
        Registry,
        RendererUtil,
        RendererFactory
    ],
    exports: [
    ]
})
export class ProviderUIModule {


}