import {Component, EventEmitter, Input, Output, OnChanges, OnInit, ViewChild,
        SimpleChanges, ViewContainerRef} from "@angular/core";

import {RendererUtil} from "../common-registry/utils/RendererUtil";

@Component({
    moduleId: module.id,
    selector: "request-action",
    templateUrl: "./request-action.html"
})
export class RequestActionComponent implements OnInit, OnChanges {

    constructor(private rendererUtil: RendererUtil) {

    }

    @Input() isOpen: boolean;
    @Output("isOpenChange") isOpenChanged: EventEmitter<boolean> =
                                                new EventEmitter<boolean>(false);

    @Input() formType: string;

    @ViewChild("clrModalDialog") clrModalDialog: any;
    @ViewChild("clrModalContent", {read: ViewContainerRef}) clrModalContent: ViewContainerRef;

    ngOnInit(): void {

    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.hasOwnProperty("isOpen")) {
            let currentOpenValue = changes["isOpen"].currentValue;
            if (currentOpenValue) {
                let formType = changes["formType"] ? changes["formType"].currentValue :
                                this.formType;
                this.clrModalContent.clear();
                this.rendererUtil.renderComponent(this.clrModalContent, formType);

            }
        }
    }

    onModalOpenChange(event: boolean): void {
        this.isOpen = event;
        this.isOpenChanged.emit(event);
    }

}