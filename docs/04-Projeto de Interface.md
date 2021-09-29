
# Projeto de Interface

As prioridades centrais do projeto consistem em disponibilizar uma plataforma simples e intuitiva para a localização de vendedores locais para o usuário interessado em comprar e em facilitar a inserção de pequenos vendedores no ambiente online. Para isto, o sistema é dividido em duas grandes categorias, a primeira sendo focada em um sistema de busca e sugestões de vendedores próximos para o comprador e a segunda em um “mini-website” de fácil gerenciamento para o vendedor anunciar seus produtos e modelo de negócio. Embora a disposição dos elementos seja diferente nessas duas categorias, tentou-se manter um padrão similar entre as duas, com um cabeçalho fixo em todas as páginas e a sessão abaixo do cabeçalho contendo os botões de navegação entre as páginas.

## User Flow

A figura abaixo descreve o fluxo de interação do usuário através das diferentes telas do sistema. Uma descrição detalhada de cada tela e suas funcionalidades está presente na seção de Wireframes deste documento. Um wireframe interativo deste projeto pode ser acessado no [ambiente MarvelApp do projeto.](https://marvelapp.com/prototype/ci07gg3)

![userflow figure_ADS_20212_T6_Grupo1](https://user-images.githubusercontent.com/74699119/135297724-7a86f729-b4e8-4a16-9717-8ca6ed74b59e.png)
<p align="center">
   <b>Figura X - Fluxo de telas do usuário</b>
</p>
 
## Wireframes

Esta seção apresenta uma descrição mais detalhada das telas apresentadas anteriormente no fluxo de usuário da Figura X. Com exceção das telas de Login e Cadastro, todas as telas seguem a mesma estrutura geral dividida em três grandes seções:
-	Cabeçalho – Seção fixa do site aonde está presente a logomarca do site e opções relacionadas diretamente ao usuário (selecionar sua localização, acessar sua conta, etc);
-	Botões de navegação – Seção aonde se dispõe os principais elementos utilizados pelo usuário para navegar entre as diferentes partes do site (botões que direcionam para outra seção do site e barras de busca);
-	Conteúdo – Apresenta o conteúdo referente à tela;

![Estrutura do site](https://user-images.githubusercontent.com/74699119/135298749-2b3afa97-3e5c-4de6-9f97-b061af540f90.png)
<p align="center">
   <b>Figura X - Estrutura geral do site</b>
</p>


### Tela - Homepage

A tela de homepage apresenta ao usuário os recursos necessários para localizar vendedores próximos de sua localização, apresentando uma sugestão de vendedores bem avaliados perto de sua localidade e disponibilizando uma barra de buscas aonde o usuário pode inserir palavras chave para a localização de vendedores próximos que se encaixem no que ele procura. Assim como todas as outras páginas exceto login e cadastro, essa página também apresenta um cabeçalho com as seguintes opções:
-	Link para a tela de cadastro de vendedores com o texto “Cadastre sua Loja”;
-	Componente de seleção de endereço para entrega;
-	Componente de opções da conta, que leva o usuário para a tela de login ou abre um menu com as opções da conta caso o login já tenha sido efetuado.

![Homepage](https://user-images.githubusercontent.com/74699119/135298849-900d5da1-ee64-4f5e-941c-8cb11bd73f36.png)
<p align="center">
   <b>Figura X - Tela Inicial – Busca e sugestão de vendedores</b>
</p>


### Tela – Tela de login

Caso o usuário ainda não esteja logado em sua conta, clicar no item “Minha conta” do cabeçalho redireciona para uma tela de login, onde será requisitado o e-mail e senha do usuário para a autenticação. Além do botão de login, essa tela apresenta os seguintes elementos:
•	Link para a tela de recuperação da senha com o texto “Esqueci minha senha”.
Link para cadastrar uma nova conta com o texto “Não possui uma conta? Cadastre-se”. 

![Login](https://user-images.githubusercontent.com/74699119/135299742-f99cf96c-8f2b-4560-b4ee-cf4fed06a2ff.png)
<p align="center">
   <b>Figura X - Tela de Login da conta</b>
</p>


### Tela – Tela de recuperação de senha

Tela de recuperação de senha onde o usuário já cadastrado pode inserir seu endereço de e-mail para receber um e-mail contendo instruções para a recuperação de sua senha.

![Recuperar senha](https://user-images.githubusercontent.com/74699119/135299968-f980e06e-9a35-41eb-98cf-4b2ff7e8e041.png)
<p align="center">
   <b>Figura X - Tela de recuperação de senha</b>
</p>


### Tela – Cadastro do usuário (cliente)
Essa tela apresenta o formulário requisitado para o cadastro do usuário como cliente, permitindo que ele utilize a plataforma mais fácilmente para a compra de produtos dos vendedores cadastrados. Caso deseje se cadastrar como vendedor, o usuário poderá selecionar a opção “vendedor”, onde mais informações serão requisitadas.

![Cadastro cliente](https://user-images.githubusercontent.com/74699119/135300081-622aa840-88c1-4128-ba38-2e29a15e19c7.png)
<p align="center">
   <b>Figura X - Tela de cadastro do usuário como cliente</b>
</p>


### Tela - Cadastro do usuário (vendedor)
Nesta tela são requisitadas as informações necessárias para o cadastro do usuário como vendedor, ela também pode ser acessada diretamente através de qualquer página contendo o cabeçalho geral do site clicando na opção “Cadastre sua loja”.

![Cadastro vendedor](https://user-images.githubusercontent.com/74699119/135300481-2d48898f-8227-4011-b97b-03598fd1aca6.png)
<p align="center">
   <b>Figura X – Tela de cadastro de usuário como vendedor</b>
</p>


### Tela – Menu da conta de usuário
Caso o usuário já possua uma conta e já esteja logado no sistema, clicar na opção “minha conta” do cabeçalho revelerá um menu contendo as opções de gerenciamento da conta (mudar dados, trocar e-mail e senha, ver histórico de pedidos, vendedores e produtos salvos nos favoritos, etc.), além da opção de encerrar sua sessão. Para o usuário cadastrado como vendedor, também será disponibilizada a opção de ir para a página de sua loja para customiza-la.

![minha conta](https://user-images.githubusercontent.com/74699119/135300920-3308c680-d5d5-4cef-a7f6-f993d8b1fd29.png)
<p align="center">
   <b>Figura X – Menu da conta do usuário</b>
</p>


### Tela – Dados da conta
Tela acessada através do menu da conta do usuário que contém os dados do usuário cadastrado. Permite também alterar dados não relacionados à identidade do usuário. Quando acessado por um usuário cadastrado como vendedor, mostrará também dados como CNPJ, nome da loja, etc.

![dados pessoais](https://user-images.githubusercontent.com/74699119/135301051-e682fe83-266f-4454-acd0-7c1bff8f50fb.png)
<p align="center">
   <b>Figura X – Tela de dados da conta do usuário</b>
</p>


### Tela – Histórico de pedidos
Tela acessada através do menu da conta do usuário contendo o histórico dos pedidos realizados pelo usuário. Quando acessado por um usuário cadastrado como vendedor, conterá o histórico dos pedidos realizados por outros usuários em sua loja.

![Historico](https://user-images.githubusercontent.com/74699119/135301168-fe9c1d06-2d00-4c8c-aeb5-ccf31aa7b0fc.png)
<p align="center">
   <b>Figura X – Tela do histórico de pedidos</b>
</p>


### Tela – Janela de favoritos
Tela acessada através do menu da conta do usuário contendo todos os vendedores e produtos favoritados pelo usuário, contendo também a opção de remover qualquer item adicioando da lista.

![Favoritos](https://user-images.githubusercontent.com/74699119/135301310-a0ce1887-b47c-4835-931b-fa4599c07acc.png)
<p align="center">
   <b>Figura X – Tela de vendedores e produtos favoritados</b>
</p>


### Tela – Meios de pagamento
Tela acessada através do menu da conta do usuário contendo todos os cartões salvos pelo usuário para utilização na hora do pagamento.

![formas pagamento](https://user-images.githubusercontent.com/74699119/135301451-bd5e7064-768e-4ddd-9817-e01f7ba5023b.png)
<p align="center">
   <b>Figura X – Tela de formas de pagamento salvas</b>
</p>


### Tela – Selecionar endereço
A tela de selecionar localização poderá ser acessada através do cabeçalho geral do website. Ela permite que o usuário informe seu endereço de entrega para que o website seja capaz de listar os vendedores que realizam entregas para sua localidade durante as buscas e sugestões. Quando acessada por um usuário cadastrado como vendedor, ela permitirá que o mesmo informe a localização de sua loja.

![Localizacao](https://user-images.githubusercontent.com/74699119/135301539-32af57f2-7d84-4062-976f-0083446d9f1d.png)
<p align="center">
   <b>Figura X - Tela de selecionar endereço</b>
</p>


### Tela – Resultados da busca de vendedores
Tela aonde são apresentados os resultados da busca feita pelo usuário, apresentando os vendedores que melhor se encaixam nas palavras chave utilizadas e que entreguem para sua localidade, além de mostrar informações gerais sobre o vendedor e sua avaliação média por outros usuários. Ao clicar no bloco contendo as informações do vendedor, o usuário será redirecionado para a página do “mini-website” da loja do vendedor. Além disto, essa tela apresenta também as seguintes funcionalidades:
-	Barra lateral contendo filtros de pesquisa para refinar os resultados. A opção “Entrega para minha localidade” é marcada por padrão, mas pode ser desmarcada caso o usuário queira visualizar todos os vendedores cadastrados;
-	Botão de “Favoritar vendedor”, permitindo ao usuário salvar o vendedor em questão em uma lista de favoritos caso possua uma conta cadastrada.

![Busca](https://user-images.githubusercontent.com/74699119/135301645-f39c31c8-3634-4b7a-8272-fdbc1551f00d.png)
<p align="center">
   <b>Figura X - Tela de resultados da busca de vendedores</b>
</p>


### Tela – Mini-website da loja (tela inicial)
Tela inicial do “mini-website” contendo as informações para a loja daquele vendedor cadastrado. Tem por objetivo permitir que o vendedor apresente o seu negócio para o cliente através da seção “quem somos” e dar acesso às demais categorias da loja virtual através dos seguintes elementos:
-	Nossos produtos: Redireciona o usuário para o catálogo de produtos.
-	Redes sociais: Redireciona o usuário para uma págia contendo as informações das redes sociais da loja.
-	Contato: Redireciona o usuário para a página de enviar mensagem para o vendedor.
-	Monte seu pedido: Redireciona o usuário para a tela montagem do pedido.

Há também o elemento de “Favoritar vendedor”, que permite ao usuário salvar a página do vendedor em seus favoritos. 

Quando acessada através da conta do vendedor dono da loja em questão, os seguintes elementos apresentarão a opção de serem editados:
-	Nome fantasia da loja do vendedor
-	Imagem escolhida pelo vendedor
-	Texto de descrição da loja
-	Link para vídeo de apresentação

![Miniwebsite](https://user-images.githubusercontent.com/74699119/135301798-9236ea8d-dd4a-4db1-9a04-ee0d1482a7f9.png)
<p align="center">
   <b>Figura X – Tela inicial do mini-website do vendedor contendo a apresentação da loja</b>
</p>


### Tela – Catálogo de produtos
Tela do mini-website que apresenta a lista de todos os produtos, contendo uma foto e breve descrição de cada produto. Ao clicar no botão “mais detalhes”, o usuário é redirecionado para uma tela contendo uma descrição mais detalhada e mais funcionalidades relacionadas àquele produto. 
Quando acessada através da conta do vendedor dono da loja em questão, as seguintes opções serão disponibilizadas:
-	Adicionar novo produto
-	Deletar produto existente
-	Alterar preço, nome ou descrição de produto existente

Ao adicionar um novo produto ou alterar um produto existente, o vendedor será redirecionado à tela de detalhes do produto para que possa completar as informações nela também.

![Miniwebsite - produtos](https://user-images.githubusercontent.com/74699119/135301909-10ebc7bc-004f-46cb-b55b-2a418ff36eeb.png)
<p align="center">
   <b>Figura X – Tela de catálogo de produtos do mini-website</b>
</p>


### Tela – Detalhes do produto
Tela do mini-website acessada através do catálogo de produtos. Contém a descrição mais detalhada do produto selecionado e os seguintes elementos adicionais:
-	Favoritar produtos: Adiciona o produto em questão à lista de favoritos.
-	Adicionar ao pedido: Abre uma janela adicional que permite ao usuário escolher a quantidade, sabor e detalhes do produto que deseja adicionar à lista de compras.

Quando acessada através da conta do vendedor dono da loja em questão, os seguintes campos serão editáveis.
-	Foto do produto
-	Nome do produto
-	Preço do produto
-	Descrição
-	Sabores disponíves

![Miniwebsite - produtos - mais detalhes](https://user-images.githubusercontent.com/74699119/135302052-23c8f061-dfea-4964-8bb8-4d73d81d44a0.png)
<p align="center">
   <b>Figura X – Janela de mais detalhes do catálogo de produtos</b>
</p>


### Tela – Adicionar às compras
Tela do mini-website que permite ao usuário selecionar o sabor e quantidade do produto selecionado que deseja adicionar ao carrinho de compras. Permite também que o usuário faça comentários adicionais relacionados ao pedido.

![Miniwebsite - produtos - mais detalhes - adicionar ao pedido](https://user-images.githubusercontent.com/74699119/135302175-615b41c9-e955-4222-88c0-33cafd8e3314.png)
<p align="center">
   <b>Figura X – Janela de adicionar produto à lista de compras</b>
</p>


### Tela – Redes sociais do vendedor
Tela do mini-website que exibe os links para as redes sociais da loja do vendedor. Quando acessada através da conta do vendedor dono da loja em questão, o vendedor poderá clicar no icone da respectiva rede social para adicionar o link para seu perfil. Apenas ícones com um link associado a elas aparecerão para os clientes que visitarem a página da loja.

![Miniwebsite - redes sociais](https://user-images.githubusercontent.com/74699119/135302275-12c22a9b-87d7-4c6c-9318-d5556c28c1ef.png)
<p align="center">
   <b>Figura X – Tela de links de redes sociais do mini-website da loja</b>
</p>


### Tela – Contato com o vendedor
Tela do mini-website que permite ao usuário entrar em contato com o vendedor. Ao clicar em “enviar”, as informações fornecidas pelo usuário serão enviadas para o e-mail do vendedor cadastrado.

 ![Miniwebsite - contato](https://user-images.githubusercontent.com/74699119/135302394-dcf1b653-f425-46d4-a8c2-26797a3cb257.png)
<p align="center">
   <b>Figura X – Tela de links de redes sociais do mini-website da loja</b>
</p>


### Tela – Montagem do pedido
Tela onde o usuário pode ver todos os produtos adicionados à lista de compras, presente como uma barra lateral a direita, e o preço total do pedido. Contém também uma versão menos detalhada do catálogo de produtos à esquerda caso o usuário já saiba quais produtos queira pedir e não necessite ler a descrição detalhada presente na tela do catálogo de produtos (aba “Nossos Produtos”). Ao clicar em “finalizar pedido”, o usuário será redirecionado para a tela de finalização do pagamento.

![Miniwebsite - pedido](https://user-images.githubusercontent.com/74699119/135302454-3bf3fe11-2d3a-4638-bc3a-5db88f740c6a.png)
<p align="center">
   <b>Figura X – Tela da lista de compras dos produtos da loja</b>
</p>


### Tela – Finalização do pagamento
Tela onde o usuário pode revisar o pedido (mostrado na mesma barra lateral à direita presente na tela de montagem do pedido), escolher a forma de pagamento e de entrega antes de finalizar o processo.

![Miniwebsite - pedido - pagamento](https://user-images.githubusercontent.com/74699119/135302550-db495c8e-2e4c-40c0-82d1-6d4c5b6f46d1.png)
<p align="center">
   <b>Figura X – Tela de finalização da compra dos produtos</b>
</p>


### Tela – Mensagem de confirmação do pedido
Janela de mensagem aberta para confirmar que o pedido foi realizado com sucesso.

![confirmacao pedido](https://user-images.githubusercontent.com/74699119/135302660-6c712e9f-b363-4427-a522-0f4984b36a18.png)
<p align="center">
   <b>Figura X – Mensagem de confirmação do pedido</b>
</p>


### Tela – Mensagem de confirmação de adição aos favoritos
Janela de mensagem aberta para confirmar que o item em questão foi salvo nos favoritos.

![confirmacao favoritos](https://user-images.githubusercontent.com/74699119/135302782-b118649d-9111-483d-9a78-3cc8b46f2e87.png)
<p align="center">
   <b>Figura X – Mensagem de confirmação de adição aos favoritos</b>
</p>


### Tela – Opções de venda e entrega (dono da loja)
Tela exclusiva para o vendedor da loja, ao clicar em “monte seu pedido”, o usuário logado na conta do vendedor da loja será redirecionado para esta tela contendo todas as opções de formas de pagamento e entrega aceitas por ele, permitindo que o vendedor configure elas de acordo com as necessidades de seu negócio.

![Miniwebsite - área do vendedor - pagamentos](https://user-images.githubusercontent.com/74699119/135302912-3da45ba3-b01d-4f68-9a75-9347fe3efa63.png)
<p align="center">
   <b>Figura X – Tela de customização das opções de venda e entrega dos produtos (acessível somente para a conta do dono da loja)</b>
</p>


