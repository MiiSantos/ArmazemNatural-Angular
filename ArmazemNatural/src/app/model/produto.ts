import { categoria } from "./Categoria"

export class produto {
    public id: number
    public nome: string
    public descricao: string
    public preco: number
    public marca: string
    public fornecedor: string
    public qtdEstoque: number
    public imagem: string
    public peso: number
    public ativo: boolean
    public categoria: categoria
}