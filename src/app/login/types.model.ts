export interface LoginRequest {
    login:string;
    senha: string;
}

export interface LoginResponse {
    nome: string;
    email: string;
    token: string;
}