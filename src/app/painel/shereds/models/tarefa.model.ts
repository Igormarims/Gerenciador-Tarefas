
export class Tarefa {
    id?: string;
    nome: string;
    dataPrevistaConclusao: string;
    dataConclusao?: string;
    idUsuario?: string;

    constructor (
       
         nome: string,
         dataPrevistaConclusao: string,
        
        
        ) 
        {
            this.nome = nome
            this.dataPrevistaConclusao = dataPrevistaConclusao
        }
}