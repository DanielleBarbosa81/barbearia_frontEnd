export interface SaveClienteRequest{
  nome: string,
  email: string,
  telefone: string
}

export interface UpdateClienteRequest{
  nome: string,
  email: string,
  telefone: string
}

export interface SaveClienteResponse{
  id: number,
  nome: string,
  email: string,
  telefone: string
}

export interface UpdateClienteResponse{
  id: number,
  nome: string,
  email: string,
  telefone: string
}

export interface ListClienteResponse{
  id: number,
  nome: string,
  email: string,
  telefone: string
}

export interface DetailClienteResponse{
  id: number,
  nome: string,
  email: string,
  telefone: string
}
