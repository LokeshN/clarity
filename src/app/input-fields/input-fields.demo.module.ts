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

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        ROUTING,
        Day2Module,
        FormsModule
    ],
    declarations: [
        InputFieldsDemo
    ],
    exports: [
        InputFieldsDemo
    ]
})
export default class InputFieldsDemoModule {
}