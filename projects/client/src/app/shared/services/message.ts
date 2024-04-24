export class Message {
    type: string;
    message: string;
    constructor(model: any = null) {
        if (model) {
            this.type = model.type;
            this.message = model.message;
        }
    }
}
