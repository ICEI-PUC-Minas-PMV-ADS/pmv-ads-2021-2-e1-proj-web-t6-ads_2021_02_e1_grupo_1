# Plano de Testes de Software
Os requisitos para realização dos testes de software são:
-	Site publicado na Internet
-	Navegador da Internet - Chrome, Firefox ou Edge
-	Conectividade de Internet para acesso aos vídeos de apresentação e redes sociais

Os testes funcionais a serem realizados no aplicativo estão descritos abaixo.


| Caso de Teste         | Caso de Teste	CT-01 – Cadastro de usuário (cliente) |
|-----------------------|--------------------------------------------------------|
| Requisitos Associados | RF-002 - O site deve permitir que o usuário crie uma conta para salvar suas informações (local de entrega, meios de pagamento, histórico de pedidos, etc). |
| Objetivo do Teste     | Verificar a funcionalidade de cadastro do cliente |
| Passos                | 1) Acessar o Navegador <br>2) Informar o endereço do Site <br>3) Visualizar a página principal <br>4) Clicar na opção "Crie sua conta" presente no cabeçalho do site <br>5) Preencher as informações de cadastro solicitadas e clicar em "concluir cadastro".|
| Critérios de Êxito    | -	Realizar cadastro de dados pessoais. <br>- Cadastro só pode ser bem sucedido caso o e-mail não tenha sido cadastrado anteriormente. <br>- Cadastro só pode ser bem sucedido caso a senha tenha sido repetida corretamente. |

<br>

| Caso de Teste         | Caso de Teste	CT-02 – Cadastro de usuário (Vendedor) |
|-----------------------|--------------------------------------------------------|
| Requisitos Associados | RF-002 - O site deve permitir que o usuário crie uma conta de vendedor para criar sua loja e salvar suas informações (local de entrega, meios de pagamento, histórico de pedidos, etc). <br>RF-007 O site deve permitir que o microempreendedor submeta as informações sobre seu modelo de negócio, redes sociais e informações de contato para serem mostradas no “mini-website” |
| Objetivo do Teste     | Verificar a funcionalidade de cadastro do vendedor |
| Passos                | 1) Acessar o Navegador <br>2) Informar o endereço do Site <br>3) Visualizar a página principal <br>4) Clicar na opção "Cadastre sua loja" presente no cabeçalho do site <br>5) Preencher as informações de cadastro solicitadas e clicar em "concluir cadastro".|
| Critérios de Êxito    | -	Realizar cadastro de dados pessoais. <br>- Cadastro só pode ser bem sucedido caso o e-mail não tenha sido cadastrado anteriormente. <br>- Cadastro só pode ser bem sucedido caso a senha tenha sido repetida corretamente. <br>- Uma nova loja deve ser criada após o cadastro ser confirmado (loja deve aparecer na recomendação ou busca de vendedores e ser acessível). |

<br>

| Caso de Teste         | Caso de Teste	CT-03 – Login e logoff de usuário |
|-----------------------|--------------------------------------------------------|
| Requisitos Associados | RF-002 - O site deve permitir que o usuário crie uma conta de vendedor para criar sua loja e salvar suas informações (local de entrega, meios de pagamento, histórico de pedidos, etc). |
| Objetivo do Teste     | Verificar a função de login do usuário |
| Passos                | 1) Acessar o Navegador <br>2) Informar o endereço do Site <br>3) Visualizar a página principal <br>4) Clicar na opção "Fazer Login" presente no cabeçalho do site <br>5) Preencher os campos de e-mail e senha e clicar na opção "Entrar". <br> 5) Após o login bem sucedido, clicar na opção "Minha conta" no cabeçalho e escolher a opção "Sair". |
| Critérios de Êxito    | -	Realizar o Login da conta. <br>- Login só pode ser bem sucedido com um e-mail cadastrado e informando a senha correta. <br> - Realizar logoff e verificar que a opção "Minha conta" voltou a ser "Fazer Login" após o logoff |

