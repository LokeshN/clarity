import {RequestContext} from "../context/request-context";

export class BaseRequestComponent {
    protected requestContext: RequestContext;

    setContext(requestContext: RequestContext): void {
        this.requestContext = requestContext;
    }
}