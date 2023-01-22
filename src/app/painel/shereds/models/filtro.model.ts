import { StatusEnum } from "../enums/status.enum";
import { Status } from "./status.model";

export class Filtro {
    public periodoDe?: string;
    public periodoAte?: string;
    public status: Status;

    constructor(periodoDe?: string, periodoAte?: string, status?: Status){
        this.periodoDe = periodoDe;
        this.periodoAte = periodoAte;
        this.status = status || StatusEnum.TODAS;
    }

    public toQueryParams(): any {
        return {
            periodoDe: this.periodoDe || '',
            periodoAte: this.periodoAte || '',
            status: this.status.id.toString()
        }
    }
}