<br>

| Caso de Teste         | Caso de Teste	CT-04 – Visualizar e alterar dados do usuário |
|-----------------------|--------------------------------------------------------|
| Requisitos Associados | RF-002 - O site deve permitir que o usuário crie uma conta de vendedor para criar sua loja e salvar suas informações (local de entrega, meios de pagamento, histórico de pedidos, etc). |
| Objetivo do Teste     | Verificar a funcionalidade de visualizar/alterar os dados do usuário dentro da opção "Dados pessoais" do menu do usuário |
| Passos                | 1) Acessar o Navegador <br>2) Informar o endereço do Site <br>3) Visualizar a página principal <br>4) Clicar na opção "Fazer Login" presente no cabeçalho do site <br>5) Preencher os campos de e-mail e senha e clicar na opção "Entrar". <br> 5) Após o login bem sucedido, clicar na opção "Minha conta" no cabeçalho e escolher a opção "Dados pessoais". <br> 6) Selecionar os dados que deseja alterar e clicar na opção "alterar" ao lado direito dos dados para altera-los. |
| Critérios de Êxito    | -	O modal de dados do usuário deve abrir e mostrar os dados do usuário. <br> - Os campos de "E-mail" e "Senha" só poderão ser alterados caso a senha atual seja informada (e a senha nova repetida no campo "repetir senha" para o caso da alteração de senha). <br> - As informações alteradas com exito devem ainda estar presentes após fechar e abrir a funcionalidade novamente. |

<br>

| Caso de Teste         | Caso de Teste	CT-05 – Selecionar endereço |
|-----------------------|--------------------------------------------------------|
| Requisitos Associados | RF-002 - O site deve permitir que o usuário crie uma conta de vendedor para criar sua loja e salvar suas informações (local de entrega, meios de pagamento, histórico de pedidos, etc). |
| Objetivo do Teste     | Verificar a funcionalidade de seleção de endereço |
| Passos                | 1) Acessar o Navegador <br>2) Informar o endereço do Site <br>3) Visualizar a página principal <br>4) Clicar na opção "Entrega para" presente no cabeçalho do site <br>5) Preencher o campo "Inserir meu endereço" e clicar na opção "Mudar endereço" no modal de seleção de endereço. <br> |
| Critérios de Êxito    | -	O modal de seleção de endereço deve aparecer após clicar em "Entrega para". <br> - O endereço submetido deve estar presente abaixo da opção "Entrega para" no cabeçalho. <br> - Caso o usuário tenha feito login em uma conta, o endereço escolhido deve ficar salvo e estar presente novamente quando acessar essa conta |

<br>

| Caso de Teste         | Caso de Teste	CT-06 – Visualizar vendedores recomendados na página inicial |
|-----------------------|--------------------------------------------------------|
| Requisitos Associados | RF-006 - O site deve apresentar na página principal sugestões de microempreendedores alimentícios na região do usuário. |
| Objetivo do Teste     | Verificar a funcionalidade de recomendação de vendedores |
| Passos                | 1) Acessar o Navegador <br>2) Informar o endereço do Site <br>3) Visualizar a página principal <br>4) Clicar nas setas presentes ao lado dos vendedores recomendados para observar mais vendedores.
| Critérios de Êxito    | -	Os vendedores cadastrados no website (Doces caseiros, Massas congeladas, Marmitas vegan, Cupcakes variados e novas lojas criadas ao cadastrar usuários como vendedores) devem aparecer nas recomendações (clicar nas setas à esquerda ou direita para mostrar mais vendedores). <br> - Ao chegar no final da lista de vendedores, a lista deve começar a repetir (mostrar novamente o primeiro ou último vendedor da lista ao clicar novamente na seta direita ou esquerda, respectivamente).

<br>

