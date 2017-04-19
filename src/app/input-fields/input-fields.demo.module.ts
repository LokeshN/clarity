/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "../../clarity-angular";
import {ROUTING} from "./input-fields.demo.routing";
import {InputFieldsDemo} from "./input-fields.demo";
import {FormsModule} from "@angular/forms";
import {Day2Module} from "./day2/day2.module";
import {ProviderUIModule} from "./ui-factory/provider-ui.module";
import {RendererFactory} from "./ui-factory/utils/RendererFactory";
import {RendererUtil} from "./ui-factory/utils/RendererUtil";
import {Registry} from "./ui-factory/registry/Registry";
import {MainComponent} from "./test/main.component";
import {ScaleInComponent} from "./test/scalein.component";
import {VsphereComponent} from "./test/vsphere.component";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        ROUTING,
        Day2Module,
        FormsModule,
        ProviderUIModule
    ],
    declarations: [
        InputFieldsDemo,
        MainComponent,
        ScaleInComponent,
        VsphereComponent
    ],
    providers: [
        RendererFactory,
        RendererUtil,
        Registry
    ],
    exports: [
        InputFieldsDemo
    ],
    entryComponents: [
        ScaleInComponent,
        VsphereComponent
    ]
})
export default class InputFieldsDemoModule {
}