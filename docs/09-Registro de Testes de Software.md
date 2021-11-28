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

- <b>Realizar logoff e verificar que a opção "Minha conta" voltou a ser "Fazer Login" após o logoff - Sucesso</b><br>
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

- <b>O modal de dados do usuário deve abrir e mostrar os dados do usuário - Sucesso</b><br> 
<br>
Menu do usuário<br>

![CT4_A](https://user-images.githubusercontent.com/74699119/143780799-89162016-6988-4642-883e-cc42e038a9d1.png)

<br>
Modal de dados do usuário

![CT4_B](https://user-images.githubusercontent.com/74699119/143780800-a187ea74-1784-437a-b2c0-915ad2eff827.png)

<br>
- <b>Os campos de "E-mail" e "Senha" só poderão ser alterados caso a senha atual seja informada (e a senha nova repetida no campo "repetir senha" para o caso da alteração de senha) - Sucesso</b><br>
Ao informar a senha errada para a troca de e-mail, uma mensagem de "senha incorreta!" é exibida e o e-mail não é trocado. Ao tentar trocar a senha fornecendo a senha antiga incorreta ou não repetindo corretamente a nova senha, uma mensagem de "informações incorretas!" é exibida e a senha não é trocada
<br>
- <b>As informações alteradas com exito devem ainda estar presentes após fechar e abrir a funcionalidade novamente - Sucesso</b><br>
Antes de trocar
![CT4_B](https://user-images.githubusercontent.com/74699119/143780152-b19d1ff8-f8fa-456b-907b-20c08684d2e1.png)
<br>
Após trocar
<br>

![CT4_C](https://user-images.githubusercontent.com/74699119/143780872-9a73591d-ffd2-481a-b319-3f032cb9cb0b.png)

<br>
Após abrir e fechar
<br>

![CT4_D](https://user-images.githubusercontent.com/74699119/143780921-0edfb05a-39ef-49b6-9cb2-546a9361caa2.png)

<br>

## Caso de Teste 5

| Caso de Teste         | Caso de Teste	CT-05 – Selecionar endereço |
|-----------------------|--------------------------------------------------------|
| Resultado do teste    | Concluído com sucesso |
| Critérios de Êxito    | -	O modal de seleção de endereço deve aparecer após clicar em "Entrega para". <br> - O endereço submetido deve estar presente abaixo da opção "Entrega para" no cabeçalho. <br> - Caso o usuário tenha feito login em uma conta, o endereço escolhido deve ficar salvo e estar presente novamente quando acessar essa conta |
### Resultados obtidos:

- <b>O modal de seleção de endereço deve aparecer após clicar em "Entrega para" - Sucesso</b><br> 
![CT5_A](https://user-images.githubusercontent.com/74699119/143781601-5ea6ab2f-5183-44b9-8ea2-ca20bdedf46d.png)
<br>

![CT5_B](https://user-images.githubusercontent.com/74699119/143781754-22e25476-642e-4a9c-823a-a5105f54bc5f.png)


- <b>O endereço submetido deve estar presente abaixo da opção "Entrega para" no cabeçalho - Sucesso</b><br> 

![CT5_C](https://user-images.githubusercontent.com/74699119/143781775-0757b5bc-06c0-4f6b-af8f-0235f829cfd0.png)

<br>

![CT5_D](https://user-images.githubusercontent.com/74699119/143781782-f1619e38-2605-4ed8-8b76-b28192dcd84d.png)

<br>

![CT5_E](https://user-images.githubusercontent.com/74699119/143781785-e56a2f8f-4f17-43b0-95b0-fa6ed69460f6.png)

<br>

- <b>Caso o usuário tenha feito login em uma conta, o endereço escolhido deve ficar salvo e estar presente novamente quando acessar essa conta - Sucesso</b><br>

Login com outro usuário
![CT5_F](https://user-images.githubusercontent.com/74699119/143781690-4d94e056-f55d-4f1e-8727-2a7f8103b35d.png)

<br>
Endereço mostrado após voltar para o primeiro usuário<br>

![CT5_G](https://user-images.githubusercontent.com/74699119/143781740-d10b1f9e-f184-4f81-ab29-a9dbe4375ebf.png)

<br>

## Caso de teste 6

| Caso de Teste         | Caso de Teste	CT-06 – Visualizar vendedores recomendados na página inicial |
|-----------------------|--------------------------------------------------------|
| Resultado do teste    | Concluído com sucesso |
| Critérios de Êxito    | -	Os vendedores cadastrados no website (Doces caseiros, Massas congeladas, Marmitas vegan, Cupcakes variados e novas lojas criadas ao cadastrar usuários como vendedores) devem aparecer nas recomendações (clicar nas setas à esquerda ou direita para mostrar mais vendedores). <br> - Ao chegar no final da lista de vendedores, a lista deve começar a repetir (mostrar novamente o primeiro ou último vendedor da lista ao clicar novamente na seta direita ou esquerda, respectivamente).
### Resultados obtidos
<br>

- <b>Os vendedores cadastrados no website (Doces caseiros, Massas congeladas, Marmitas vegan, Cupcakes variados e novas lojas criadas ao cadastrar usuários como vendedores) devem aparecer nas recomendações (clicar nas setas à esquerda ou direita para mostrar mais vendedores) - Sucesso</b><br>

![CT6_A](https://user-images.githubusercontent.com/74699119/143781947-a667c67c-13f9-4e9a-a7eb-4cf79ca5f3ef.png)

<br>

- <b>Ao chegar no final da lista de vendedores, a lista deve começar a repetir (mostrar novamente o primeiro ou último vendedor da lista ao clicar novamente na seta direita ou esquerda, respectivamente) - Sucesso</b><br>

![CT6_B](https://user-images.githubusercontent.com/74699119/143781956-a730ef1d-857f-4f85-aa82-6db35a86872f.png)

<br>

## Caso de teste 7

| Caso de Teste         | Caso de Teste	CT-07 – Buscar vendedores cadastrados |
|-----------------------|--------------------------------------------------------|
| Resultado do teste    | Concluído com sucesso |
| Critérios de Êxito    | -	Os vendedores cadastrados no website (Doces caseiros, Massas congeladas, Marmitas vegan, Cupcakes variados e novas lojas criadas ao cadastrar usuários como vendedores) devem aparecer na lista de resultados. <br> - Mudar o filtro de busca "Avaliação maior que 4 estrelas" deve atualizar a lista excluindo os vendedores com avaliação menor do que 4/5. <br> - Clicar na imagem dos vendedores cadastrados deve redirecionar o usuário para a página de "mini website" do vendedor. |
### Resultados obtidos
<br>

- <b>Os vendedores cadastrados no website (Doces caseiros, Massas congeladas, Marmitas vegan, Cupcakes variados e novas lojas criadas ao cadastrar usuários como vendedores) devem aparecer na lista de resultados - Sucesso</b><br>

![CT7_A](https://user-images.githubusercontent.com/74699119/143782860-cb62e58d-ee57-48e4-bf27-2654c4adbf97.png)

<br>

- <b>Mudar o filtro de busca "Avaliação maior que 4 estrelas" deve atualizar a lista excluindo os vendedores com avaliação menor do que 4/5 - Sucesso</b><br>

![CT7_B](https://user-images.githubusercontent.com/74699119/143782865-aa4799ee-53fa-4f14-b776-d6aae470d949.png)

<br>

- <b>Clicar na imagem dos vendedores cadastrados deve redirecionar o usuário para a página de "mini website" do vendedor - Sucesso</b><br>

![CT7_C](https://user-images.githubusercontent.com/74699119/143782868-e62d0956-4de3-49c3-ade4-af6f3af5fbda.png)

<br>

## Caso de teste 8

| Caso de Teste         | Caso de Teste CT-08 – Visualização da página inicial de cada loja |
|-----------------------|--------------------------------------------------------|
| Resultado do teste    | Concluído com sucesso |
| Critérios de Êxito    | -	Visualizar a imagem do vendedor cadastrado, texto de descrição da loja e vídeo de apresentação (se presente para aquela loja) para as lojas cadastradas |
### Resultados obtidos

- <b> Visualizar a imagem do vendedor cadastrado, texto de descrição da loja e vídeo de apresentação (se presente para aquela loja) para as lojas cadastradas - Sucesso<b><br>

![CT8_A](https://user-images.githubusercontent.com/74699119/143782991-ff23a8ef-12a6-489d-ae01-92729c0503b6.png)

<br>
  
![CT8_B](https://user-images.githubusercontent.com/74699119/143783000-c42d7f69-472d-4f6d-b67e-5e8c337c6e6c.png)

<br>
  
![CT8_C](https://user-images.githubusercontent.com/74699119/143783003-0a7f8b63-4b1e-4d70-8d29-c2463a5e5541.png)

<br>
  
![CT8_D](https://user-images.githubusercontent.com/74699119/143783009-5788250f-8695-474b-a544-e3b861f48a23.png)

<br>
  
![CT8_E](https://user-images.githubusercontent.com/74699119/143783016-1970bde0-fc53-44c9-a7bd-1048ff57eca5.png)
  
<br>

## Caso de teste 9
  
- <b>Os vendedores cadastrados no website (Doces caseiros, Massas congeladas, Marmitas vegan, Cupcakes variados e novas lojas criadas ao cadastrar usuários como vendedores) devem aparecer na lista de resultados - Sucesso</b><br>
<br>

| Caso de Teste         | Caso de Teste CT-09 – Adicionar e remover produtos de uma loja ao carrinho de compras |
|-----------------------|--------------------------------------------------------|
| Resultado do teste    | Concluído com sucesso |
| Critérios de Êxito    | -	Visualizar os produtos cadastrados. <br> - Visualizar o modal de detalhes do produto após clicar em "mais detalhes" <br> - Verificar que a ordem do produto foi corretamente adicionada ao carrinho <br> - Verificar que os produtos adicionados são removido do carrinho ao clicar em "cancelar". |
### Resultados obtidos

- <b>Visualizar os produtos cadastrados - Sucesso<b><br>

![CT9_A](https://user-images.githubusercontent.com/74699119/143783206-f08d5699-aab2-46f6-baff-26d75c80a83b.png)

<br>

- <b>Visualizar o modal de detalhes do produto após clicar em "mais detalhes" - Sucesso<b><br>
  
![CT9_B](https://user-images.githubusercontent.com/74699119/143783214-418cf2f9-afb8-4156-9803-f98e06cf5a11.png)

<br>

Após clicar em "Adcionar ao carrinho"
![CT9_C](https://user-images.githubusercontent.com/74699119/143783221-24e93b5c-c95d-4a9e-94db-9bcf29b298c0.png)

<br>
  
Após clicar novamente em "Adcionar ao carrinho"
![CT9_D](https://user-images.githubusercontent.com/74699119/143783229-e7940ccb-eac4-43a1-ac86-0385a2458989.png)

<br>

- <b>Verificar que a ordem do produto foi corretamente adicionada ao carrinho - Sucesso<b><br>
  
![CT9_E](https://user-images.githubusercontent.com/74699119/143783234-8619a610-5238-4193-9209-ced1ce41f93c.png)

<br>
  
- <b>Verificar que os produtos adicionados são removido do carrinho ao clicar em "cancelar" - Sucesso<b><br>

![CT9_E](https://user-images.githubusercontent.com/74699119/143783234-8619a610-5238-4193-9209-ced1ce41f93c.png)

<br>

Após clicar em "cancelar"
![CT9_F](https://user-images.githubusercontent.com/74699119/143783245-4d16ad5f-10a5-4a07-a0a2-6eab69c2095b.png)
  
Adicionando outro produto diretametne da página do carrinho
<br>
  
![CT9_G](https://user-images.githubusercontent.com/74699119/143783275-86bb96f9-afcc-4fa8-8769-ba1078ec9df2.png)

<br>
  
![CT9_H](https://user-images.githubusercontent.com/74699119/143783287-ec581fbc-0f24-4113-8a71-a5a66206320f.png)
  
<br>
  
## Caso de teste 10

| Caso de Teste         | Caso de Teste CT-10 – Submeter o pedido de compra dos produtos adicionados ao carrinho |
|-----------------------|--------------------------------------------------------|
| Resultado do teste    | Concluído com sucesso |
| Critérios de Êxito    | -	Submeter o pedido com sucesso. <br> - O pedido só deve ser submetido caso o usuário esteja logado e tenha selecionado uma forma de pagamento e entrega. |
### Resultados obtidos

- <b>Submeter o pedido com sucesso - Sucesso<b><br>

![CT10_A](https://user-images.githubusercontent.com/74699119/143783406-cf5e14c9-d9c7-4af0-acfc-0015ec287087.png)
  
<br>

![CT10_B](https://user-images.githubusercontent.com/74699119/143783412-3feb8026-96bd-4027-92df-dfabb3af083c.png)
  
<br>

![CT10_C](https://user-images.githubusercontent.com/74699119/143783421-9bd98608-2754-4e78-a9cf-6a9b0806ac4d.png)
  
<br>
- <b>O pedido só deve ser submetido caso o usuário esteja logado e tenha selecionado uma forma de pagamento e entrega - Sucesso</b><br>
Ao tentar submeter um pedido sem estar logado, uma mensagem dizendo "Faça login para finalizar o pedido" é exibida ao clicar pela primeira vez no botão "adicionar carrinho" e o pedido não é submetido. Caso o carrinho esteja vazio, uma mensagem dizendo "Carrinho vazio!" é exibida e o pedido não é submetido. Caso uma forma de pagamento ou entrega não tenha sido selecionada, o formulário não é submetido ao clicar em "adicionar carrinho" e o navegador solicita que você selecione uma opção. No caso de uma loja não possuir nenhum método de pagamento ou entrega cadastrado (o que pode ocorrer em uma loja nova cadastrada por um usuário vendedor), as mensagens "Formas de pagamento indisponíveis no momento!" ou "Entrega indisponível no momento!" são exibidas respectivamente.

<br>

## Caso de teste 11
  
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