| Caso de Teste         | Caso de Teste	CT-07 – Buscar vendedores cadastrados |
|-----------------------|--------------------------------------------------------|
| Requisitos Associados | RF-001 - O site deve apresentar um mecanismo de busca que permita ao consumidor localizar microempreendedores cadastrados que produzam e entreguem os produtos desejados para sua localização. |
| Objetivo do Teste     | Verificar a funcionalidade de busca de vendedores |
| Passos                | 1) Acessar o Navegador <br>2) Informar o endereço do Site <br>3) Visualizar a página principal <br>4) Preencher o campo de busca abaixo de "Buscar vendedores" e clicar no icone da lupa para realizar a busca |
| Critérios de Êxito    | -	Os vendedores cadastrados no website (Doces caseiros, Massas congeladas, Marmitas vegan, Cupcakes variados e novas lojas criadas ao cadastrar usuários como vendedores) devem aparecer na lista de resultados. <br> - Mudar o filtro de busca "Avaliação maior que 4 estrelas" deve atualizar a lista excluindo os vendedores com avaliação menor do que 4/5. <br> - Clicar na imagem dos vendedores cadastrados deve redirecionar o usuário para a página de "mini website" do vendedor. |

<br>

| Caso de Teste         | Caso de Teste CT-08 – Visualização da página inicial de cada loja |
|-----------------------|--------------------------------------------------------|
| Requisitos Associados | RF-003 - O site deve apresentar uma página individual de cada microempreendedor com seus produtos e informações relevantes. |
| Objetivo do Teste     | Verificar a função de mini website do vendedor |
| Passos                | 1) Acessar o Navegador <br>2) Informar o endereço do Site <br>3) Visualizar a página principal <br>4) Clicar em algum vendedor recomendado na página inicial ou utilizar a funcionalidade "Buscar vendedores" e clicar nos vendedores listados |
| Critérios de Êxito    | -	Visualizar a imagem do vendedor cadastrado, texto de descrição da loja e vídeo de apresentação (se presente para aquela loja) para as lojas cadastradas |

<br>

| Caso de Teste         | Caso de Teste CT-09 – Adicionar e remover produtos de uma loja ao carrinho de compras |
|-----------------------|--------------------------------------------------------|
| Requisitos Associados | RF-003 - O site deve apresentar uma página individual de cada microempreendedor com seus produtos e informações relevantes. |
| Objetivo do Teste     | Verificar a função de mini website do vendedor |
| Passos                | 1) Acessar o Navegador <br>2) Informar o endereço do Site <br>3) Visualizar a página principal <br>4) Clicar em algum vendedor recomendado na página inicial ou utilizar a funcionalidade "Buscar vendedores" e clicar nos vendedores listados <br> 5) Clicar na aba "Produtos" no menu de navegação do mini website do vendedor. <br> 6) Clicar no botão de "Mais detalhes" do produto desejado para abrir o modal de detalhes do produto. <br> 7) Clicar em "Adicionar ao carrinho" <br> 8) Selecionar o sabor e quantidade do produto que deseja adicionar, adicionar comentários sobre o pedido e clicar novamente em "Adicionar ao carrinho" para adicionar o produto na quantidade e sabor desejados ao carrinho <br> 9) Clicar na aba "Carrinho" do mini website para verificar se o produto foi adicionado à lista. <br> 10) Mais produtos podem ser adicioandos ao carrinho na aba de "Carrinho" do mini-website clicando em "Adicionar produto" nos produtos listados à esquerda nesta página (podendo selecionar a quantidade, sabor e comentários). <br> 11) Para remover algum produto da lista do carrinho, clique em "cancelar" no canto inferior direito da descrição da ordem do produto na lista. |
| Critérios de Êxito    | -	Visualizar os produtos cadastrados. <br> - Visualizar o modal de detalhes do produto após clicar em "mais detalhes" <br> - Verificar que a ordem do produto foi corretamente adicionada ao carrinho <br> - Verificar que os produtos adicionados são removido do carrinho ao clicar em "cancelar". |

