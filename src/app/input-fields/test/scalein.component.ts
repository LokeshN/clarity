import {Component, OnInit, ViewChild, ViewContainerRef} from "@angular/core";
import {Register} from "../common-registry/registry/Registry";
import {RendererUtil} from "../common-registry/utils/RendererUtil";

@Register({
        id: ScaleInComponent.ID
    })
@Component({
    moduleId: module.id,
    template: `
        <H2> Scale IN</H2>
        <div>
            <clr-dropdown [clrMenuPosition]="'bottom-right'" [clrCloseMenuOnItemClick]="true">
                <button class="btn btn-link" clrDropdownToggle>
                     Select Child Component
                    <clr-icon shape="caret down"></clr-icon>
                </button>
                <div class="dropdown-menu">
                    <button class="dropdown-item" (click)="handleDropdownClick('VSPHERE')">VSphere</button>
                    <button class="dropdown-item" (click)="handleDropdownClick('AWS')">AWS</button>
                    <button class="dropdown-item" (click)="handleDropdownClick('AZURE')">Azure</button>  
                </div>
            </clr-dropdown>
        </div>
        <div style="height:35px" #view></div>
    `
})
export class ScaleInComponent implements OnInit {

    public static ID: string = "SCALE_IN";

    constructor(private rendererUtil: RendererUtil) {
    }

    @ViewChild("view", {read: ViewContainerRef}) viewDiv: ViewContainerRef;

    ngOnInit() {
        //let rendererUtil: RendererUtil = new RendererUtil(new RendererFactory(new Registry()));
        //this.rendererUtil.renderComponent(this.viewDiv, "VSPHERE", ScaleInComponent.ID);
    }

    handleDropdownClick(component: string) {
        switch (component) {
            case "VSPHERE":
                this.viewDiv.clear();
                this.rendererUtil.renderComponent(this.viewDiv, "VSPHERE", ScaleInComponent.ID);
                break;
            case "AWS":
                this.viewDiv.clear();
                this.rendererUtil.renderComponent(this.viewDiv, "AWS", ScaleInComponent.ID);
                break;
            case "AZURE":
                this.viewDiv.clear();
                this.rendererUtil.renderComponent(this.viewDiv, "AZURE", ScaleInComponent.ID);
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