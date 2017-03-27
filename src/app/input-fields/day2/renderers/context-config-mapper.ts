import {Injectable, Inject} from "@angular/core";

import {APP_CONFIG, IConfig} from "./config";
import {ConfigEnhancer} from "./config-enhancer";


@Injectable()
export class ContextConfigMapper {
    private _currentContextConfig: IConfig;

    constructor(@Inject(APP_CONFIG) private config: Array<IConfig>,
                private configEnhancer: ConfigEnhancer) {
        config = configEnhancer.enhanceConfig(config);
    }

    public getRendererTypeBasedOnAction(action: string): string {
        this._currentContextConfig = this.getCurrentContextBasedOnAction(action);
        return this._currentContextConfig.context;
    }

    public getRendererFormBasedOnAction(action: string): any {
        this._currentContextConfig = this.getCurrentContextBasedOnAction(action);
        return this._currentContextConfig.view;
    }

    public getChildRendererFormBasedOnAction(parentAction: string, childAction: string): any {
        let parentContextConfig: IConfig = this.getCurrentContextBasedOnAction(parentAction);
        this._currentContextConfig = this.getChildContextBasedOnAction(parentContextConfig, childAction);
        return this._currentContextConfig.view;
    }

    public getCurrentContextConfig(): IConfig {
        return this._currentContextConfig;
    }

    private getCurrentContextBasedOnAction(action: string): IConfig {
        let currentContextConfig: IConfig;
        for (let i = 0; i < this.config.length; i++) {
            if (this.config[i].id === action) {
                currentContextConfig = this.config[i];
                break;
            }
        }

        return currentContextConfig;
    }

    private getChildContextBasedOnAction(parentConfig: IConfig, action: string): IConfig {
        let childContextConfig: IConfig;
        for (let i = 0; i < parentConfig.children.length; i++) {
            if (parentConfig.children[i].id === action) {
                childContextConfig = parentConfig.children[i];
                break;
            }
        }

        return childContextConfig;
    }
}