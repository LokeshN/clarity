import {Component, EventEmitter, Input, Output, OnChanges, ViewChild,
        ComponentFactoryResolver,
        SimpleChanges, ViewContainerRef} from "@angular/core";

import {ActionFormRendererFactory} from "./renderers/action-form-renderer-factory";
import {IRenderer} from "./renderers/IRenderer";
import {ActionFormRendererContext} from "./renderers/action-form-renderer-context";

@Component({
    selector: "request-action",
    moduleId: module.id,
    templateUrl: "./request-action.html"
})
export class RequestActionComponent implements OnChanges {
    @Input() isOpen: boolean;
    @Output("isOpenChange") isOpenChanged: EventEmitter<boolean> = new EventEmitter<boolean>(false);

    @Input() action: string;

    @ViewChild("clrModalDialog") clrModalDialog: any;
    @ViewChild("clrModalContent", {read: ViewContainerRef}) clrModalContent: ViewContainerRef;

    private component: any;

    constructor (private factory: ActionFormRendererFactory,
                 private componentFactoryResolver: ComponentFactoryResolver,
                 private context: ActionFormRendererContext) {

        context.contextData = {
                                subAction: "VSPHERE"
                              };

    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.hasOwnProperty("isOpen")) {
            let currentOpenValue = changes["isOpen"].currentValue;
            if (currentOpenValue) {
                let actionName = changes["action"] ? changes["action"].currentValue :
                                this.action;
                let renderer: IRenderer = this.factory.getRenderer(actionName);
                if (renderer) {
                    let componentRef = renderer.getRootComponent(actionName);
                    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentRef);
                    this.clrModalContent.clear();
                    this.component = this.clrModalContent.createComponent(componentFactory);
                    this.component._component.validate();
                    this.clrModalDialog.open();
                } else {
                    this.clrModalContent.clear();
                    this.clrModalDialog.open();
                }
            }
        }
    }

    onModalOpenChange($event: boolean): void {
        this.isOpen = $event;
        this.isOpenChanged.emit($event);
    }

}