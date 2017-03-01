import {Injectable, Inject} from "@angular/core";

import {APP_CONFIG} from "./config";
import {BaseActionComponent} from "../actions/base-action.component";


@Injectable()
export class ContextMapper {

    constructor(@Inject(APP_CONFIG) private config: any) {
    }

    public getRendererTypeBasedOnAction(action: string): string {
        let rendererType: string;
        for (let prop in this.config) {
            if (this.config[prop].id.indexOf(action) !== -1) {
                rendererType = this.config[prop].context;
                break;
           }
        }

        return rendererType;
    }

    public getRendererFormBasedOnAction(action: string): BaseActionComponent {
        let form: BaseActionComponent;
        for (let prop in this.config) {
            if (this.config[prop].id.indexOf(action) !== -1) {
                form = this.config[prop].view;
                break;
            }
        }

        return form;
    }
}