# Programação de Funcionalidades

Nesta sessão são mostradas as telas correspondentes a cada funcionalidade do sistema. As instruções de acesso e o endereço (URL) da página são apresentados em seguida.

## Recomendação de vendedores (RF-06)

A recomendação de vendedores ocorre na tela principal do sistema por meio da exibição da imagem e nome da lista de vendedores recomendados em um slider do tipo “carrossel”. As informações dos vendedores são guardadas no local storage em uma estrutura de dados baseada em JSON. A figura abaixo demonstra essa funcionalidade abaixo do texto “vendedores recomendados na sua região”.

![homepage](https://user-images.githubusercontent.com/74699119/138290517-fc4b6a6f-6b1a-4b23-9f92-777fb2de319f.png)

### Requisitos atendidos
-	RF-06
 
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
       "avaliacao": "0.92"
       "carrinho": [{}]
       "catalogo": [{nome: "Brigadeiro", imagem: "imagens/produtos/brigadeiro.jpg",…},…]
       "descricao": "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
       "descricaoResumo": "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
       "formasPagamento": {online: ["cartao", "pix"], naEntrega: ["cartao", "dinheiro"]}
       "imagem": "imagens/loja_doces.jpg"
       "link": "?loja=doces-caseiros"
       "nome": "Doces Caseiros"
       "numero_lista": 1
       "precoEntrega": "6,00"
       "redesSociais": {facebook: "facebook.com", instagram: "instagram.com", twitter: "twitter.com", tiktok: "tiktok.com",…}
       "retiradaNaLoja": true
       "videoApresentacao": "https://www.youtube.com/embed/FC-IX2gQ8_Q"
    },
    {
       "avaliacao": "0.85"
       "carrinho": [{}]
       "catalogo": [{nome: "Pizza portuguesa", imagem: "imagens/produtos/pizzaportuguesa.jpg",…},…]
       "descricao": "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
       "descricaoResumo": "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
       "formasPagamento": {online: ["cartao", "pix"], naEntrega: ["cartao", "dinheiro"]}
       "imagem": "imagens/loja_massas.jpg"
       "link": "?loja=massas-congeladas"
       "nome": "Massas Congeladas"
       "numero_lista": 2
       "precoEntrega": "15,50"
       "redesSociais": {facebook: "facebook.com", instagram: "instagram.com", twitter: "twitter.com", tiktok: "tiktok.com",…}
       "retiradaNaLoja": true
       "videoApresentacao": "https://www.youtube.com/embed/FC-IX2gQ8_Q"
    },
    {
       "avaliacao": "0.67"
       "carrinho": [{}]
       "catalogo": [{},]
       "descricao": "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
       "descricaoResumo": "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
       "formasPagamento": {online: ["cartao", "pix"], naEntrega: ["cartao", "dinheiro"]}
       "imagem": "imagens/loja_vegan.jpg"
       "link": "?loja=marmitas-vegan"
       "nome": "Marmitas Vegan"
       "numero_lista": 3
       "precoEntrega": "12,50"
       "redesSociais": {facebook: "facebook.com", instagram: "instagram.com", twitter: "twitter.com", tiktok: "tiktok.com",…}
       "retiradaNaLoja": true
       "videoApresentacao": "https://www.youtube.com/embed/FC-IX2gQ8_Q"
    },
    {
       "avaliacao": "0.80"
       "carrinho": [{}]
       "catalogo": [{},]
       "descricao": "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
       "descricaoResumo": "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
       "formasPagamento": {online: ["cartao", "pix"], naEntrega: ["cartao", "dinheiro"]}
       "imagem": "imagens/loja_cupcakes.jpg"
       "link": "?loja=cupcakes-variados"
       "nome": "Cupcakes Variados"
       "numero_lista": 3
       "precoEntrega": "10,00"
       "redesSociais": {facebook: "facebook.com", instagram: "instagram.com", twitter: "twitter.com", tiktok: "tiktok.com",…}
       "retiradaNaLoja": true
       "videoApresentacao": "https://www.youtube.com/embed/FC-IX2gQ8_Q"
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
A tela de cadastro permite que o usuário crie uma conta afim de guardar suas informações para uso futuro no site. No momento do cadastro, o usuário poderá escolher se cadastrar como cliente (conta usada para comprar produtos dos vendedores cadastrados no site) ou vendedor (conta usada para cadastrar uma nova loja/vendedor, permitindo que este crie e customize uma página de “mini-website” dentro da plataforma). Para o usuário que deseje se cadastrar como vendedor, devem ser informados o CNPJ e nome fantasia de seu empreendimento. Após o cadastro bem sucedido, as informações submetidas ficam salvas no local storage em uma estrutura de dados baseada em JSON. Caso o usuário tenha se cadastrado como vendedor, uma nova loja correspondendo às informações fornecidas é adicionada à estrutura de dados "listaVendedores" mostrada anteriormente na funcionalidade "recomendação de vendedores". As figuras abaixo demonstram a funcionalidade e as informações exigidas para o cadastro como cliente ou vendedor.

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
        "cartoes" = []
        "favoritos" = {"vendedores": [{},], "produtos" : [{},],}
        "cartoes": [{nome: "Cartão 1"}, {nome: "Cartão 2"}, {nome: "Cartão 3"}]
        "clienteVendedor": "cliente"
        "cnpj": "none"
        "confirmaSenha": "senha"
        "email": "email@email.com"
        "endereco": "Selecionar endereço"
        "favoritos": {vendedores: [{idLoja: "doces-caseiros",…}, {}],…}
        "historicoDePedidos": [{numeroDoPedido: 1, nomeVendedor: "Massas Congeladas", valorDaCompra: "48,00",…},…]
        "nascimento": "1990-01-01"
        "nome": "Usuário 1"
        "nomeLoja": "none"
        "nomeUsuario": "Usuário 1"
        "senha": "senha"
        "sobrenome": "Sobrenome"
        "telefone": ""
    },
    {
        "cartoes": []
        "clienteVendedor": "vendedor"
        "cnpj": "99.999.999/0001-99"
        "confirmaSenha": "senha"
        "email": "email2@email.com"
        "endereco": "Selecionar endereço"
        "favoritos": {vendedores: [{}], produtos: [{}]}
        "historicoDePedidos": [{}]
        "nascimento": "1990-01-01"
        "nome": "Usuario 2"
        "nomeLoja": "Loja do Usuario 2"
        "nomeUsuario": "Usuario 2"
        "senha": "senha"
        "sobrenome": "Sobrenome"
        "telefone": ""
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
6.	Clique na opção "Minha conta" presente do lado direito do cabeçalho.

# Menu da conta do usuário - Dados pessoais (RF-02)
Ao clicar na opção "dados pessoais" do menu da conta do usuário um modal contendo as informações pessoais do usuário logado é mostrado. Caso o usuário deseje alterar suas informações, ele pode faze-lo mudando o conteudo dos campos editáveis e clicando em "alterar". A alteração de algumas informações requer que o usuário confirme sua senha, enquanto outras informações não podem ser alteradas pelo usuário.

![MenuUsuario_DadosPessoais](https://user-images.githubusercontent.com/74699119/143474869-721d0134-454e-4023-918c-dd567e67dd4e.png)

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
6.	Clique na opção "Minha conta" presente do lado direito do cabeçalho e selecione a opção "Dados pessoais".

# Menu da conta do usuário - Histórico de pedidos (RF-02)
Ao clicar na opção "histórico de pedidos" do menu da conta do usuário um modal contendo as informações dos pedidos realizados no website é mostrado. Dentro do modal, o usuário pode clicar na opção "mais detalhes" para exibir a descrição detalhada do pedido, contendo os itens pedidos e o preço da entrega. O usuário pode também clicar na opção "repetir pedido" para ser redirecionado para a página da loja com os itens em questão já incluidos no carrinho.

![MenuUsuario_Historico](https://user-images.githubusercontent.com/74699119/143475992-846fe726-4638-4677-9ec7-bea232767c20.png)

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
6.	Clique na opção "Minha conta" presente do lado direito do cabeçalho e selecione a opção "Histórico de pedidos".

# Menu da conta do usuário - Favoritos (RF-05)
Ao clicar na opção "favoritos" do menu da conta do usuário um modal contendo as informações dos vendedores e itens favoritados pelo usuário é exibido. Dentro deste modal, o usuário pode remover itens favoritados e também ir direto para a página do vendedor ou produto ao clicar nas opções "ir para página" e "ir para produto" respectivamente.

![MenuUsuario_Favoritos](https://user-images.githubusercontent.com/74699119/143476915-c6f6a17f-fe77-4fd7-9442-9b2bda6228e0.png)

### Requisitos atendidos
-	RF-05

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
6.	Clique na opção "Minha conta" presente do lado direito do cabeçalho e selecione a opção "Favoritos".

# Menu da conta do usuário - Pagamentos (RF-02)
Ao clicar na opção "favoritos" do menu da conta do usuário um modal contendo as informações dos meios de pagamento salvos. No momento, esta funcionalidade apenas simula o registro de cartões de crédito, com a opção "adicionar cartão" adicionando um novo cartão e a opção "remover cartão" removendo este cartão.

![MenuUsuario_Pagamentos](https://user-images.githubusercontent.com/74699119/143477510-dcd99076-a4ba-44db-820b-45948e0eba53.png)

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
6.	Clique na opção "Minha conta" presente do lado direito do cabeçalho e selecione a opção "Pagamentos".

# Menu da conta do usuário - Favoritos (RF-05)
Ao clicar na opção "favoritos" do menu da conta do usuário um modal contendo as informações dos vendedores e itens favoritados pelo usuário é exibido. Dentro deste modal, o usuário pode remover itens favoritados e também ir direto para a página do vendedor ou produto ao clicar nas opções "ir para página" e "ir para produto" respectivamente.

![MenuUsuario_Favoritos](https://user-images.githubusercontent.com/74699119/143476915-c6f6a17f-fe77-4fd7-9442-9b2bda6228e0.png)

### Requisitos atendidos
-	RF-05

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
6.	Clique na opção "Minha conta" presente do lado direito do cabeçalho e selecione a opção "Favoritos".

# Menu da conta do usuário - Gerenciar Loja (RF-07 e RF-09)
Caso o usuário tenha realizado seu cadastro como vendedor, a opção "Gerenciar Loja" estará presente no menu da conta do usuário. Ao clicar nesta opção o usuário é redirecionado para a página de gerenciamento de sua loja.

![MenuUsuario_Vendedor](https://user-images.githubusercontent.com/74699119/143627451-c0fe49c4-2fc0-4eb6-b438-7d8e8f1692b8.png)

### Requisitos atendidos
-	RF-07
-	RF-09

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
5.	Realize o cadastro e login selecionando a opção "Quero me cadastrar como: Vendedor" na tela de cadastro (conforme explicado nas funcionalidades anteriores) e clique sob o campo “Minha conta” em qualquer página contendo o cabeçalho (incluindo a página index.html).
6.	Clique na opção "Minha conta" presente do lado direito do cabeçalho e a opção "Gerenciar Loja" deverá aparecer.

# Página de gerenciar loja - Aba de informações (RF-07 e RF-09)
Página que permite ao usuário cadastrado como vendedor submeter informações gerais sobre sua loja/modelo de negócios. Nesta página o usuário pode submeter um arquivo de imagem para servir como imagem da loja, adicionar uma descrição completa da loja (exibida na página inicial do mini-website de sua loja), adicionar uma descrição resumida (que aparecerá nos resultados de busca e nos favoritos quando sua loja for favoritada) e fornecer o link de um vídeo de apresentação de sua loja hospedado no youtube. O usuário poderá também fornecer os links para redes sociais da loja (Facebook, Instagram, Canal do Youtube, Twitter e Tiktok), caso o vendedor não possua alguma dessas redes sociais, os campos deixados em branco não serão exibidos no mini-website. 

![MenuUsuario_Vendedor_GerenciarLoja](https://user-images.githubusercontent.com/74699119/143632322-b3dfd9a5-7fbd-4ec1-968b-6f54c1d3282a.png)

### Requisitos atendidos
-	RF-07
-	RF-09

### Artefatos da funcionalidade
-	gerenciar-mini-website.html
-	common.js
-	mini-website-common.js
-	gerenciar-mini-website.js
-	style.css

### Instruções de acesso
1.	Faça o download do arquivo do projeto (ZIP) ou clone do projeto no GitHub;
2.	Descompacte o arquivo em uma pasta específica;
3.	Abra o Visual Studio Code e execute o Live Server;
4.	Abra um navegador de Internet e informe a seguinte URL:
http://localhost:5500/index.html
5.	Realize o cadastro e login selecionando a opção "Quero me cadastrar como: Vendedor" na tela de cadastro (conforme explicado nas funcionalidades anteriores) e clique sob o campo “Minha conta” em qualquer página contendo o cabeçalho (incluindo a página index.html).
6.	Clique na opção "Minha conta" presente do lado direito do cabeçalho e a opção "Gerenciar Loja" deverá aparecer.
7.	Clique na opção "Gerenciar Loja" para ser redirecionado para esta página.

# Página de gerenciar loja - Aba de produtos (RF-08)
Página que permite ao usuário cadastrado como vendedor adicionar e remover produtos para sua loja. Ao criar um novo produto ou clicar no botão "editar" em um produto já existente, o modal de edição de informações de produto é aberto, permitindo ao vendedor alterar as informações do produto.

![MenuUsuario_Vendedor_GerenciarLoja_produtos1](https://user-images.githubusercontent.com/74699119/143665699-568357d8-e184-4574-a28b-2f4f3d5e0815.png)
![MenuUsuario_Vendedor_GerenciarLoja_produtos2](https://user-images.githubusercontent.com/74699119/143665700-ae90d592-d92d-47ff-881d-31e3f22ab70d.png)

### Requisitos atendidos
-	RF-08

### Artefatos da funcionalidade
-	gerenciar-mini-website-produtos.html
-	common.js
-	mini-website-common.js
-	gerenciar-mini-website-produtos.js
-	style.css

### Instruções de acesso
1.	Faça o download do arquivo do projeto (ZIP) ou clone do projeto no GitHub;
2.	Descompacte o arquivo em uma pasta específica;
3.	Abra o Visual Studio Code e execute o Live Server;
4.	Abra um navegador de Internet e informe a seguinte URL:
http://localhost:5500/index.html
5.	Realize o cadastro e login selecionando a opção "Quero me cadastrar como: Vendedor" na tela de cadastro (conforme explicado nas funcionalidades anteriores) e clique sob o campo “Minha conta” em qualquer página contendo o cabeçalho (incluindo a página index.html).
6.	Clique na opção "Minha conta" presente do lado direito do cabeçalho e a opção "Gerenciar Loja" deverá aparecer.
7.	Clique na opção "Gerenciar Loja" para ser redirecionado para a página de Gerenciar Loja - Informações.
8.	Clique na opção "Produtos" no cabeçalho secundário presente na página de gerenciar loja para ser redirecionado para esta página.

# Modal de edição de informações do produto (RF-08)
Modal que aparece para o vendedor quando este cadastra um novo produto na loja ou tenta editar as informações de um produto já existente. Permite que o usuário faça o upload de um arquivo de imagem para servir como a imagem do produto, bem como preencher os campos de nome, preço, descrição, resumo da descrição e outras informações para o produto, os quais pode submeter clicando no botão "submeter alterações". Para adicionar ou remover sabores disponíveis do produto, o usuário deve escrever o nome do sabor que deseja adicionar e clicar no botão "adicionar" ou clicar no icone "x" ao lado do sabor já listado para remove-lo.

![MenuUsuario_Vendedor_GerenciarLoja_produtos_modal](https://user-images.githubusercontent.com/74699119/143665862-a52c9dba-8595-45ad-9a43-8e896f07cc2d.png)

### Requisitos atendidos
-	RF-08

### Artefatos da funcionalidade
-	gerenciar-mini-website-produtos.html
-	common.js
-	mini-website-common.js
-	gerenciar-mini-website-produtos.js
-	style.css

### Instruções de acesso
1.	Faça o download do arquivo do projeto (ZIP) ou clone do projeto no GitHub;
2.	Descompacte o arquivo em uma pasta específica;
3.	Abra o Visual Studio Code e execute o Live Server;
4.	Abra um navegador de Internet e informe a seguinte URL:
http://localhost:5500/index.html
5.	Realize o cadastro e login selecionando a opção "Quero me cadastrar como: Vendedor" na tela de cadastro (conforme explicado nas funcionalidades anteriores) e clique sob o campo “Minha conta” em qualquer página contendo o cabeçalho (incluindo a página index.html).
6.	Clique na opção "Minha conta" presente do lado direito do cabeçalho e a opção "Gerenciar Loja" deverá aparecer.
7.	Clique na opção "Gerenciar Loja" para ser redirecionado para a página de Gerenciar Loja - Informações.
8.	Clique na opção "Produtos" no cabeçalho secundário presente na página de gerenciar loja para ser redirecionado para esta página.
9.	Clique em "adicionar produto" ou em "editar" para um produto já existente e o modal abrirá.

# Página de gerenciar loja - Aba de informações de venda e entrega (RF-09)
Página que permite ao usuário cadastrado como vendedor determinar quais formas de pagamento serão aceitas em seu negócio, bem como quais formas de entrega/retirada do produto estarão disponíveis (entrega para o endereço do cliente e/ou retirada do produto diretamente na loja pelo cliente). Ao marcar as opções que deseja disponibilizar e fornecer as informações solicitadas, o usuário deve clicar em "Submeter alterações" para salvar as mudanças.

![MenuUsuario_Vendedor_GerenciarLoja_vendaEntrega](https://user-images.githubusercontent.com/74699119/143665969-2aa0e9fc-5b90-484f-ba22-f888e444ea75.png)

### Requisitos atendidos
-	RF-09

### Artefatos da funcionalidade
-	gerenciar-mini-website-pagamento.html
-	common.js
-	mini-website-common.js
-	gerenciar-mini-website-pagamento.js
-	style.css

### Instruções de acesso
1.	Faça o download do arquivo do projeto (ZIP) ou clone do projeto no GitHub;
2.	Descompacte o arquivo em uma pasta específica;
3.	Abra o Visual Studio Code e execute o Live Server;
4.	Abra um navegador de Internet e informe a seguinte URL:
http://localhost:5500/index.html
5.	Realize o cadastro e login selecionando a opção "Quero me cadastrar como: Vendedor" na tela de cadastro (conforme explicado nas funcionalidades anteriores) e clique sob o campo “Minha conta” em qualquer página contendo o cabeçalho (incluindo a página index.html).
6.	Clique na opção "Minha conta" presente do lado direito do cabeçalho e a opção "Gerenciar Loja" deverá aparecer.
7.	Clique na opção "Gerenciar Loja" para ser redirecionado para a página de Gerenciar Loja - Informações.
8.	Clique na opção "Venda/Entrega" no cabeçalho secundário presente na página de gerenciar loja para ser redirecionado para esta página.

# Busca de vendedores (RF-01)
Página que exibe os resultados da busca de vendedores realizada pelo usuário. Os vendedores disponíveis são mostrados em uma lista do lado direito enquanto do lado esquerdo estão presentes os filtros de busca que o usuário pode aplicar aos resultados. No momento, todos os vendedores cadastrados são mostrados na lista independente da localização informada pelo usuário e dos termos usados na busca. O filtro de busca "avaliação de 4 estrelas ou mais" remove dos resultados mostrados os vendedores que possuírem avaliação inferior a 4 estrelas. Ao clicar na imagem do vendedor, o usuário é redirecionado para a página inicial da loja (mini website do vendedor) em questão.

![Busca](https://user-images.githubusercontent.com/74699119/143668851-5c519258-672f-4acc-bb93-3f6cebed0e64.png)

### Requisitos atendidos
-	RF-01

### Artefatos da funcionalidade
-	busca.html
-	common.js
-	busca.js
-	style.css

### Instruções de acesso
1.	Faça o download do arquivo do projeto (ZIP) ou clone do projeto no GitHub;
2.	Descompacte o arquivo em uma pasta específica;
3.	Abra o Visual Studio Code e execute o Live Server;
4.	Abra um navegador de Internet e informe a seguinte URL:
http://localhost:5500/index.html
5.	Na tela inicial, digite o que procura no campo de busca abaixo de "Buscar vendedores" e clique no icone da lupa à direita.

# Mini website do vendedor - Página inicial/Aba de "Quem somos" (RF-03)
Página que exibe as informações sobre a loja selecionada, sendo elas a imagem da loja, descrição completa e o vídeo de apresentação (o vídeo de apresentação do curso foi utilizado como placeholder para o vídeo de apresentação da loja neste caso). O layout da página contém também um menu de navegação que permite navegar pelas diversas abas do mini website (Quem somos, Produtos, Redes Sociais, Contato e Carrinho).

![mini-website](https://user-images.githubusercontent.com/74699119/143668989-647a7224-f592-4118-8621-bf735bc09999.png)

### Requisitos atendidos
-	RF-03

### Artefatos da funcionalidade
-	busca.html
-	common.js
-	busca.js
-	style.css

### Instruções de acesso
1.	Faça o download do arquivo do projeto (ZIP) ou clone do projeto no GitHub;
2.	Descompacte o arquivo em uma pasta específica;
3.	Abra o Visual Studio Code e execute o Live Server;
4.	Abra um navegador de Internet e informe a seguinte URL:
http://localhost:5500/index.html
5.	Na tela inicial, clique na imagem de um dos vendedores recomendados ou realize uma busca e clique na imagem de um dos vendedores mostrados na página de busca para ser redirecionado para a página inicial do mini website do vendedor selecionado.



