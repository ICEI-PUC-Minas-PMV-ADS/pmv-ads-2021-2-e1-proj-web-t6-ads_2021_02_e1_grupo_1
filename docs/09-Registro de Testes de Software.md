# Registro de Testes de Software
Os resultados obtidos nos testes de software realizados estão descritos a seguir. 

## Caso de Teste 1

| Caso de Teste         | Caso de Teste	CT-01 – Cadastro de usuário (cliente) |
|-----------------------|--------------------------------------------------------|
| Resultado do teste    | Concluído com sucesso |
| Critérios de Êxito    | -	Realizar cadastro de dados pessoais. <br>- Cadastro só pode ser bem sucedido caso o e-mail não tenha sido cadastrado anteriormente. <br>- Cadastro só pode ser bem sucedido caso a senha tenha sido repetida corretamente. |

### Resultados obtidos:

-	<b> Realizar cadastro de dados pessoais - Sucesso</b><br>
  Ao preencher todos os campos requisitados com um e-mail e senha válidos (com um e-mail não utilizado anteriormente), uma mensagem de sucesso dizendo "Usuário cadastrado com sucesso!" foi exibida. Após fazer isto, verificou-se que as informações fornecidas haviam sido devidamente guardadas no localstorage.

![CT1_localstorage](https://user-images.githubusercontent.com/74699119/143775825-581e0c77-9109-402e-ba07-1bd2381e5f54.png)

- <b> Cadastro só pode ser bem sucedido caso o e-mail não tenha sido cadastrado anteriormente - Sucesso</b><br> 
  Ao repetir os mesmos passos do primeiro teste, porém utilizando um e-mail já cadastrado, uma mensagem de erro dizendo "O e-mail email@email.com já foi cadastrado anteriormente! Use outro e-mail." é exibida e nenhuma informaçõa nova é salva no local storage.
  
- <b> Cadastro só pode ser bem sucedido caso a senha tenha sido repetida corretamente - Sucesso</b><br>
  Ao repetir os mesmos passos do primeiro teste, usando um e-mail ainda não cadastrado, porém preenchendo informações distintas no campo "senha" e "repetir senha", uma mensagem de erro dizendo "A senha digitada em "repita a senha" não bate com a do campo "senha"!" é exibida e nenhuma informaçõa nova é salva no local storage.

### Pontos que podem ser melhorados:

Na etapa atual, o sistema de cadastro login é apenas uma simulação utilizando o local storage. Caso o projeto venha a ser reaproveitado na etapa de desenvolvimento backend, um sistema de cadastro e login real deverá ser implementado.

<br>

## Caso de Teste 2

| Caso de Teste         | Caso de Teste	CT-02 – Cadastro de usuário (Vendedor) |
|-----------------------|--------------------------------------------------------|
| Resultado do teste    | Concluído com sucesso |
| Critérios de Êxito    | -	Realizar cadastro de dados pessoais. <br>- Cadastro só pode ser bem sucedido caso o e-mail não tenha sido cadastrado anteriormente. <br>- Cadastro só pode ser bem sucedido caso a senha tenha sido repetida corretamente. <br>- Uma nova loja deve ser criada após o cadastro ser confirmado (loja deve aparecer na recomendação ou busca de vendedores e ser acessível). |
### Resultados obtidos:

-	<b> Realizar cadastro de dados pessoais - Sucesso</b><br>
  Ao preencher todos os campos requisitados com um e-mail e senha válidos (com um e-mail não utilizado anteriormente), uma mensagem de sucesso dizendo "Usuário cadastrado com sucesso!" foi exibida. Após fazer isto, verificou-se que as informações fornecidas haviam sido devidamente guardadas no localstorage.

![CT2_localstorageAa](https://user-images.githubusercontent.com/74699119/143779304-1c89d902-fc54-4704-9c40-6d0f15b6b2f1.png)

- <b> Cadastro só pode ser bem sucedido caso o e-mail não tenha sido cadastrado anteriormente - Sucesso</b><br> 
  Ao repetir os mesmos passos do primeiro teste, porém utilizando um e-mail já cadastrado, uma mensagem de erro dizendo "O e-mail email@email.com já foi cadastrado anteriormente! Use outro e-mail." é exibida e nenhuma informaçõa nova é salva no local storage.
  
- <b> Cadastro só pode ser bem sucedido caso a senha tenha sido repetida corretamente - Sucesso</b><br>
  Ao repetir os mesmos passos do primeiro teste, usando um e-mail ainda não cadastrado, porém preenchendo informações distintas no campo "senha" e "repetir senha", uma mensagem de erro dizendo "A senha digitada em "repita a senha" não bate com a do campo "senha"!" é exibida e nenhuma informaçõa nova é salva no local storage.

- <b>Uma nova loja deve ser criada após o cadastro ser confirmado (loja deve aparecer na recomendação ou busca de vendedores e ser acessível) - Sucesso</b><br>
  Após o cadastro do usuário como vendedor, uma nova loja foi adicionada a "listaVendedores" no local storage:

![CT2_localstorageb](https://user-images.githubusercontent.com/74699119/143779307-d4bccb17-6b9e-4aa2-a9b0-848c8eca7f98.png)

Além disto, a nova pode pode ser visualizada no menu de recomendação de vendedores  e na lista de busca, sendo acessível ao clicar na imagem da loja:

![CT2_recomendacao](https://user-images.githubusercontent.com/74699119/143779296-00ef78f9-7274-481f-acd8-87140fd98a19.png)
<br>
![CT2_busca](https://user-images.githubusercontent.com/74699119/143779145-9d63b878-cddd-494b-83b1-8c775789d015.png)
<br>
![CT2_loja](https://user-images.githubusercontent.com/74699119/143779178-a6e6408e-96f2-4745-93c7-9789cd86828b.png)
<br>
### Pontos que podem ser melhorados:

Na etapa atual, o sistema de cadastro login é apenas uma simulação utilizando o local storage. Caso o projeto venha a ser reaproveitado na etapa de desenvolvimento backend, um sistema de cadastro e login real deverá ser implementado.

<br>

## Caso de Teste 3

| Caso de Teste         | Caso de Teste	CT-03 – Login e logoff de usuário |
|-----------------------|--------------------------------------------------------|
| Resultado do teste    | Concluído com sucesso |
| Critérios de Êxito    | -	Realizar o Login da conta. <br>- Login só pode ser bem sucedido com um e-mail cadastrado e informando a senha correta. <br> - Realizar logoff e verificar que a opção "Minha conta" voltou a ser "Fazer Login" após o logoff |
### Resultados obtidos:

-	<b>Realizar o Login da conta - Sucesso</b><br>
Ao informar o e-mail e senha corretamente e clicar em "entrar", uma mensagem dizendo "Login efetuado com sucesso!" foi mostrada e o nome do usuário referente a conta passou a aparecer no cabeçalho abaixo da opção "minha conta".
Antes do login
<br>

![CT3_prelogin](https://user-images.githubusercontent.com/74699119/143780418-f9d558dc-10b4-477f-bbb6-e111866f6390.png)

<br>

Após login

<br>

![CT3_poslogin](https://user-images.githubusercontent.com/74699119/143780420-0eea53af-b582-4647-bff5-fa16aa0fe418.png)

<br>
- <b>Login só pode ser bem sucedido com um e-mail cadastrado e informando a senha correta - Sucesso</b><br>
Ao informar um e-mail não cadastrado, uma mensagem dizendo "Não há nenhum usuário cadastrado com o E-mail ada@ada! Crie uma conta." é exibida e o login não é efetuado. Ao informar um e-mail já cadastrado, mas a senha incorreta, uma mensagem dizendo "Senha incorreta!" é exibida e o login não é efetuado.

- <b>Realizar logoff e verificar que a opção "Minha conta" voltou a ser "Fazer Login" após o logoff</b><br>
Opção de logoff
<br>

![CT3_C](https://user-images.githubusercontent.com/74699119/143780756-18c8a9ab-188c-459b-8ea8-9e05e419d160.png)

<br>
Resultado obtido ao clicar na opção
<br>

![CT3_D](https://user-images.githubusercontent.com/74699119/143780769-7c83b97f-6000-42b5-8e55-8522a90825bd.png)

<br>

## Caso de Teste 4

| Caso de Teste         | Caso de Teste	CT-04 – Visualizar e alterar dados do usuário |
|-----------------------|--------------------------------------------------------|
| Resultado do teste    | Concluído com sucesso |
| Critérios de Êxito    | -	O modal de dados do usuário deve abrir e mostrar os dados do usuário. <br> - Os campos de "E-mail" e "Senha" só poderão ser alterados caso a senha atual seja informada (e a senha nova repetida no campo "repetir senha" para o caso da alteração de senha). <br> - As informações alteradas com exito devem ainda estar presentes após fechar e abrir a funcionalidade novamente. |
### Resultados obtidos:

- <b>O modal de dados do usuário deve abrir e mostrar os dados do usuário</b><br> 
<br>
Menu do usuário<br>

![CT4_A](https://user-images.githubusercontent.com/74699119/143780799-89162016-6988-4642-883e-cc42e038a9d1.png)

<br>
Modal de dados do usuário

![CT4_B](https://user-images.githubusercontent.com/74699119/143780800-a187ea74-1784-437a-b2c0-915ad2eff827.png)

<br>
- <b>Os campos de "E-mail" e "Senha" só poderão ser alterados caso a senha atual seja informada (e a senha nova repetida no campo "repetir senha" para o caso da alteração de senha)</b><br>
Ao informar a senha errada para a troca de e-mail, uma mensagem de "senha incorreta!" é exibida e o e-mail não é trocado. Ao tentar trocar a senha fornecendo a senha antiga incorreta ou não repetindo corretamente a nova senha, uma mensagem de "informações incorretas!" é exibida e a senha não é trocada
<br>
- <b>As informações alteradas com exito devem ainda estar presentes após fechar e abrir a funcionalidade novamente</b><br>
Antes de trocar
![CT4_B](https://user-images.githubusercontent.com/74699119/143780152-b19d1ff8-f8fa-456b-907b-20c08684d2e1.png)
<br>
Após trocar
<br>

![CT4_C](https://user-images.githubusercontent.com/74699119/143780872-9a73591d-ffd2-481a-b319-3f032cb9cb0b.png)

<br>
Após abrir e fechar
<br>

![CT4_D](https://user-images.githubusercontent.com/74699119/143780815-6d43d1ee-faef-4481-86dc-82ea8c79fef8.png)

<br>

## Caso de Teste 5

| Caso de Teste         | Caso de Teste	CT-05 – Selecionar endereço |
|-----------------------|--------------------------------------------------------|
| Resultado do teste    | Concluído com sucesso |
| Critérios de Êxito    | -	O modal de seleção de endereço deve aparecer após clicar em "Entrega para". <br> - O endereço submetido deve estar presente abaixo da opção "Entrega para" no cabeçalho. <br> - Caso o usuário tenha feito login em uma conta, o endereço escolhido deve ficar salvo e estar presente novamente quando acessar essa conta |

<br>

| Caso de Teste         | Caso de Teste	CT-06 – Visualizar vendedores recomendados na página inicial |
|-----------------------|--------------------------------------------------------|
| Resultado do teste    | Concluído com sucesso |
| Critérios de Êxito    | -	Os vendedores cadastrados no website (Doces caseiros, Massas congeladas, Marmitas vegan, Cupcakes variados e novas lojas criadas ao cadastrar usuários como vendedores) devem aparecer nas recomendações (clicar nas setas à esquerda ou direita para mostrar mais vendedores). <br> - Ao chegar no final da lista de vendedores, a lista deve começar a repetir (mostrar novamente o primeiro ou último vendedor da lista ao clicar novamente na seta direita ou esquerda, respectivamente).

<br>

| Caso de Teste         | Caso de Teste	CT-07 – Buscar vendedores cadastrados |
|-----------------------|--------------------------------------------------------|
| Resultado do teste    | Concluído com sucesso |
| Critérios de Êxito    | -	Os vendedores cadastrados no website (Doces caseiros, Massas congeladas, Marmitas vegan, Cupcakes variados e novas lojas criadas ao cadastrar usuários como vendedores) devem aparecer na lista de resultados. <br> - Mudar o filtro de busca "Avaliação maior que 4 estrelas" deve atualizar a lista excluindo os vendedores com avaliação menor do que 4/5. <br> - Clicar na imagem dos vendedores cadastrados deve redirecionar o usuário para a página de "mini website" do vendedor. |

<br>

| Caso de Teste         | Caso de Teste CT-08 – Visualização da página inicial de cada loja |
|-----------------------|--------------------------------------------------------|
| Resultado do teste    | Concluído com sucesso |
| Critérios de Êxito    | -	Visualizar a imagem do vendedor cadastrado, texto de descrição da loja e vídeo de apresentação (se presente para aquela loja) para as lojas cadastradas |

<br>

| Caso de Teste         | Caso de Teste CT-09 – Adicionar e remover produtos de uma loja ao carrinho de compras |
|-----------------------|--------------------------------------------------------|
| Resultado do teste    | Concluído com sucesso |
| Critérios de Êxito    | -	Visualizar os produtos cadastrados. <br> - Visualizar o modal de detalhes do produto após clicar em "mais detalhes" <br> - Verificar que a ordem do produto foi corretamente adicionada ao carrinho <br> - Verificar que os produtos adicionados são removido do carrinho ao clicar em "cancelar". |

<br>

| Caso de Teste         | Caso de Teste CT-10 – Submeter o pedido de compra dos produtos adicionados ao carrinho |
|-----------------------|--------------------------------------------------------|
| Resultado do teste    | Concluído com sucesso |
| Critérios de Êxito    | -	Submeter o pedido com sucesso. <br> - O pedido só deve ser submetido caso o usuário esteja logado e tenha selecionado uma forma de pagamento e entrega. |

<br>

| Caso de Teste         | Caso de Teste CT-11 – Visualizar histórico de pedidos e repetir pedido |
|-----------------------|--------------------------------------------------------|
| Resultado do teste    | Concluído com sucesso |
| Critérios de Êxito    | -	Visualizar as informações dos pedidos feitos anteriormente com sucesso <br> - Ser redirecionado para a página do carrinho da loja contendo os itens do pedido a ser repetido ao clicar em "Repetir pedido" |

<br>

| Caso de Teste         | Caso de Teste CT-12 – Visualizar redes sociais do vendedor |
|-----------------------|--------------------------------------------------------|
| Resultado do teste    | Concluído com sucesso |
| Critérios de Êxito    | -	Visualizar os icones das redes sociais do vendedor na página. <br> - Ser redirecionado para as redes sociais em uma nova aba do navegador ao clicar nos icones (como os vendedores cadastrados são fictícios, clicar nessas redes sociais deve apenas redirecionar para a página inicial da rede social em questão) |

<br>

| Caso de Teste         | Caso de Teste CT-13 – Submeter mensagem para o vendedor |
|-----------------------|--------------------------------------------------------|
| Resultado do teste    | Concluído com sucesso |
| Critérios de Êxito    | -	Submeter o formulário presente na página com sucesso (mensagem não é enviada para ninguém já que o aplicativo apenas simula este mecanismo no momento) |

<br>

| Caso de Teste         | Caso de Teste CT-14 – Salvar/remover vendedor nos favoritos |
|-----------------------|--------------------------------------------------------|
| Resultado do teste    | Concluído com sucesso |
| Critérios de Êxito    | -	Ser capaz de visualizar o vendedor no modal de favoritos após favorita-lo. <br> - Ser redirecionado para a página inicial do mini website do vendedor salvo ao clicar em "Ir para página". <br> - Ser capaz de remover o vendedor da lista de favoritos clicando em "remover". |

<br>

| Caso de Teste         | Caso de Teste CT-15 – Salvar/remover produto nos favoritos |
|-----------------------|--------------------------------------------------------|
| Resultado do teste    | Concluído com sucesso |
| Critérios de Êxito    | -	Ser capaz de visualizar o produto no modal de favoritos após favorita-lo. <br> - Ser redirecionado para o modal de "mais detalhes" do produto salvo ao clicar em "Ir para página". <br> - Ser capaz de remover o produto da lista de favoritos clicando em "remover". |

<br>

| Caso de Teste         | Caso de Teste	CT-16 – Adicionar e remover formas de pagamento |
|-----------------------|--------------------------------------------------------|
| Resultado do teste    | Concluído com sucesso |
| Critérios de Êxito    | -	O modal de pagamentos salvos deve ser visualizado <br> - Um novo cartão deve ser adicionado ao clicar em "adicionar cartão" e permanecer salvo ao fechar e abrir o modal <br> - Clicar em "remover" em um cartão salvo deve apagar o cartão da lista |

<br>

| Caso de Teste         | Caso de Teste	CT-17 – Customizar informações do mini-website (Vendedor) |
|-----------------------|--------------------------------------------------------|
| Resultado do teste    | Concluído com sucesso |
| Critérios de Êxito    | -	As informações alteradas devem permanecer após sair e voltar para a página de gerenciar loja <br> - As informações atualizadas deverão aparecer ao visualizar a loja do vendedor na seção de recomendação e busca e ao visitar o mini website da loja. |

<br>

| Caso de Teste         | Caso de Teste	CT-18 – Cadastrar novo produto na loja (Vendedor) |
|-----------------------|--------------------------------------------------------|
| Resultado do teste    | Concluído com sucesso |
| Critérios de Êxito    | -	As informações cadastradas devem permanecer após sair e voltar para a página de produtos <br> - Os produtos cadastrados deverão aparecer ao visualizar a página de produtos da loja do vendedor e deve ser possível adiciona-los ao carrinho de compras e submeter um pedido. <br> - Os produtos devem ser removidos do mini-website ao clicar em "Remover" na aba de produtos da página de gerenciamento da loja ou ter suas informações alteradas ao clicar em "Editar produto". |

<br>

| Caso de Teste         | Caso de Teste	CT-19 – Customizar opções de pagamento do mini-website (Vendedor) |
|-----------------------|--------------------------------------------------------|
| Resultado do teste    | Concluído com sucesso |
| Critérios de Êxito    | -	As informações alteradas devem permanecer após sair e voltar para a aba de "Venda/Entrega". <br> - As informações atualizadas deverão aparecer ao tentar submeter um pedido de compra no mini website do vendedor em questão. |
