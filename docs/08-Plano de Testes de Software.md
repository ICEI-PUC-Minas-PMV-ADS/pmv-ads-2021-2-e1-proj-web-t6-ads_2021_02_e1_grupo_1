# Plano de Testes de Software
Os requisitos para realização dos testes de software são:
-	Site publicado na Internet
-	Navegador da Internet - Chrome, Firefox ou Edge
-	Conectividade de Internet para acesso aos vídeos de apresentação e redes sociais

Os testes funcionais a serem realizados no aplicativo estão descritos abaixo.


| Caso de Teste         | Caso de Teste	CT-01 – Cadastro de usuário (cliente) |
|-----------------------|--------------------------------------------------------|
| Requisitos Associados | RF-002 - O site deve permitir que o usuário crie uma conta para salvar suas informações (local de entrega, meios de pagamento, histórico de pedidos, etc). |
| Objetivo do Teste     | Verificar a função de cadastro do cliente |
| Passos                | 1) Acessar o Navegador <br>2) Informar o endereço do Site <br>3) Visualizar a página principal <br>4) Clicar na opção "Crie sua conta" presente no cabeçalho do site <br>5) Preencher as informações de cadastro solicitadas e clicar em "concluir cadastro".|
| Critérios de Êxito    | -	Realizar cadastro de dados pessoais. <br>- Cadastro só pode ser bem sucedido caso o e-mail não tenha sido cadastrado anteriormente. <br>- Cadastro só pode ser bem sucedido caso a senha tenha sido repetida corretamente. |

<br>

| Caso de Teste         | Caso de Teste	CT-02 – Cadastro de usuário (Vendedor) |
|-----------------------|--------------------------------------------------------|
| Requisitos Associados | RF-002 - O site deve permitir que o usuário crie uma conta de vendedor para criar sua loja e salvar suas informações (local de entrega, meios de pagamento, histórico de pedidos, etc). <br>RF-007 O site deve permitir que o microempreendedor submeta as informações sobre seu modelo de negócio, redes sociais e informações de contato para serem mostradas no “mini-website” |
| Objetivo do Teste     | Verificar a função de cadastro do vendedor |
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
| Objetivo do Teste     | Verificar a função de visualizar/alterar os dados do usuário dentro da opção "Dados pessoais" do menu do usuário |
| Passos                | 1) Acessar o Navegador <br>2) Informar o endereço do Site <br>3) Visualizar a página principal <br>4) Clicar na opção "Fazer Login" presente no cabeçalho do site <br>5) Preencher os campos de e-mail e senha e clicar na opção "Entrar". <br> 5) Após o login bem sucedido, clicar na opção "Minha conta" no cabeçalho e escolher a opção "Dados pessoais". <br> 6) Selecionar os dados que deseja alterar e clicar na opção "alterar" ao lado direito dos dados para altera-los. |
| Critérios de Êxito    | -	O modal de dados do usuário deve abrir e mostrar os dados do usuário. <br> - Os campos de "E-mail" e "Senha" só poderão ser alterados caso a senha atual seja informada (e a senha nova repetida no campo "repetir senha" para o caso da alteração de senha). <br> - As informações alteradas com exito devem ainda estar presentes após fechar e abrir a funcionalidade novamente. |
