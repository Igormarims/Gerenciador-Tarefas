import { Status } from "../models/status.model";

export class StatusEnum {
    static get TODAS():Status {
        return new Status(0, 'Todas')
    }

    static get EM_ABERTO():Status {
        return new Status(1, 'Em aberto')
    }

    static get CONCLUIDAS():Status{
        return new Status(2, 'Concluidas')
    }

    static todosStatus(): Status [] {
        return [
            StatusEnum.TODAS,
            StatusEnum.EM_ABERTO,
            StatusEnum.CONCLUIDAS
        ]
    }
}