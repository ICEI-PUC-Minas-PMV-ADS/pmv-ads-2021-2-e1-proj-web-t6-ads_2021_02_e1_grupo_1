# Programação de Funcionalidades

Nesta sessão são mostradas as telas correspondentes a cada funcionalidade do sistema. As instruções de acesso e o endereço (URL) da página são apresentados em seguida.

## Recomendação de vendedores (RF-07)

A recomendação de vendedores ocorre na tela principal do sistema por meio da exibição da imagem e nome da lista de vendedores recomendados em um slider do tipo “carrossel”. As informações dos vendedores são guardadas no local storage em uma estrutura de dados baseada em JSON. A figura abaixo demonstra essa funcionalidade abaixo do texto “vendedores recomendados na sua região”.

![homepage](https://user-images.githubusercontent.com/74699119/138290517-fc4b6a6f-6b1a-4b23-9f92-777fb2de319f.png)

### Requisitos atendidos
-	RF-07
 
### Artefatos da funcionalidade
-	index.html
-	common.js
-	index.js
-	style.css
-	imagens das lojas contidas na pasta “imagens”

### Estrutura de Dados

```
"listaVendedores" : [
    {
        "numero_lista" : "1",
        "nome" : "Loja 1",
        "imagem" : "imagens/loja_doces.jpg",
    },
    {
        "numero_lista" : "2",
        "nome" : "Loja 2",
        "imagem" : "imagens/loja_massas.jpg",
    },
    {
        "numero_lista" : "3",
        "nome" : "Loja 3",
        "imagem" : "imagens/loja_vegan.jpg",
    },
    {
        "numero_lista" : "4",
        "nome" : "Loja 4",
        "imagem" : "imagens/loja_cupcakes.jpg",
    },
  ]
```

### Instruções de acesso
1.	Faça o download do arquivo do projeto (ZIP) ou clone do projeto no GitHub;
2.	Descompacte o arquivo em uma pasta específica;
3.	Abra o Visual Studio Code e execute o Live Server;
4.	Abra um navegador de Internet e informe a seguinte URL:Cancel changes
http://localhost:5500/index.html 
5.	A recomendação de vendedores aparece na página inicial “index.html” logo abaixo do texto “Vendedores recomendados na sua região”.

# Modal de seleção de endereço (RF-01 e RF-02)

O modal de seleção de endereço pode ser acessado da maioria das páginas do sistema por meio do cabeçalho, ele permite ao usuário informar seu endereço digitando-o no espaço “Inserir meu endereço” e clicando no botão de “Mudar Endereço”. Este endereço será futuramente utilizado para determinar os vendedores que realizam entregas para sua localização, bem como servir de endereço para a entrega. A informação é guardada como um item separado no local storage. A figura abaixo demonstra a funcionalidade.

![modalendereco](https://user-images.githubusercontent.com/74699119/138291143-653c9f30-faae-4bee-b314-6c02b1eaef0f.png)

### Requisitos atendidos
-	RF-01 
-	RF-02

### Artefatos da funcionalidade
-	Todos os arquivos html do projeto que possuem cabeçalho
-	common.js
-	style.css
-	location_icon.png

### Instruções de acesso
1.	Faça o download do arquivo do projeto (ZIP) ou clone do projeto no GitHub;
2.	Descompacte o arquivo em uma pasta específica;
3.	Abra o Visual Studio Code e execute o Live Server;
4.	Abra um navegador de Internet e informe a seguinte URL:
http://localhost:5500/index.html 
5.	O modal de seleção de endereço pode ser acessado de qualquer página que possua o cabeçalho (a primeira delas sendo a página “index.html”). Para acessar a funcionalidade, clique sob o campo de “Entrega para:”.

# Cadastrar usuário (RF-02)
A tela de cadastro permite que o usuário crie uma conta afim de guardar suas informações para uso futuro no site. No momento do cadastro, o usuário poderá escolher se cadastrar como cliente (conta usada para comprar produtos dos vendedores cadastrados no site) ou vendedor (conta usada para cadastrar uma nova loja/vendedor, permitindo que este crie e customize uma página de “mini-website” dentro da plataforma). Para o usuário que deseje se cadastrar como vendedor, devem ser informados o CNPJ e nome fantasia de seu empreendimento. Após o cadastro bem sucedido, as informações submetidas ficam salvas no local storage em uma estrutura de dados baseada em JSON. As figuras abaixo demonstram a funcionalidade e as informações exigidas para o cadastro como cliente ou vendedor.

![cadastrocliennte](https://user-images.githubusercontent.com/74699119/138291327-9fd63829-aa1c-4b5a-8650-045e3168a607.png)

![cadastrovendedor](https://user-images.githubusercontent.com/74699119/138291515-a37e8f89-ce28-4fef-bead-4f0d97817afd.png)

### Requisitos atendidos
-	RF-02

### Artefatos da funcionalidade
-	cadastro.html
-	common.js
-	cadastro.js
-	style.css
-	logo.png

### Estrutura de Dados

```
"listaUsuarios" : [
    {
        "clienteVendedor" : "cliente"
        "cnpj" : "none"
        "email" : "usuario1@email.com"
        "nascimento" : "2021-10-01"
        "nome" : "Usuario 1"
        "nomeLoja" : "none"
        "senha" : "senha"
        "sobrenome" : "Usuario 1"
    },
    {
        "clienteVendedor" : "vendedor"
        "cnpj" : "99.999.999/0001-99"
        "email" : "usuario2@email.com"
        "nascimento" : "2021-10-01"
        "nome" : "Usuario 2"
        "nomeLoja" : "Loja do Usuario 2"
        "senha" : "senha2"
        "sobrenome" : "Usuario 2"    
     },
  ]
```

### Instruções de acesso
1.	Faça o download do arquivo do projeto (ZIP) ou clone do projeto no GitHub;
2.	Descompacte o arquivo em uma pasta específica;
3.	Abra o Visual Studio Code e execute o Live Server;
4.	Abra um navegador de Internet e informe a seguinte URL:
http://localhost:5500/cadastro.html 
5.	Para trocar entre o formulário de cadastro de cliente ou vendedor, basta marcar a opção.

# Login de usuário (RF-02)
A tela de login de usuário permite que o usuário já cadastrado acesse sua conta. Essa funcionalidade utiliza as informações guardadas no local storage pela funcionalidade de cadastro para verificar se o e-mail informado corresponde a alguma conta e se a senha informada para aquele e-mail está correta. Caso confirmadas as informações, o login é realizado e a sessão é iniciada. O Id e informações do usuário logado são armazenadas no local storage (quando nenhum usuário está logado, o Id possui o valor “-1”), essas informações são utilizadas pelo restante do sistema para saber se há um usuário logado e quais suas informações.

![login](https://user-images.githubusercontent.com/74699119/138291700-24f376aa-255c-4f63-8fe1-4e05d1a9a51d.png)

### Requisitos atendidos
-	RF-02

### Artefatos da funcionalidade
-	login.html
-	common.js
-	login.js
-	style.css
-	logo.png

### Instruções de acesso
1.	Faça o download do arquivo do projeto (ZIP) ou clone do projeto no GitHub;
2.	Descompacte o arquivo em uma pasta específica;
3.	Abra o Visual Studio Code e execute o Live Server;
4.	Abra um navegador de Internet e informe a seguinte URL:
http://localhost:5500/login.html

# Menu da conta do usuário (RF-02)
O menu da conta do usuário pode ser acessado de qualquer página do sistema que contenha um cabeçalho quando há um usuário logado. Ao clicar na opção “Minha conta”, um menu “dropdown” contendo opções relacionadas à conta do usuário cadastrado é exibido. Ao clicar na opção “sair”, o usuário pode também encerrar sua sessão realizando o logoff da conta.

![menuusuario](https://user-images.githubusercontent.com/74699119/138291844-b7805f39-9692-4200-967a-4b8380b08a1c.png)

### Requisitos atendidos
-	RF-02

### Artefatos da funcionalidade
-	Todos os arquivos html do projeto que possuem cabeçalho
-	common.js
-	style.css

### Instruções de acesso
1.	Faça o download do arquivo do projeto (ZIP) ou clone do projeto no GitHub;
2.	Descompacte o arquivo em uma pasta específica;
3.	Abra o Visual Studio Code e execute o Live Server;
4.	Abra um navegador de Internet e informe a seguinte URL:
http://localhost:5500/index.html
5.	Realize o cadastro e login (conforme explicado nas funcionalidades anteriores) e clique sob o campo “Minha conta” em qualquer página contendo o cabeçalho (incluindo a página index.html).
