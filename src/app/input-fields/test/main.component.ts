import {Component, OnInit, ViewChild, ViewContainerRef} from "@angular/core";
import {RendererUtil} from "../common-registry/utils/RendererUtil";
//import {RendererFactory} from "../ui-factory/utils/RendererFactory";
//import {Registry} from "../ui-factory/registry/Registry";

@Component({
    moduleId: module.id,
    selector: "main",
    template: `
        <div>
            <!--div>
                Type: <input type="text" [(ngModel)]="parentType"/>
                
            </div-->
            <div>
            <clr-dropdown [clrMenuPosition]="'bottom-right'" [clrCloseMenuOnItemClick]="true">
                <button class="btn btn-link" clrDropdownToggle>
                     Select Action Type
                    <clr-icon shape="caret down"></clr-icon>
                </button>
                <div class="dropdown-menu">
                    <button class="dropdown-item" (click)="handleDropdownClick('SCALE_IN')">Scale In</button>
                    <button class="dropdown-item" (click)="handleDropdownClick('SCALE_OUT')">Scale Out</button>
                </div>
            </clr-dropdown>
        </div>
            <div #view></div>
        </div>
    `
})
export class MainComponent implements OnInit {

    parentType: string = "SCALE_IN";

    constructor(private rendererUtil: RendererUtil) {
    }

    @ViewChild("view", {read: ViewContainerRef}) viewDiv: ViewContainerRef;

    ngOnInit() {
        //let rendererUtil: RendererUtil = new RendererUtil(new RendererFactory(new Registry()));
        if (this.parentType === "SCALE_IN") {
            this.viewDiv.clear();
            this.rendererUtil.renderComponent(this.viewDiv, this.parentType);
        }
    }

    /*ngOnChanges() {
        if (this.parentType === "SCALE_IN") {
            this.viewDiv.clear();
            this.rendererUtil.renderComponent(this.viewDiv, this.parentType);
        }
    }*/

    handleDropdownClick(type: string) {
        switch (type) {
            case "SCALE_IN":
                this.viewDiv.clear();
                this.rendererUtil.renderComponent(this.viewDiv, type);
                break;
            case "SCALE_OUT":
                this.viewDiv.clear();
                this.rendererUtil.renderComponent(this.viewDiv, type);
                break;
            default:
                break;
        }
    }

    clearContents(element: any): void {
        let el: Node = element.nativeElement;
        while (el.firstChild) {
            el.removeChild(el.firstChild);
        }
    }
}