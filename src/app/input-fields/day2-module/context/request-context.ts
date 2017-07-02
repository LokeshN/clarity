import {Injectable} from "@angular/core";
import {FormLayout} from "./form-layout";
import {Message} from "./message";

/**
 * Request Context object
 */
@Injectable()
export class RequestContext {
    formLayout: FormLayout;
    message: Message;
}