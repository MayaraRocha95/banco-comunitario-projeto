# Banco Comunitário

Este é um projeto de um sistema bancário simples desenvolvido com NestJS. O sistema permite gerenciar clientes, contas bancárias e gerentes, com funcionalidades para adicionar, remover e modificar contas e clientes.

## Arquitetura Hexagonal

O projeto utiliza a Arquitetura Hexagonal (também conhecida como Arquitetura de Portas e Adaptadores) para promover a separação de preocupações e tornar o sistema mais modular e testável. A arquitetura hexagonal divide a aplicação em três partes principais:

1. **Domínio**: Contém as regras de negócio e a lógica principal da aplicação.
2. **Aplicação**: Define os casos de uso e as interações entre o domínio e o mundo externo.
3. **Infraestrutura**: Implementa os adaptadores e interfaces para comunicação com sistemas externos, como bancos de dados, APIs, etc.





## Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/MayaraRocha95/banco-comunitario-projeto
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd banco-comunitario-projeto
    ```

3. Instale as dependências:

    ```bash
    npm install
    ```

## Execução

Para iniciar o servidor de desenvolvimento:

```bash
npm run start:dev
