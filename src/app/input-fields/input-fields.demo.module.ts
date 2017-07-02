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
import {Day2Module} from "./day2-module/day2.module";
import {CommonRegistryModule} from "./common-registry/common-registry.module";
import {RendererFactory} from "./common-registry/utils/RendererFactory";
import {RendererUtil} from "./common-registry/utils/RendererUtil";
import {Registry} from "./common-registry/registry/Registry";
import {MainComponent} from "./test/main.component";
import {ScaleInComponent} from "./test/scalein.component";
import {ScaleOutComponent} from "./test/scaleout.component";
import {VsphereComponent} from "./test/vsphere.component";
import {AwsComponent} from "./test/aws.component";
import {AzureComponent} from "./test/azure.component";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        ROUTING,
        Day2Module,
        FormsModule,
        CommonRegistryModule
    ],
    declarations: [
        InputFieldsDemo,
        MainComponent,
        ScaleInComponent,
        ScaleOutComponent,
        VsphereComponent,
        AwsComponent,
        AzureComponent
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
        ScaleOutComponent,
        VsphereComponent,
        AwsComponent,
        AzureComponent
    ]
})
export default class InputFieldsDemoModule {
}