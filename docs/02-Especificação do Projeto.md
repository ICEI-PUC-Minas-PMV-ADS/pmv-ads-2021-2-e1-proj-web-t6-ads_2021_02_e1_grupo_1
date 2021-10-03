# Especificações do Projeto

A definição precisa do problema e dos pontos mais relevantes deste projeto foi elaborada por meio de entrevistas com os usuários, além de observação de suas rotinas. O resultado deste processo foi consolidado em personas e histórias de usuários que estão listadas seguir.

## Personas

As personas elaboradas no processo de compreeensão do problema estão listadas nas figuras a seguir:
  
|Rosana Martins      | Informações:                       |                                        |
|--------------------|------------------------------------|----------------------------------------|
|![image](https://user-images.githubusercontent.com/74699119/135755949-e7fdd430-0fa9-49cc-905d-49746b5d273d.png)| **Idade:** 64 <br> **Ocupação:** Aposentada e  microempreendedora no<br>ramo alimentício de salgados,doces e bolos |**Aplicativos:**<br>● Instagram<br>● Facebook<br>●  Blog|
|**Motivações:**<br>● Qualidade de vida<br>● Cuidar dos netos|**Frustrações:**<br>● Não ter investido no ramo alimentíciode<br> maneira mais forte quando eu podia|**Hobbies:**<br>● História<br>● Cozinhar <br>● Viajar |

|Jéssica Silveira    | Informações:                       |                                        |
|--------------------|------------------------------------|----------------------------------------|
|![image](https://user-images.githubusercontent.com/74699119/135757016-f7705348-1f91-44a7-8fef-ea64e5a43dc0.png)| **Idade:** 28 <br> **Ocupação:** Secretária e confeiteira<br> (possui um micro negócio de venda doces) |**Aplicativos:**<br>● Instagram<br>● Facebook<br>●  Whatsapp|
|**Motivações:**<br>● Complementar sua<br>renda vendendo doces<br>● Praticar seu hobby<br>de fazer doces|**Frustrações:**<br>● Falta de emprego em sua área<br> de formação da faculdade<br>● Dificuldade em expandir seu negócio de venda  <br>de doces|**Hobbies:**<br>● Fazer doces<br>● Arte <br>● Viajar |

|Felipe Santos       | Informações:                       |                                        |
|--------------------|------------------------------------|----------------------------------------|
|![image](https://user-images.githubusercontent.com/74699119/135757419-296cf7f2-064c-48e2-8f60-50b6742de00e.png)| **Idade:** 24 <br> **Ocupação:** Estudante |**Aplicativos:**<br>● Whatsapp<br>● Instagram<br>●  Tiktok|
|**Motivações:**<br>● Ajudar o negócio de<br>pequenos empreendedores/<br>produtores<br>● Poder conhecer melhor os<br>locais que vou pedir comida<br>● Experimentar alternativas<br>diferentes e talvez mais<br>saudáveis à produtos mais<br>industrializados|**Frustrações:**<br>● Dificuldade em localizar pessoas próximas que<br> façam os serviços<br>● Dificuldade em comparar o preço e qualidade <br>em relação a estabelecimentos maiores|**Hobbies:**<br>● Assistir vídeos<br> de culinária<br>● Música <br>● Natureza|

|Fabiana Takeda      | Informações:                       |                                        |
|--------------------|------------------------------------|----------------------------------------|
|![image](https://user-images.githubusercontent.com/74699119/135758199-44fc3b43-3de9-43ce-bebd-00a90ccf88cf.png)| **Idade:** 38 <br> **Ocupação:** Advogada |**Aplicativos:**<br>● Whatsapp<br>● Gmail<br>●  Apps de Bancos|
|**Motivações:**<br>● Uma plataforma com <br> preços menores que os <br> grandes apps do segmento<br>● Acesso a comida caseira<br>● Conhecer e ajudar <br> comerciantes da região <br> em que vive|**Frustrações:**<br>● Demora na entrega de alguns fornecedores<br>● Dificuldade em encontrar fornecedores com <br> bons produtos<br>● Descrição de produtos não bate com a foto <br> divulgada nos aplicativos muitas vezes|**Hobbies:**<br>● Caminhar com o <br> cachorro<br>● Explorar a cidade <br>● Pesquisar docerias|

|Fernando Oliveira   | Informações:                       |                                        |
|--------------------|------------------------------------|----------------------------------------|
|![image](https://user-images.githubusercontent.com/74699119/135758360-a9b59117-3e74-49a6-82aa-8ef898b0d85a.png)| **Idade:** 26 <br> **Ocupação:** Auxiliar de laboratório |**Aplicativos:**<br>● Twitter<br>● Instagram<br>● Facebook|
|**Motivações:**<br>● Encontrar uma maneira <br> rápida e fácil de saciar seu <br> desejo de comer doces <br> caseiros.|**Frustrações:** Não conhecer pessoas que vendam <br> doces por unidade perto <br> de sua casa ou trabalho.<br>● Considerar os doces de padaria <br> sem sabor.|**Hobbies:**<br>● Jogar videogame<br>● Assistir séries <br>● Tocar violão|

## Histórias de Usuários

Com base na interpretação da realidade das personas identificadas para este projeto por meio das informações coletadas, foram registradas as histórias de usuários listadas a seguir:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Rosana Martins      | Modernizar minha forma de vender<br> meus produtos| Melhor aceitação no mercado |
|Rosana Martins      | Divulgar meus produtos de forma <br> eficiente e com baixo custo.| Atingir o público certo no momento certo |
|Rosana Martins      | Realizar entrega através do delivery | Aumentar as vendas e o público atingido |
|Jéssica Silveira    | Uma plataforma que permita exibir <br> meu cardápio de doces e expor <br> melhor os meus produtos| Poder oferecer um catálogo mais intuitivo <br> para o cliente |
|Jéssica Silveira    | Uma plataforma onde haja um sistema <br> de pagamento e entrega unificados para <br> meu catálogo de produtos | Poder concentrar as informações, sem <br> precisar de muitos aplicativos diferentes |
|Jéssica Silveira    | Um aplicativo em que eu possa colocar a <br> quantidade de produto que tenho disponível | Evitar que o cliente solicite mais do <br> que consigo produzir e se frustre com o <br> cancelamento posterior do pedido |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
