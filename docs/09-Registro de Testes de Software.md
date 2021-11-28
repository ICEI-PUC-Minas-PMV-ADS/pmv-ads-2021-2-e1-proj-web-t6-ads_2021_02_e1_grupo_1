# Registro de Testes de Software

Todos os testes de software foram realizados nos navegadores Google Chrome, Mozilla Firefox e Microsoft Edge e verificando a responsividade (encolhendo a janela na horizontal até a dimensão mínima aceita pelo navegador). Problemas de compatibilidade com o navegador ou responsividade, se presentes, estarão descritos na seção "Pontos que podem ser melhorados", o reultado de cada teste será considerado "concluído com sucesso" caso todos os critérios de êxito sejam atendidos e não se observe nenhum problema na compatibilidade com navegadores ou responsividade. Os resultados obtidos nos testes de software realizados estão descritos a seguir. 

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

### Pontos que podem ser melhorados:

Na etapa atual, o sistema de cadastro login é apenas uma simulação utilizando o local storage. Caso o projeto venha a ser reaproveitado na etapa de desenvolvimento backend, um sistema de cadastro e login real deverá ser implementado.

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

![CT4_B](https://user-images.githubusercontent.com/74699119/143783721-7be4ba41-d50f-4a9c-ac1e-33f08558e3cf.png)

<br>
Após trocar
<br>

![CT4_C](https://user-images.githubusercontent.com/74699119/143780872-9a73591d-ffd2-481a-b319-3f032cb9cb0b.png)

<br>
Após abrir e fechar
<br>

![CT4_D](https://user-images.githubusercontent.com/74699119/143780921-0edfb05a-39ef-49b6-9cb2-546a9361caa2.png)

<br>

### Pontos que podem ser melhorados:

Na etapa atual, os dados do usuário ficam salvos no local storage. Caso o projeto venha a ser reaproveitado na etapa de desenvolvimento backend, um sistema de cadastro e login real deverá ser implementado.

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

### Pontos que podem ser melhorados:

Na etapa atual, o sistema de busca de vendedores e entregas é apenas simulado e não utiliza a informação da localização do usuário. Além disto, o usuário pode digitar qualquer informação que deseje como seu endereço ao em vez de utilizar um serviço que o permita selecionar um endereço real. Caso o projeto venha a ser reaproveitado na etapa de desenvolvimento backend, um sistema de seleção de endereço real deverá ser implementado.

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

### Pontos que podem ser melhorados:

Na etapa atual, o sistema de busca de vendedores e entregas é apenas simulado e não utiliza a informação da localização do usuário, portanto, todos os vendedores cadastrados são listados na lista de vendedores recomendados, e não somente aqueles que realizam entregas para a região do usuário. Caso o projeto venha a ser reaproveitado na etapa de desenvolvimento backend, um sistema de seleção de endereço real deverá ser implementado.


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

### Pontos que podem ser melhorados:

Na etapa atual, o sistema de busca de vendedores utiliza o local storage e não possui um backend real, além disto, os vendedores possuem poucos produtos e a maior parte das descrições são placeholders "lorem ipsum". Desta forma, o input da barra de busca não possui efeito sobre quais vendedores são listados (qualquer coisa digitada na busca mostrará sempre todos os vendedores como resultado, em vez de selecionar aqueles que melhor se encaixam nas palavras chave). Caso o projeto venha a ser reaproveitado na etapa de desenvolvimento backend, um sistema de busca por palavras chave real deverá ser implementado.

<br>

## Caso de teste 8

| Caso de Teste         | Caso de Teste CT-08 – Visualização da página inicial de cada loja |
|-----------------------|--------------------------------------------------------|
| Resultado do teste    | Concluído com sucesso |
| Critérios de Êxito    | -	Visualizar a imagem do vendedor cadastrado, texto de descrição da loja e vídeo de apresentação (se presente para aquela loja) para as lojas cadastradas |
### Resultados obtidos

- <b> Visualizar a imagem do vendedor cadastrado, texto de descrição da loja e vídeo de apresentação (se presente para aquela loja) para as lojas cadastradas - Sucesso</b><br>

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
| Caso de Teste         | Caso de Teste CT-09 – Adicionar e remover produtos de uma loja ao carrinho de compras |
|-----------------------|--------------------------------------------------------|
| Resultado do teste    | Concluído com sucesso |
| Critérios de Êxito    | -	Visualizar os produtos cadastrados. <br> - Visualizar o modal de detalhes do produto após clicar em "mais detalhes" <br> - Verificar que a ordem do produto foi corretamente adicionada ao carrinho <br> - Verificar que os produtos adicionados são removido do carrinho ao clicar em "cancelar". |
### Resultados obtidos

- <b>Visualizar os produtos cadastrados - Sucesso</b><br>

![CT9_A](https://user-images.githubusercontent.com/74699119/143783206-f08d5699-aab2-46f6-baff-26d75c80a83b.png)

<br>

- <b>Visualizar o modal de detalhes do produto após clicar em "mais detalhes" - Sucesso</b><br>
  
![CT9_B](https://user-images.githubusercontent.com/74699119/143783214-418cf2f9-afb8-4156-9803-f98e06cf5a11.png)

<br>

Após clicar em "Adcionar ao carrinho"
![CT9_C](https://user-images.githubusercontent.com/74699119/143783221-24e93b5c-c95d-4a9e-94db-9bcf29b298c0.png)

<br>
  
Após clicar novamente em "Adcionar ao carrinho"
![CT9_D](https://user-images.githubusercontent.com/74699119/143783229-e7940ccb-eac4-43a1-ac86-0385a2458989.png)

<br>

- <b>Verificar que a ordem do produto foi corretamente adicionada ao carrinho - Sucesso</b><br>
  
![CT9_E](https://user-images.githubusercontent.com/74699119/143783234-8619a610-5238-4193-9209-ced1ce41f93c.png)

<br>
  
- <b>Verificar que os produtos adicionados são removido do carrinho ao clicar em "cancelar" - Sucesso</b><br>

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

- <b>Submeter o pedido com sucesso - Sucesso</b><br>

![CT10_A](https://user-images.githubusercontent.com/74699119/143783406-cf5e14c9-d9c7-4af0-acfc-0015ec287087.png)
  
<br>

![CT10_B](https://user-images.githubusercontent.com/74699119/143783412-3feb8026-96bd-4027-92df-dfabb3af083c.png)
  
<br>

![CT10_C](https://user-images.githubusercontent.com/74699119/143783421-9bd98608-2754-4e78-a9cf-6a9b0806ac4d.png)
  
<br>

- <b>O pedido só deve ser submetido caso o usuário esteja logado e tenha selecionado uma forma de pagamento e entrega - Sucesso</b><br>
  
Ao tentar submeter um pedido sem estar logado, uma mensagem dizendo "Faça login para finalizar o pedido" é exibida ao clicar pela primeira vez no botão "adicionar carrinho" e o pedido não é submetido. Caso o carrinho esteja vazio, uma mensagem dizendo "Carrinho vazio!" é exibida e o pedido não é submetido. Caso uma forma de pagamento ou entrega não tenha sido selecionada, o formulário não é submetido ao clicar em "adicionar carrinho" e o navegador solicita que você selecione uma opção. No caso de uma loja não possuir nenhum método de pagamento ou entrega cadastrado (o que pode ocorrer em uma loja nova cadastrada por um usuário vendedor), as mensagens "Formas de pagamento indisponíveis no momento!" ou "Entrega indisponível no momento!" são exibidas respectivamente.

<br>

### Pontos que podem ser melhorados:

Na etapa atual, o sistema de compra de produtos é apenas simulado e não envia o pedido para o e-mail/Whatsapp do vendedor e nem possui um sistema interno de cobrança. Caso o projeto venha a ser reaproveitado na etapa de desenvolvimento backend, um sistema de compra de produtos mais próximo de um sistema real deverá ser implementado.

<br>

## Caso de teste 11
  
| Caso de Teste         | Caso de Teste CT-11 – Visualizar histórico de pedidos e repetir pedido |
|-----------------------|--------------------------------------------------------|
| Resultado do teste    | Concluído com sucesso |
| Critérios de Êxito    | -	Visualizar as informações dos pedidos feitos anteriormente com sucesso <br> - Ser redirecionado para a página do carrinho da loja contendo os itens do pedido a ser repetido ao clicar em "Repetir pedido" |
### Resultados obtidos

- <b>Visualizar as informações dos pedidos feitos anteriormente com sucesso - Sucesso</b><br>

![CT11_A](https://user-images.githubusercontent.com/74699119/143785503-ecb03cd5-3795-4286-92e8-7a2eaefd2eed.png)

<br>

![CT11_B](https://user-images.githubusercontent.com/74699119/143785508-fbeed768-bacd-4d32-b32b-fcbe7ebee273.png)

<br>

![CT11_C](https://user-images.githubusercontent.com/74699119/143785512-ef7e4ffa-aa50-4a8d-a00e-b9b5093a66c9.png)

<br>

- <b>Ser redirecionado para a página do carrinho da loja contendo os itens do pedido a ser repetido ao clicar em "Repetir pedido" - Sucesso</b><br>
<br>

![CT11_D](https://user-images.githubusercontent.com/74699119/143785520-abcb2399-c64b-4c84-b425-08f9d8bcd667.png)

<br>

![CT11_E](https://user-images.githubusercontent.com/74699119/143785525-79357348-18fb-4799-9cb0-3c12147ba4bf.png)

<br>

<br>

## Caso de teste 12

| Caso de Teste         | Caso de Teste CT-12 – Visualizar redes sociais do vendedor |
|-----------------------|--------------------------------------------------------|
| Resultado do teste    | Concluído com sucesso |
| Critérios de Êxito    | -	Visualizar os icones das redes sociais do vendedor na página. <br> - Ser redirecionado para as redes sociais em uma nova aba do navegador ao clicar nos icones (como os vendedores cadastrados são fictícios, clicar nessas redes sociais deve apenas redirecionar para a página inicial da rede social em questão) |
### Resultados obtidos

- <b>Visualizar os icones das redes sociais do vendedor na página - Sucesso</b><br>

![CT12_A](https://user-images.githubusercontent.com/74699119/143785620-a178f1bd-5bb2-4824-9b68-26ec1dd1d423.png)

- <b> Ser redirecionado para as redes sociais em uma nova aba do navegador ao clicar nos icones (como os vendedores cadastrados são fictícios, clicar nessas redes sociais deve apenas redirecionar para a página inicial da rede social em questão) - Sucesso</b><br>

Clicar no icone das redes sociais abriu uma nova aba com o endereço da página inicial da rede (Exemplo: Clicar no icone do facebook abre a página https://www.facebook.com).

<br>

# Caso de teste 13

| Caso de Teste         | Caso de Teste CT-13 – Submeter mensagem para o vendedor |
|-----------------------|--------------------------------------------------------|
| Resultado do teste    | Concluído com sucesso |
| Critérios de Êxito    | -	Submeter o formulário presente na página com sucesso (mensagem não é enviada para ninguém já que o aplicativo apenas simula este mecanismo no momento) |
### Resultados obtidos

- <b>Submeter o formulário presente na página com sucesso (mensagem não é enviada para ninguém já que o aplicativo apenas simula este mecanismo no momento) - Sucesso</b><br>

![CT13_A](https://user-images.githubusercontent.com/74699119/143786156-089a51af-4f3f-4bd2-8407-3690d4297731.png)

<br>

![CT13_B](https://user-images.githubusercontent.com/74699119/143786163-c98ca79e-421e-460d-83cc-5fa6b7c484ca.png)

<br>

![CT13_C](https://user-images.githubusercontent.com/74699119/143786396-ffe01233-1f7e-4e49-92ce-e7a5a55c98ee.png)

<br>


### Pontos que podem ser melhorados:

O sistema de envio de mensagens para o vendedor é apenas simulado. Nenhum e-mail ou mensagem de Whatsapp é realmente enviada para o contato do vendedor. Caso o projeto venha a ser reaproveitado na etapa de desenvolvimento backend, esta funcionalidade deverá ser revisitada de modo a realmente enviar uma mensagem para o e-mail/Whatsapp cadastrado pelo vendedor.

<br> 

## Caso de teste 14

| Caso de Teste         | Caso de Teste CT-14 – Salvar/remover vendedor nos favoritos |
|-----------------------|--------------------------------------------------------|
| Resultado do teste    | Concluído com sucesso |
| Critérios de Êxito    | -	Ser capaz de visualizar o vendedor no modal de favoritos após favorita-lo. <br> - Ser redirecionado para a página inicial do mini website do vendedor salvo ao clicar em "Ir para página". <br> - Ser capaz de remover o vendedor da lista de favoritos clicando em "remover". |
### Resultados obtidos

- <b>Ser capaz de visualizar o vendedor no modal de favoritos após favorita-lo - Sucesso</b><br>

![CT14_A](https://user-images.githubusercontent.com/74699119/143786425-075e87ec-f08e-4fc6-9baa-310fd9d449c2.png)

<br>

![CT14_B](https://user-images.githubusercontent.com/74699119/143786438-6cb4aa7a-9c14-4b67-b21d-4b4f54cdb8c1.png)

<br>

![CT14_C](https://user-images.githubusercontent.com/74699119/143786515-82409c37-2903-4a54-bec3-386e25e030d3.png)

<br>

![CT14_D](https://user-images.githubusercontent.com/74699119/143786519-8141f564-1f8d-47d2-b18e-e090b84b0ae6.png)

<br>

- <b>Ser redirecionado para a página inicial do mini website do vendedor salvo ao clicar em "Ir para página" - Sucesso</b><br>

![CT14_E](https://user-images.githubusercontent.com/74699119/143786525-0c429a8b-115d-4997-bc7d-cf6e7dc8c17f.png)

<br>

![CT14_F](https://user-images.githubusercontent.com/74699119/143786528-952a23a8-595f-47e9-b82d-a25b877210ab.png)

<br>

- <b>Ser capaz de remover o vendedor da lista de favoritos clicando em "remover" - Sucesso</b><br>

![CT14_G](https://user-images.githubusercontent.com/74699119/143786535-bb184bbd-2c26-4e96-8649-33fae0d72929.png)

<br>

![CT14_H](https://user-images.githubusercontent.com/74699119/143786541-1be86bb8-c73a-4f0c-aaee-3f206e4c2154.png)

<br>

# Caso de teste 15

| Caso de Teste         | Caso de Teste CT-15 – Salvar/remover produto nos favoritos |
|-----------------------|--------------------------------------------------------|
| Resultado do teste    | Concluído com sucesso |
| Critérios de Êxito    | -	Ser capaz de visualizar o produto no modal de favoritos após favorita-lo. <br> - Ser redirecionado para o modal de "mais detalhes" do produto salvo ao clicar em "Ir para página". <br> - Ser capaz de remover o produto da lista de favoritos clicando em "remover". |
### Resultados obtidos

- <b> Ser capaz de visualizar o vendedor no modal de favoritos após favorita-lo - Sucesso</b><br>

![CT15_A](https://user-images.githubusercontent.com/74699119/143786710-483e50b9-fc1b-4c6e-839c-0f686bb3004e.png)

<br>

![CT15_B](https://user-images.githubusercontent.com/74699119/143786714-08c73212-17b3-4dc4-9563-577e757f3b25.png)

<br>

![CT15_C](https://user-images.githubusercontent.com/74699119/143786717-75306f9c-c8ec-4e7e-81b4-d85d02059fa8.png)

<br>

![CT15_D](https://user-images.githubusercontent.com/74699119/143786720-ddda2fba-85e8-4721-85a4-adcb869b8b86.png)

<br>

- <b> Ser redirecionado para o modal de "mais detalhes" do produto salvo ao clicar em "Ir para página" - Sucesso</b><br>

![CT15_E](https://user-images.githubusercontent.com/74699119/143786726-edab68ac-503b-465e-8388-bbf2271fa8e8.png)

<br>

![CT15_F](https://user-images.githubusercontent.com/74699119/143786731-ce037d9a-2e6c-48b8-a16a-03b566e44439.png)

<br>
  
- <b> Ser capaz de remover o produto da lista de favoritos clicando em "remover" - Sucesso</b><br>

![CT15_G](https://user-images.githubusercontent.com/74699119/143786738-96762816-c1eb-48dd-8276-bdb8682f76b1.png)

<br>

![CT15_H](https://user-images.githubusercontent.com/74699119/143786743-21228cba-2e24-4ff1-a6a8-80844ea8eaf7.png)

<br>

### Pontos que podem ser melhorados:

O sistema atual não considera a possibilidade de produtos serem removidos ou terem seus preços alterados, além de não levar em consideração a quantidade de estoque que o vendedor possui na hora de repetir um pedido. Caso o projeto venha a ser reaproveitado na etapa de desenvolvimento backend, esta funcionalidade deverá ser revisitada de modo a atualizar as informações dos favoritos de modo a remover produtos que não existem mais, atualizar informações e também verificar se é possível repetir o pedido antes de redirecionar para a página do carrinho.

<br>

# Caso de teste 16

| Caso de Teste         | Caso de Teste	CT-16 – Adicionar e remover formas de pagamento |
|-----------------------|--------------------------------------------------------|
| Resultado do teste    | Concluído com sucesso |
| Critérios de Êxito    | -	O modal de pagamentos salvos deve ser visualizado <br> - Um novo cartão deve ser adicionado ao clicar em "adicionar cartão" e permanecer salvo ao fechar e abrir o modal <br> - Clicar em "remover" em um cartão salvo deve apagar o cartão da lista |
### Resultados obtidos

- <b> O modal de pagamentos salvos deve ser visualizado - Sucesso</b><br>

![CT16_A](https://user-images.githubusercontent.com/74699119/143787038-3aec81ea-8ea6-46d4-b6b5-1e0bf4583651.png)

<br>

![CT16_B](https://user-images.githubusercontent.com/74699119/143787041-ae10dd2c-1875-411a-b6ef-9a28ca3e947a.png)

<br>

- <b> Um novo cartão deve ser adicionado ao clicar em "adicionar cartão" e permanecer salvo ao fechar e abrir o modal - Sucesso</b><br>

![CT16_C](https://user-images.githubusercontent.com/74699119/143787052-553c1f85-be63-4ea2-9f6f-feb710289681.png)

<br>

![CT16_D](https://user-images.githubusercontent.com/74699119/143787057-1a389b51-3a34-4b7c-9f58-582ff1f3bc1e.png)

<br>

![CT16_E](https://user-images.githubusercontent.com/74699119/143787075-42f68e9f-4159-4c96-b459-223f309fe614.png)

<br>

![CT16_F](https://user-images.githubusercontent.com/74699119/143787079-713a37a4-cd48-461f-8398-3e0d466d6cb9.png)

<br>

![CT16_G](https://user-images.githubusercontent.com/74699119/143787083-df4f17f4-4374-4c0c-80eb-7e6222928572.png)

<br>

- <b> Clicar em "remover" em um cartão salvo deve apagar o cartão da lista - Sucesso</b><br>

![CT16_H](https://user-images.githubusercontent.com/74699119/143787088-c9af3a38-a55a-4b30-a100-7f669f85cd4f.png)

<br>

![CT16_I](https://user-images.githubusercontent.com/74699119/143787093-3941e205-59e6-4510-8695-123310bf4cb2.png)

<br>

### Pontos que podem ser melhorados:

O sistema atual apenas simula a adição de informações de cartão de crédito, mas não salva informações reais e não as utiliza os cartões salvos durante o processo de compra de produtos (uma vez que o sistema de vendas também é simulado). Caso o projeto venha a ser reaproveitado na etapa de desenvolvimento backend, esta funcionalidade deverá ser revisitada de modo a se aproximar mais de um sistema de pagamentos real.

# Caso de teste 17
| Caso de Teste         | Caso de Teste	CT-17 – Customizar informações do mini-website (Vendedor) |
|-----------------------|--------------------------------------------------------|
| Resultado do teste    | Concluído com sucesso |
| Critérios de Êxito    | -	As informações alteradas devem permanecer após sair e voltar para a página de gerenciar loja <br> - As informações atualizadas deverão aparecer ao visualizar a loja do vendedor na seção de recomendação e busca e ao visitar o mini website da loja. |
### Resultados obtidos

- <b> As informações alteradas devem permanecer após sair e voltar para a página de gerenciar loja - Sucesso</b><br>

![CT17_A](https://user-images.githubusercontent.com/74699119/143788029-a5156a4a-a592-45e5-8d68-bea94a5d2f66.png)

<br>

![CT17_B](https://user-images.githubusercontent.com/74699119/143788035-15ae3223-093e-43b6-bd0d-6b644f08f73e.png)

<br>

![CT17_C](https://user-images.githubusercontent.com/74699119/143788040-0da120b0-70e4-4a0c-bdfe-2dc7ad203884.png)

<br>

![CT17_D](https://user-images.githubusercontent.com/74699119/143788045-cdc4f1f3-f538-495e-999c-d5c0e270800a.png)

<br>

Informações alteradas
![CT17_E](https://user-images.githubusercontent.com/74699119/143788051-bc51a3dd-86f4-45cf-bbcd-b464521fd344.png)

<br>

Sair da página
![CT17_F](https://user-images.githubusercontent.com/74699119/143788062-7815b340-d353-40f6-b51f-6c53141c290a.png)

<br>

Voltar para a página
![CT17_G](https://user-images.githubusercontent.com/74699119/143788072-fa2861cf-6c0d-4f3d-8aa7-3681b4a9ebe5.png)

![CT17_H](https://user-images.githubusercontent.com/74699119/143788077-831eba5a-50f9-492b-994b-b84e2738fd9a.png)

<br>

- <b> As informações atualizadas deverão aparecer ao visualizar a loja do vendedor na seção de recomendação e busca e ao visitar o mini website da loja - Sucesso</b><br>

Vendedores recomendados
![CT17_I](https://user-images.githubusercontent.com/74699119/143788124-78f404a6-fafc-4904-bbc8-f58ac15de156.png)

<br>

Busca
![CT17_J](https://user-images.githubusercontent.com/74699119/143788130-641f7087-4166-4b6e-9a31-fd4d11f3eb96.png)

<br>

Mini website - Quem somos<br>
Antes
![CT17_ANTES_A](https://user-images.githubusercontent.com/74699119/143788152-4a4498c9-c4c2-4d32-b4d0-79153a0938c4.png)

Depois
![CT17_DEPOIS_A](https://user-images.githubusercontent.com/74699119/143788160-e7a7de32-5301-482e-b255-26ae2d1b7ce2.png)

Mini webiste - Redes sociais<br>
Antes
![CT17_ANTES_B](https://user-images.githubusercontent.com/74699119/143788173-a0281a17-689a-4869-b38d-153f50a5fba9.png)

Depois
![CT17_DEPOIS_B](https://user-images.githubusercontent.com/74699119/143788179-a8e783fc-5e2c-49a6-88c9-00ebcc94fb27.png)


<br>

### Pontos que podem ser melhorados:

As informações submetidas nesta funcionalidade ficam todas salvas no local storage. Caso o projeto venha a ser reaproveitado na etapa de desenvolvimento backend, um banco de dados real deverá ser implementado.

<br>

# Caso de teste 18

| Caso de Teste         | Caso de Teste	CT-18 – Cadastrar novo produto na loja (Vendedor) |
|-----------------------|--------------------------------------------------------|
| Resultado do teste    | Concluído com sucesso |
| Critérios de Êxito    | -	As informações cadastradas devem permanecer após sair e voltar para a página de produtos <br> - Os produtos cadastrados deverão aparecer ao visualizar a página de produtos da loja do vendedor e deve ser possível adiciona-los ao carrinho de compras e submeter um pedido. <br> - Os produtos devem ser removidos do mini-website ao clicar em "Remover" na aba de produtos da página de gerenciamento da loja ou ter suas informações alteradas ao clicar em "Editar produto". |
### Resultados obtidos

- <b> As informações alteradas devem permanecer após sair e voltar para a página de gerenciar loja - Sucesso</b><br>

![CT18_A](https://user-images.githubusercontent.com/74699119/143788633-99bca58a-d512-4bd1-af50-cb340a319338.png)

<br>

![CT18_B](https://user-images.githubusercontent.com/74699119/143788640-2fd2d20f-4e0d-4fc9-8170-06f1a67b6b2b.png)

<br>

![CT18_C](https://user-images.githubusercontent.com/74699119/143788642-c6e81dd7-c910-43db-a5b0-2fb2d683dcfb.png)

<br>

![CT18_D](https://user-images.githubusercontent.com/74699119/143788645-5f7afcbc-51f1-43bd-a8da-55ba2f24d236.png)

<br>

![CT18_E](https://user-images.githubusercontent.com/74699119/143788647-16024fe4-34c2-4719-bdd4-2b6714010d64.png)

<br>

![CT18_F](https://user-images.githubusercontent.com/74699119/143788656-c16cc7dc-9966-4e98-87a6-b48a4970c863.png)

<br>

![CT18_G](https://user-images.githubusercontent.com/74699119/143788663-1c9c356b-19d2-4d39-ae6e-4cf6e6d16340.png)

<br>

![CT18_H](https://user-images.githubusercontent.com/74699119/143788668-8c86cb97-fa47-4d80-97a4-f8133ccd8c15.png)

<br>

![CT18_I](https://user-images.githubusercontent.com/74699119/143788677-b90cb2b4-672c-4a06-8d31-bbb681a9e516.png)

<br>

![CT18_J](https://user-images.githubusercontent.com/74699119/143788680-d5f35b9f-be4d-4ed2-8b3e-649a5b6fca98.png)

<br>

![CT18_K](https://user-images.githubusercontent.com/74699119/143788683-b35af7bd-ba34-4351-81a4-f518725ebc22.png)

<br>

Sair e voltar da página
![CT18_K2](https://user-images.githubusercontent.com/74699119/143788729-504e2b72-a644-4f95-bb98-eec2937f4755.png)

<br>

![CT18_K3](https://user-images.githubusercontent.com/74699119/143788735-ea7f47fd-ee80-45a5-a1ac-09fd1f0d1fef.png)

<br>

![CT18_K4](https://user-images.githubusercontent.com/74699119/143788745-7ce5ea71-3b4d-42f7-9dce-bbfc08d3bae5.png)

<br>

- <b> Os produtos cadastrados deverão aparecer ao visualizar a página de produtos da loja do vendedor e deve ser possível adiciona-los ao carrinho de compras - Sucesso</b><br>

Mini website - Produtos<br>
Antes
![CT18ANTES_A](https://user-images.githubusercontent.com/74699119/143788838-0065f0dd-72c7-4263-9f80-b6cbb0ddb963.png)

<br>

Depois
![CT18DEPOIS_A1](https://user-images.githubusercontent.com/74699119/143788851-8c011fe4-fb93-453b-a5a1-b5ef00933b99.png)

<br>

![CT18DEPOIS_A2](https://user-images.githubusercontent.com/74699119/143788857-e2861a57-e10a-40a0-8ee5-4b91d48d1f8e.png)

Mini website - Carrinho<br>
Antes
![CT18ANTES_B](https://user-images.githubusercontent.com/74699119/143788872-d66a4195-defb-4508-a0da-279652363774.png)

<br>

Depois
![CT18DEPOIS_B](https://user-images.githubusercontent.com/74699119/143788878-e4713770-6c52-4337-beb2-0b0d1d7afb64.png)

<br>

![CT18DEPOIS_B2](https://user-images.githubusercontent.com/74699119/143789063-a710ef39-af95-4924-879b-a54bc3528da9.png)

<br>

![CT18DEPOIS_B3](https://user-images.githubusercontent.com/74699119/143789064-3d649c4b-f453-4300-9589-4c6ea90a8f02.png)

<br>

- <b> Os produtos devem ser removidos do mini-website ao clicar em "Remover" na aba de produtos da página de gerenciamento da loja ou ter suas informações alteradas ao clicar em "Editar produto" - Sucesso</b><br>

Editar produto
![CT18_L](https://user-images.githubusercontent.com/74699119/143788751-5c6f8c8c-8075-4479-a60f-63fe0c700efb.png)

<br>

![CT18_M](https://user-images.githubusercontent.com/74699119/143788765-6992e802-6b39-4335-9083-652c017dc7e0.png)

<br>

Remover produto
![CT18_N](https://user-images.githubusercontent.com/74699119/143788774-ea6b69ad-ffb5-4c10-a2dc-4f6266de17f2.png)

<br>

![CT18_O](https://user-images.githubusercontent.com/74699119/143788778-f54476ab-c85b-48aa-92a5-9beea8158963.png)

<br>

### Pontos que podem ser melhorados:

As informações submetidas nesta funcionalidade ficam todas salvas no local storage. Caso o projeto venha a ser reaproveitado na etapa de desenvolvimento backend, um banco de dados real deverá ser implementado.

<br>

# Caso de teste 19

| Caso de Teste         | Caso de Teste	CT-19 – Customizar opções de pagamento do mini-website (Vendedor) |
|-----------------------|--------------------------------------------------------|
| Resultado do teste    | Concluído com sucesso |
| Critérios de Êxito    | -	As informações alteradas devem permanecer após sair e voltar para a aba de "Venda/Entrega". <br> - As informações atualizadas deverão aparecer ao tentar submeter um pedido de compra no mini website do vendedor em questão. |
### Resultados obtidos

- <b> As informações alteradas devem permanecer após sair e voltar para a aba de "Venda/Entrega" - Sucesso</b><br>

![CT19_A](https://user-images.githubusercontent.com/74699119/143789359-9c14ff47-4db5-40d3-abd3-aab0c41e6356.png)

<br>

![CT19_B](https://user-images.githubusercontent.com/74699119/143789362-1ae10b71-d395-4128-8e51-92d77e83fb5c.png)

<br>

![CT19_C](https://user-images.githubusercontent.com/74699119/143789366-f64b61f0-2aa3-4cc9-a606-ed2d06fd087a.png)

<br>

![CT19_D](https://user-images.githubusercontent.com/74699119/143789368-40f75929-cf30-4982-9be5-96f9e8f70143.png)

<br>

![CT19_E](https://user-images.githubusercontent.com/74699119/143789374-895b7346-c162-4587-8df1-07ee97710aa7.png)

<br>

Sair e voltar para a página
![CT19_F](https://user-images.githubusercontent.com/74699119/143789385-7f7d4f5b-d61b-456d-a9b4-ecd8b66491ab.png)

<br>

![CT19_G](https://user-images.githubusercontent.com/74699119/143789398-f20d32e3-5dfb-4087-9917-d43e97d895ca.png)

<br>

![CT19_H](https://user-images.githubusercontent.com/74699119/143789400-097556b0-bc71-436a-8023-b6746df92c5d.png)

<br>

- <b> As informações atualizadas deverão aparecer ao tentar submeter um pedido de compra no mini website do vendedor em questão - Sucesso</b><br>

![CT19_I](https://user-images.githubusercontent.com/74699119/143789416-3cd3eec9-11f3-4778-ac51-14538429a14e.png)

<br>
<br>

Antes
![CT19_ANTES1](https://user-images.githubusercontent.com/74699119/143789425-ee4c4235-eeac-43b1-ba28-f735423934a1.png)

<br>

![CT19_ANTES2](https://user-images.githubusercontent.com/74699119/143789428-cf86d777-ef9a-484c-b93e-1da6e46c7b68.png)

<br>
<br>

Depois
![CT19_DEPOIS1](https://user-images.githubusercontent.com/74699119/143789433-d7e747e1-2189-40c6-a741-56698ebb9f7d.png)

<br>

![CT19_DEPOIS2](https://user-images.githubusercontent.com/74699119/143789437-a19ec84e-c9ea-43bf-ae5a-0f66b22d02b7.png)

<br>

![CT19_DEPOIS3](https://user-images.githubusercontent.com/74699119/143789440-93d66508-c715-4779-b2f1-c48ebb206088.png)

<br>

### Pontos que podem ser melhorados:

O sistema da pagamentos e entrega são apenas simulados. Caso o projeto venha a ser reaproveitado na etapa de desenvolvimento backend, um sistema de pagamentos e entrega mais próximo de um sistema real deverá ser implementado.

<br>
