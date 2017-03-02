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

    public getCurrentContextConfig(): IConfig {
        return this._currentContextConfig;
    }

    private getCurrentContextBasedOnAction(action: string): any {
        let currentContextConfig: IConfig;
        for (let i = 0; i < this.config.length; i++) {
            if (this.config[i].id === action) {
                currentContextConfig = this.config[i];
            }
        }

        return currentContextConfig;
    }
}