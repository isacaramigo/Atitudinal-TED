export interface Paciente{
    nome: string
    setor: string
    prioridade?: string

}

export interface Triagem{
    fila: Paciente[]
    nivel: Prioridade[]
}

export interface Prioridade{

    // let estavel= estavel;

    

}
export interface Setores{
    setores: setor[]
}