<br>

| Caso de Teste         | Caso de Teste CT-10 – Adicionar e remover produtos de uma loja ao carrinho de compras |
|-----------------------|--------------------------------------------------------|
| Requisitos Associados | RF-003 - O site deve apresentar uma página individual de cada microempreendedor com seus produtos e informações relevantes. |
| Objetivo do Teste     | Verificar a função de mini website do vendedor |
| Passos                | 1) Acessar o Navegador <br>2) Informar o endereço do Site <br>3) Visualizar a página principal <br>4) Clicar em algum vendedor recomendado na página inicial ou utilizar a funcionalidade "Buscar vendedores" e clicar nos vendedores listados <br> 5) Clicar na aba "Produtos" no menu de navegação do mini website do vendedor. <br> 6) Clicar no botão de "Mais detalhes" do produto desejado para abrir o modal de detalhes do produto. <br> 7) Clicar em "Adicionar ao carrinho" <br> 8) Selecionar o sabor e quantidade do produto que deseja adicionar, adicionar comentários sobre o pedido e clicar novamente em "Adicionar ao carrinho" para adicionar o produto na quantidade e sabor desejados ao carrinho <br> 9) Clicar na aba "Carrinho" do mini website para verificar se o produto foi adicionado à lista. <br> 10) Mais produtos podem ser adicioandos ao carrinho na aba de "Carrinho" do mini-website clicando em "Adicionar produto" nos produtos listados à esquerda nesta página (podendo selecionar a quantidade, sabor e comentários). <br> 11) Para remover algum produto da lista do carrinho, clique em "cancelar" no canto inferior direito da descrição da ordem do produto na lista. |
| Critérios de Êxito    | -	Visualizar os produtos cadastrados. <br> - Visualizar o modal de detalhes do produto após clicar em "mais detalhes" <br> - Verificar que a ordem do produto foi corretamente adicionada ao carrinho <br> - Verificar que os produtos adicionados são removido do carrinho ao clicar em "cancelar". |


| Caso de Teste         | Caso de Teste	CT-0? – Customizar informações do mini-website (Vendedor) |
|-----------------------|--------------------------------------------------------|
| Requisitos Associados | RF-003 - O site deve apresentar uma página individual de cada microempreendedor com seus produtos e informações relevantes <br> RF-007 - O site deve permitir que o microempreendedor submeta as informações sobre seu modelo de negócio, redes sociais e informações de contato para serem mostradas no “mini-website” <br> RF-009 - A plataforma deve fornecer ao microempreendedor opções de customização para seu “mini-website”, como a inserção de fotos de apresentação dos produtos, e de um vídeo-apresentação do negócio (podendo ser inserido por meio de link para vídeo hospedado em plataforma de vídeo) |
| Objetivo do Teste     | Verificar a funcionalidade de customização das informações da loja pelo usuário cadastrado como vendedor/dono daquela loja |
| Passos                | 1) Acessar o Navegador <br>2) Informar o endereço do Site <br>3) Visualizar a página principal <br>4) Clicar na opção "Fazer Login" presente no cabeçalho do site <br>5) Realizar login em uma conta cadastrada como "vendedor" preenchendo os campos de e-mail e senha com os dados da conta e clicar na opção "Entrar". <br> 5) Após o login bem sucedido, clicar na opção "Minha conta" no cabeçalho e escolher a opção "Gerenciar loja" (disponível somente para contas de vendedores). <br> 6) Preencher os formulários presentes na página de "Gerenciar loja - Aba de informações" e clicar nos botões associados a cada campo para confirmar a atualização das informações. |
| Critérios de Êxito    | -	As informações alteradas devem permanecer após sair e voltar para a página de gerenciar loja <br> - As informações atualizadas deverão aparecer ao visualizar a loja do vendedor na seção de recomendação e busca e ao visitar o mini website da loja. |
