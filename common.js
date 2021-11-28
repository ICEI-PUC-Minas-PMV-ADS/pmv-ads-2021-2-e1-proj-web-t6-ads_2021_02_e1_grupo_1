let listaVendedores;
let enderecoAtual;
let listaUsuarios;
let idUsuarioLogado; /*id : -1 = nenhum usuário logado; tipo = cliente/vendedor */

setLocalStorage();

updateLocalStorage()

opcoesVendedor()
/* Send to local storage */
function setLocalStorage(){
    if (localStorage.getItem('listaVendedores') == null) {
        listaVendedores = [
            {
                "numero_lista" : 1,
                "nome" : "Doces Caseiros",
                "imagem" : "imagens/loja_doces.jpg",
                "descricaoResumo" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quibusdam porro. Ea tenetur consequuntur sed doloribus magni repellendus, asperiores, facilis est maiores obcaecati molestias perspiciatis accusantium consequatur, esse culpa nisi itaque.",
                "descricao" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum deserunt repellat totam libero porro consectetur dolorem dolor eligendi ratione, quia, corporis aliquam qui ea et iste quasi obcaecati, dolores eveniet vel sed autem. Distinctio nostrum quidem dolorum nam neque magni eos labore ipsa, culpa saepe, at repellendus inventore dolores provident dicta numquam sunt repudiandae doloribus quis? Alias ipsa iusto provident hic voluptatibus repellendus deleniti atque enim natus repellat veritatis, ab incidunt quia libero laboriosam iure amet ullam eveniet delectus cupiditate omnis dicta! Nihil quis veniam aspernatur incidunt sint. Architecto, a provident? Dolorem quasi ut cumque consequuntur veniam. Beatae quia facilis laudantium commodi laborum deleniti atque alias, nemo assumenda? Nam delectus iusto totam perferendis, distinctio repudiandae? Quas deserunt libero eos deleniti, error, sequi recusandae amet ratione est aliquid nam perspiciatis a non praesentium dolores sint fugiat vero tenetur ducimus cumque corporis! Aliquid quo labore rerum doloribus animi quos quam quidem accusamus totam facere ut, eveniet, molestiae beatae aliquam commodi nostrum sapiente vel! Asperiores beatae ratione culpa ipsum architecto assumenda reprehenderit officiis recusandae expedita voluptatum voluptas laborum, labore voluptatibus vero dolorum magnam. Inventore incidunt libero eius facere consequatur, odio vitae odit consequuntur aperiam dolorum exercitationem rerum tempora! Sunt earum officia cupiditate ex vitae nobis est. Maxime, consequuntur soluta aliquid cumque dicta culpa harum reprehenderit dolore impedit quibusdam asperiores quidem praesentium alias quas, facere hic unde eum ea beatae possimus? Labore dolorum sit asperiores eligendi odio quam quas, distinctio velit nisi id saepe dicta adipisci reiciendis nemo repellat, autem doloribus ipsum temporibus sapiente? Quas enim quisquam ipsum sed, eos atque accusamus, nesciunt tempora voluptas eligendi error, ullam deserunt voluptatibus dolor in. Earum quaerat laudantium, rem delectus fuga mollitia expedita assumenda repellendus eius, tenetur ullam, incidunt obcaecati beatae ut. Eveniet corrupti veniam incidunt odit, alias quaerat esse architecto natus, suscipit quasi quibusdam ut! Nesciunt!",
                "avaliacao" : "0.92",   /* Porcentagem de 0 até 1 */
                "link" : "?loja=doces-caseiros",
                "videoApresentacao": "https://www.youtube.com/embed/FC-IX2gQ8_Q",
                "catalogo" : [
                    {
                        "nome": "Brigadeiro",
                        "imagem": "imagens/produtos/brigadeiro.jpg", 
                        "descricaoResumo": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium omnis quibusdam doloribus hic maxime amet? Architecto earum officia quos nesciunt?",
                        "descricao":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum deserunt repellat totam libero porro consectetur dolorem dolor eligendi ratione, quia, corporis aliquam qui ea et iste quasi obcaecati, dolores eveniet vel sed autem. Distinctio nostrum quidem dolorum nam neque magni eos labore ipsa, culpa saepe, at repellendus inventore dolores provident dicta numquam sunt repudiandae doloribus quis? Alias ipsa iusto provident hic voluptatibus repellendus deleniti atque enim natus repellat veritatis, ab incidunt quia libero laboriosam iure amet ullam eveniet delectus cupiditate omnis dicta! Nihil quis veniam aspernatur incidunt sint. Architecto, a provident?",
                        "sabores":["Chocolate", "Chocolate com morango", "Café"],
                        "outrasInformacoes":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium omnis quibusdam doloribus hic maxime amet? Architecto earum officia quos nesciunt?", 
                        "preco": "2.00",
                    },
                    {
                        "nome": "Mini torta", 
                        "imagem": "imagens/produtos/torta.jpg",
                        "descricaoResumo": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium omnis quibusdam doloribus hic maxime amet? Architecto earum officia quos nesciunt?",
                        "descricao":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum deserunt repellat totam libero porro consectetur dolorem dolor eligendi ratione, quia, corporis aliquam qui ea et iste quasi obcaecati, dolores eveniet vel sed autem. Distinctio nostrum quidem dolorum nam neque magni eos labore ipsa, culpa saepe, at repellendus inventore dolores provident dicta numquam sunt repudiandae doloribus quis? Alias ipsa iusto provident hic voluptatibus repellendus deleniti atque enim natus repellat veritatis, ab incidunt quia libero laboriosam iure amet ullam eveniet delectus cupiditate omnis dicta! Nihil quis veniam aspernatur incidunt sint. Architecto, a provident?",
                        "sabores":["Chocolate", "Morango", "Framboesa"],
                        "outrasInformacoes":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium omnis quibusdam doloribus hic maxime amet? Architecto earum officia quos nesciunt?", 
                        "preco": "7.00",
                    },
                    {
                        "nome": "Mousse de chocolate", 
                        "imagem": "imagens/produtos/mousse.jpg",
                        "descricaoResumo": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium omnis quibusdam doloribus hic maxime amet? Architecto earum officia quos nesciunt?",
                        "descricao":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum deserunt repellat totam libero porro consectetur dolorem dolor eligendi ratione, quia, corporis aliquam qui ea et iste quasi obcaecati, dolores eveniet vel sed autem. Distinctio nostrum quidem dolorum nam neque magni eos labore ipsa, culpa saepe, at repellendus inventore dolores provident dicta numquam sunt repudiandae doloribus quis? Alias ipsa iusto provident hic voluptatibus repellendus deleniti atque enim natus repellat veritatis, ab incidunt quia libero laboriosam iure amet ullam eveniet delectus cupiditate omnis dicta! Nihil quis veniam aspernatur incidunt sint. Architecto, a provident?",
                        "sabores":["Chocolate"],
                        "outrasInformacoes":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium omnis quibusdam doloribus hic maxime amet? Architecto earum officia quos nesciunt?", 
                        "preco": "5.50",
                    },
                    {
                        "nome": "Rosquinhas", 
                        "imagem": "imagens/produtos/rosquinha.jpg",
                        "descricaoResumo": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium omnis quibusdam doloribus hic maxime amet? Architecto earum officia quos nesciunt?",
                        "descricao":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum deserunt repellat totam libero porro consectetur dolorem dolor eligendi ratione, quia, corporis aliquam qui ea et iste quasi obcaecati, dolores eveniet vel sed autem. Distinctio nostrum quidem dolorum nam neque magni eos labore ipsa, culpa saepe, at repellendus inventore dolores provident dicta numquam sunt repudiandae doloribus quis? Alias ipsa iusto provident hic voluptatibus repellendus deleniti atque enim natus repellat veritatis, ab incidunt quia libero laboriosam iure amet ullam eveniet delectus cupiditate omnis dicta! Nihil quis veniam aspernatur incidunt sint. Architecto, a provident?",
                        "sabores":["Chocolate", "Creme"],
                        "outrasInformacoes":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium omnis quibusdam doloribus hic maxime amet? Architecto earum officia quos nesciunt?", 
                        "preco": "4.00",
                    },
                ],
                "carrinho" : [
                    {},
                ],
                "precoEntrega" : "6,00",
                "retiradaNaLoja" : true,
                "formasPagamento" : {
                    "online" : ["cartao", "pix"],
                    "naEntrega" : ["cartao", "dinheiro"],
                },
                "redesSociais" : {
                    "facebook" : "facebook.com",
                    "instagram": "instagram.com",
                    "twitter" : "twitter.com",
                    "tiktok" : "tiktok.com",
                    "youtube" : "youtube.com",
                },
            },
            {
                "numero_lista" : 2,
                "nome" : "Massas Congeladas",
                "imagem" : "imagens/loja_massas.jpg",
                "descricaoResumo" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quibusdam porro. Ea tenetur consequuntur sed doloribus magni repellendus, asperiores, facilis est maiores obcaecati molestias perspiciatis accusantium consequatur, esse culpa nisi itaque.",
                "descricao" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum deserunt repellat totam libero porro consectetur dolorem dolor eligendi ratione, quia, corporis aliquam qui ea et iste quasi obcaecati, dolores eveniet vel sed autem. Distinctio nostrum quidem dolorum nam neque magni eos labore ipsa, culpa saepe, at repellendus inventore dolores provident dicta numquam sunt repudiandae doloribus quis? Alias ipsa iusto provident hic voluptatibus repellendus deleniti atque enim natus repellat veritatis, ab incidunt quia libero laboriosam iure amet ullam eveniet delectus cupiditate omnis dicta! Nihil quis veniam aspernatur incidunt sint. Architecto, a provident? Dolorem quasi ut cumque consequuntur veniam. Beatae quia facilis laudantium commodi laborum deleniti atque alias, nemo assumenda? Nam delectus iusto totam perferendis, distinctio repudiandae? Quas deserunt libero eos deleniti, error, sequi recusandae amet ratione est aliquid nam perspiciatis a non praesentium dolores sint fugiat vero tenetur ducimus cumque corporis! Aliquid quo labore rerum doloribus animi quos quam quidem accusamus totam facere ut, eveniet, molestiae beatae aliquam commodi nostrum sapiente vel! Asperiores beatae ratione culpa ipsum architecto assumenda reprehenderit officiis recusandae expedita voluptatum voluptas laborum, labore voluptatibus vero dolorum magnam. Inventore incidunt libero eius facere consequatur, odio vitae odit consequuntur aperiam dolorum exercitationem rerum tempora! Sunt earum officia cupiditate ex vitae nobis est. Maxime, consequuntur soluta aliquid cumque dicta culpa harum reprehenderit dolore impedit quibusdam asperiores quidem praesentium alias quas, facere hic unde eum ea beatae possimus? Labore dolorum sit asperiores eligendi odio quam quas, distinctio velit nisi id saepe dicta adipisci reiciendis nemo repellat, autem doloribus ipsum temporibus sapiente? Quas enim quisquam ipsum sed, eos atque accusamus, nesciunt tempora voluptas eligendi error, ullam deserunt voluptatibus dolor in. Earum quaerat laudantium, rem delectus fuga mollitia expedita assumenda repellendus eius, tenetur ullam, incidunt obcaecati beatae ut. Eveniet corrupti veniam incidunt odit, alias quaerat esse architecto natus, suscipit quasi quibusdam ut! Nesciunt!",
                "avaliacao" : "0.85",    /* Porcentagem de 0 até 1 */
                "link" : "?loja=massas-congeladas",
                "videoApresentacao": "https://www.youtube.com/embed/FC-IX2gQ8_Q",
                "catalogo" : [
                    {
                        "nome": "Pizza portuguesa",
                        "imagem": "imagens/produtos/pizzaportuguesa.jpg", 
                        "descricaoResumo": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium omnis quibusdam doloribus hic maxime amet? Architecto earum officia quos nesciunt?",
                        "descricao":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum deserunt repellat totam libero porro consectetur dolorem dolor eligendi ratione, quia, corporis aliquam qui ea et iste quasi obcaecati, dolores eveniet vel sed autem. Distinctio nostrum quidem dolorum nam neque magni eos labore ipsa, culpa saepe, at repellendus inventore dolores provident dicta numquam sunt repudiandae doloribus quis? Alias ipsa iusto provident hic voluptatibus repellendus deleniti atque enim natus repellat veritatis, ab incidunt quia libero laboriosam iure amet ullam eveniet delectus cupiditate omnis dicta! Nihil quis veniam aspernatur incidunt sint. Architecto, a provident?",
                        "sabores":["Portuguesa"],
                        "outrasInformacoes":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium omnis quibusdam doloribus hic maxime amet? Architecto earum officia quos nesciunt?", 
                        "preco": "15.00",
                    },
                    {
                        "nome": "Pizza pepperoni", 
                        "imagem": "imagens/produtos/pizzapepperoni.jpg",
                        "descricaoResumo": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium omnis quibusdam doloribus hic maxime amet? Architecto earum officia quos nesciunt?",
                        "descricao":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum deserunt repellat totam libero porro consectetur dolorem dolor eligendi ratione, quia, corporis aliquam qui ea et iste quasi obcaecati, dolores eveniet vel sed autem. Distinctio nostrum quidem dolorum nam neque magni eos labore ipsa, culpa saepe, at repellendus inventore dolores provident dicta numquam sunt repudiandae doloribus quis? Alias ipsa iusto provident hic voluptatibus repellendus deleniti atque enim natus repellat veritatis, ab incidunt quia libero laboriosam iure amet ullam eveniet delectus cupiditate omnis dicta! Nihil quis veniam aspernatur incidunt sint. Architecto, a provident?",
                        "sabores":["Pepperoni"],
                        "outrasInformacoes":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium omnis quibusdam doloribus hic maxime amet? Architecto earum officia quos nesciunt?", 
                        "preco": "18.00",
                    },
                    {
                        "nome": "Lasanha de carne", 
                        "imagem": "imagens/produtos/lasanhas.jpg",
                        "descricaoResumo": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium omnis quibusdam doloribus hic maxime amet? Architecto earum officia quos nesciunt?",
                        "descricao":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum deserunt repellat totam libero porro consectetur dolorem dolor eligendi ratione, quia, corporis aliquam qui ea et iste quasi obcaecati, dolores eveniet vel sed autem. Distinctio nostrum quidem dolorum nam neque magni eos labore ipsa, culpa saepe, at repellendus inventore dolores provident dicta numquam sunt repudiandae doloribus quis? Alias ipsa iusto provident hic voluptatibus repellendus deleniti atque enim natus repellat veritatis, ab incidunt quia libero laboriosam iure amet ullam eveniet delectus cupiditate omnis dicta! Nihil quis veniam aspernatur incidunt sint. Architecto, a provident?",
                        "sabores":["Massa normal","Massa de espinafre"],
                        "outrasInformacoes":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium omnis quibusdam doloribus hic maxime amet? Architecto earum officia quos nesciunt?", 
                        "preco": "8.50",
                    },
                ],
                "carrinho" : [
                    {},
                ],
                "precoEntrega" : "15,50",
                "retiradaNaLoja" : true,
                "formasPagamento" : {
                    "online" : ["cartao", "pix"],
                    "naEntrega" : ["cartao", "dinheiro"],
                },
                "redesSociais" : {
                    "facebook" : "facebook.com",
                    "instagram": "instagram.com",
                    "twitter" : "twitter.com",
                    "tiktok" : "tiktok.com",
                    "youtube" : "youtube.com",
                },
            },
            {
                "numero_lista" : 3,
                "nome" : "Marmitas Vegan",
                "imagem" : "imagens/loja_vegan.jpg",
                "descricaoResumo" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quibusdam porro. Ea tenetur consequuntur sed doloribus magni repellendus, asperiores, facilis est maiores obcaecati molestias perspiciatis accusantium consequatur, esse culpa nisi itaque.",
                "descricao" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum deserunt repellat totam libero porro consectetur dolorem dolor eligendi ratione, quia, corporis aliquam qui ea et iste quasi obcaecati, dolores eveniet vel sed autem. Distinctio nostrum quidem dolorum nam neque magni eos labore ipsa, culpa saepe, at repellendus inventore dolores provident dicta numquam sunt repudiandae doloribus quis? Alias ipsa iusto provident hic voluptatibus repellendus deleniti atque enim natus repellat veritatis, ab incidunt quia libero laboriosam iure amet ullam eveniet delectus cupiditate omnis dicta! Nihil quis veniam aspernatur incidunt sint. Architecto, a provident? Dolorem quasi ut cumque consequuntur veniam. Beatae quia facilis laudantium commodi laborum deleniti atque alias, nemo assumenda? Nam delectus iusto totam perferendis, distinctio repudiandae? Quas deserunt libero eos deleniti, error, sequi recusandae amet ratione est aliquid nam perspiciatis a non praesentium dolores sint fugiat vero tenetur ducimus cumque corporis! Aliquid quo labore rerum doloribus animi quos quam quidem accusamus totam facere ut, eveniet, molestiae beatae aliquam commodi nostrum sapiente vel! Asperiores beatae ratione culpa ipsum architecto assumenda reprehenderit officiis recusandae expedita voluptatum voluptas laborum, labore voluptatibus vero dolorum magnam. Inventore incidunt libero eius facere consequatur, odio vitae odit consequuntur aperiam dolorum exercitationem rerum tempora! Sunt earum officia cupiditate ex vitae nobis est. Maxime, consequuntur soluta aliquid cumque dicta culpa harum reprehenderit dolore impedit quibusdam asperiores quidem praesentium alias quas, facere hic unde eum ea beatae possimus? Labore dolorum sit asperiores eligendi odio quam quas, distinctio velit nisi id saepe dicta adipisci reiciendis nemo repellat, autem doloribus ipsum temporibus sapiente? Quas enim quisquam ipsum sed, eos atque accusamus, nesciunt tempora voluptas eligendi error, ullam deserunt voluptatibus dolor in. Earum quaerat laudantium, rem delectus fuga mollitia expedita assumenda repellendus eius, tenetur ullam, incidunt obcaecati beatae ut. Eveniet corrupti veniam incidunt odit, alias quaerat esse architecto natus, suscipit quasi quibusdam ut! Nesciunt!",
                "avaliacao" : "0.67",     /* Porcentagem de 0 até 1 */
                "link" : "?loja=marmitas-vegan",
                "videoApresentacao": "https://www.youtube.com/embed/FC-IX2gQ8_Q",
                "catalogo" : [
                    {
                        "nome": "Grão de bico e cuscuz",
                        "imagem": "imagens/produtos/cuscuz.jpg", 
                        "descricaoResumo": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium omnis quibusdam doloribus hic maxime amet? Architecto earum officia quos nesciunt?",
                        "descricao":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum deserunt repellat totam libero porro consectetur dolorem dolor eligendi ratione, quia, corporis aliquam qui ea et iste quasi obcaecati, dolores eveniet vel sed autem. Distinctio nostrum quidem dolorum nam neque magni eos labore ipsa, culpa saepe, at repellendus inventore dolores provident dicta numquam sunt repudiandae doloribus quis? Alias ipsa iusto provident hic voluptatibus repellendus deleniti atque enim natus repellat veritatis, ab incidunt quia libero laboriosam iure amet ullam eveniet delectus cupiditate omnis dicta! Nihil quis veniam aspernatur incidunt sint. Architecto, a provident?",
                        "sabores":["Normal"],
                        "outrasInformacoes":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium omnis quibusdam doloribus hic maxime amet? Architecto earum officia quos nesciunt?", 
                        "preco": "12.00",
                    },
                    {
                        "nome": "Tacos de grão de bico",
                        "imagem": "imagens/produtos/tacosgraodebico.jpg", 
                        "descricaoResumo": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium omnis quibusdam doloribus hic maxime amet? Architecto earum officia quos nesciunt?",
                        "descricao":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum deserunt repellat totam libero porro consectetur dolorem dolor eligendi ratione, quia, corporis aliquam qui ea et iste quasi obcaecati, dolores eveniet vel sed autem. Distinctio nostrum quidem dolorum nam neque magni eos labore ipsa, culpa saepe, at repellendus inventore dolores provident dicta numquam sunt repudiandae doloribus quis? Alias ipsa iusto provident hic voluptatibus repellendus deleniti atque enim natus repellat veritatis, ab incidunt quia libero laboriosam iure amet ullam eveniet delectus cupiditate omnis dicta! Nihil quis veniam aspernatur incidunt sint. Architecto, a provident?",
                        "sabores":["Normal","Com abacate"],
                        "outrasInformacoes":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium omnis quibusdam doloribus hic maxime amet? Architecto earum officia quos nesciunt?", 
                        "preco": "8.00",
                    },
                ],
                "carrinho" : [
                    {},
                ],
                "precoEntrega" : "12,00",
                "retiradaNaLoja" : true,
                "formasPagamento" : {
                    "online" : ["cartao", "pix"],
                    "naEntrega" : ["cartao", "dinheiro"],
                },
                "redesSociais" : {
                    "facebook" : "facebook.com",
                    "instagram": "instagram.com",
                    "twitter" : "twitter.com",
                    "tiktok" : "tiktok.com",
                    "youtube" : "youtube.com",
                },
            },
            {
                "numero_lista" : 4,
                "nome" : "Cupcakes Variados",
                "imagem" : "imagens/loja_cupcakes.jpg",
                "descricaoResumo" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quibusdam porro. Ea tenetur consequuntur sed doloribus magni repellendus, asperiores, facilis est maiores obcaecati molestias perspiciatis accusantium consequatur, esse culpa nisi itaque.",
                "descricao" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum deserunt repellat totam libero porro consectetur dolorem dolor eligendi ratione, quia, corporis aliquam qui ea et iste quasi obcaecati, dolores eveniet vel sed autem. Distinctio nostrum quidem dolorum nam neque magni eos labore ipsa, culpa saepe, at repellendus inventore dolores provident dicta numquam sunt repudiandae doloribus quis? Alias ipsa iusto provident hic voluptatibus repellendus deleniti atque enim natus repellat veritatis, ab incidunt quia libero laboriosam iure amet ullam eveniet delectus cupiditate omnis dicta! Nihil quis veniam aspernatur incidunt sint. Architecto, a provident? Dolorem quasi ut cumque consequuntur veniam. Beatae quia facilis laudantium commodi laborum deleniti atque alias, nemo assumenda? Nam delectus iusto totam perferendis, distinctio repudiandae? Quas deserunt libero eos deleniti, error, sequi recusandae amet ratione est aliquid nam perspiciatis a non praesentium dolores sint fugiat vero tenetur ducimus cumque corporis! Aliquid quo labore rerum doloribus animi quos quam quidem accusamus totam facere ut, eveniet, molestiae beatae aliquam commodi nostrum sapiente vel! Asperiores beatae ratione culpa ipsum architecto assumenda reprehenderit officiis recusandae expedita voluptatum voluptas laborum, labore voluptatibus vero dolorum magnam. Inventore incidunt libero eius facere consequatur, odio vitae odit consequuntur aperiam dolorum exercitationem rerum tempora! Sunt earum officia cupiditate ex vitae nobis est. Maxime, consequuntur soluta aliquid cumque dicta culpa harum reprehenderit dolore impedit quibusdam asperiores quidem praesentium alias quas, facere hic unde eum ea beatae possimus? Labore dolorum sit asperiores eligendi odio quam quas, distinctio velit nisi id saepe dicta adipisci reiciendis nemo repellat, autem doloribus ipsum temporibus sapiente? Quas enim quisquam ipsum sed, eos atque accusamus, nesciunt tempora voluptas eligendi error, ullam deserunt voluptatibus dolor in. Earum quaerat laudantium, rem delectus fuga mollitia expedita assumenda repellendus eius, tenetur ullam, incidunt obcaecati beatae ut. Eveniet corrupti veniam incidunt odit, alias quaerat esse architecto natus, suscipit quasi quibusdam ut! Nesciunt!",
                "avaliacao" : "0.8",    /* Porcentagem de 0 até 1 */
                "link" : "?loja=cupcakes-variados",
                "videoApresentacao": "https://www.youtube.com/embed/FC-IX2gQ8_Q",
                "catalogo" : [
                    {
                        "nome": "Cupcake de framboesa",
                        "imagem": "imagens/produtos/cupcakeframboesa.jpg", 
                        "descricaoResumo": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium omnis quibusdam doloribus hic maxime amet? Architecto earum officia quos nesciunt?",
                        "descricao":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum deserunt repellat totam libero porro consectetur dolorem dolor eligendi ratione, quia, corporis aliquam qui ea et iste quasi obcaecati, dolores eveniet vel sed autem. Distinctio nostrum quidem dolorum nam neque magni eos labore ipsa, culpa saepe, at repellendus inventore dolores provident dicta numquam sunt repudiandae doloribus quis? Alias ipsa iusto provident hic voluptatibus repellendus deleniti atque enim natus repellat veritatis, ab incidunt quia libero laboriosam iure amet ullam eveniet delectus cupiditate omnis dicta! Nihil quis veniam aspernatur incidunt sint. Architecto, a provident?",
                        "sabores":["Bolo de baunilha", "Bolo de chocolate"],
                        "outrasInformacoes":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium omnis quibusdam doloribus hic maxime amet? Architecto earum officia quos nesciunt?", 
                        "preco": "9.00",
                    },
                    {
                        "nome": "Cupcake de cereja",
                        "imagem": "imagens/produtos/cupcakecereja.jpg", 
                        "descricaoResumo": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium omnis quibusdam doloribus hic maxime amet? Architecto earum officia quos nesciunt?",
                        "descricao":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum deserunt repellat totam libero porro consectetur dolorem dolor eligendi ratione, quia, corporis aliquam qui ea et iste quasi obcaecati, dolores eveniet vel sed autem. Distinctio nostrum quidem dolorum nam neque magni eos labore ipsa, culpa saepe, at repellendus inventore dolores provident dicta numquam sunt repudiandae doloribus quis? Alias ipsa iusto provident hic voluptatibus repellendus deleniti atque enim natus repellat veritatis, ab incidunt quia libero laboriosam iure amet ullam eveniet delectus cupiditate omnis dicta! Nihil quis veniam aspernatur incidunt sint. Architecto, a provident?",
                        "sabores":["Bolo de baunilha", "Bolo de chocolate"],
                        "outrasInformacoes":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium omnis quibusdam doloribus hic maxime amet? Architecto earum officia quos nesciunt?", 
                        "preco": "9.50",
                    },
                    {
                        "nome": "Cupcake de bombom",
                        "imagem": "imagens/produtos/cupcakebombom.jpg", 
                        "descricaoResumo": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium omnis quibusdam doloribus hic maxime amet? Architecto earum officia quos nesciunt?",
                        "descricao":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum deserunt repellat totam libero porro consectetur dolorem dolor eligendi ratione, quia, corporis aliquam qui ea et iste quasi obcaecati, dolores eveniet vel sed autem. Distinctio nostrum quidem dolorum nam neque magni eos labore ipsa, culpa saepe, at repellendus inventore dolores provident dicta numquam sunt repudiandae doloribus quis? Alias ipsa iusto provident hic voluptatibus repellendus deleniti atque enim natus repellat veritatis, ab incidunt quia libero laboriosam iure amet ullam eveniet delectus cupiditate omnis dicta! Nihil quis veniam aspernatur incidunt sint. Architecto, a provident?",
                        "sabores":["Chocolate", "Chocolate branco"],
                        "outrasInformacoes":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium omnis quibusdam doloribus hic maxime amet? Architecto earum officia quos nesciunt?", 
                        "preco": "10.00",
                    },
                ],
                "carrinho" : [
                    {},
                ],
                "precoEntrega" : "10,00",
                "retiradaNaLoja" : true,
                "formasPagamento" : {
                    "online" : ["cartao", "pix"],
                    "naEntrega" : ["cartao", "dinheiro"],
                },
                "redesSociais" : {
                    "facebook" : "facebook.com",
                    "instagram": "instagram.com",
                    "twitter" : "twitter.com",
                    "tiktok" : "tiktok.com",
                    "youtube" : "youtube.com",
                },
            },
          ]
        localStorage.setItem('listaVendedores', JSON.stringify(listaVendedores));
    }
    if (localStorage.getItem('enderecoAtual') == null) {
        enderecoAtual = "Selecionar endereço";
        localStorage.setItem('enderecoAtual', JSON.stringify(enderecoAtual));
    }
    if (localStorage.getItem('listaUsuarios') == null) {
        listaUsuarios = [{}];
        localStorage.setItem('listaUsuarios', JSON.stringify(listaUsuarios));
    }
    if (localStorage.getItem('idUsuarioLogado') == null) {
        idUsuarioLogado = {"id": -1, "nome" : "Seu nome", "tipo": "none"}; /*id : -1 = nenhum usuário logado; tipo = cliente/vendedor */
        localStorage.setItem('idUsuarioLogado', JSON.stringify(idUsuarioLogado));
    }
    if (localStorage.getItem('clienteOuVendedor') == null) {
        localStorage.setItem('clienteOuVendedor', "cliente");
    }
    listaVendedores = JSON.parse(localStorage.getItem('listaVendedores'));
    enderecoAtual = JSON.parse(localStorage.getItem('enderecoAtual'));
    listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios'));
    idUsuarioLogado = JSON.parse(localStorage.getItem('idUsuarioLogado')); 
}

function updateLocalStorage(){
    localStorage.setItem('listaVendedores', JSON.stringify(listaVendedores));
    localStorage.setItem('enderecoAtual', JSON.stringify(enderecoAtual));
    localStorage.setItem('listaUsuarios', JSON.stringify(listaUsuarios));
    localStorage.setItem('idUsuarioLogado', JSON.stringify(idUsuarioLogado));
    
    /* Update address */
    let endereco = document.querySelectorAll(".endereco_atual");
    for (let element = 0; element < endereco.length; element++) {
        endereco[element].textContent = enderecoAtual;   
      } 
    let nomeUsuario = document.querySelectorAll(".nome_usuario");
    for (let element = 0; element < nomeUsuario.length; element++) {
        nomeUsuario[element].textContent = idUsuarioLogado.nome;   
      } 
    /* Update user menu items */
    if (idUsuarioLogado.id == -1) {
        document.querySelector(".navDrop-logado").style.display = "none";
        document.querySelector(".navDrop-login").style.display = "block";
    }
    else {
        document.querySelector(".navDrop-logado").style.display = "block";
        document.querySelector(".navDrop-login").style.display = "none";
        opcoesVendedor();
    }
}


/* fim Send to local storage*/

function mudarEndereco() {
    enderecoAtual = document.querySelector("#input_modal_endereco").value;
    document.querySelector("#input_modal_endereco").value = "";
    atualizarEndereco();
}

function atualizarEndereco () {
    idUsuarioLogado = JSON.parse(localStorage.getItem('idUsuarioLogado'));
    if (idUsuarioLogado.id != "-1") {
        listaUsuarios[idUsuarioLogado.id].endereco = enderecoAtual;
    }
    updateLocalStorage();
    if (typeof updateListaProdutosPaginaCarrinho == 'function') { 
        updateListaProdutosPaginaCarrinho();
      }
}

function logOut() {
    listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios'));
    idUsuarioLogado = {"id": -1, "nome" : "Seu nome", "tipo": "none"};
    updateLocalStorage();
}
function redirectClienteOuVendedor(cliente_vendedor = "cliente") {
    localStorage.setItem("clienteOuVendedor", cliente_vendedor);
}

function abrirDadosUsuario() {
    idUsuarioLogado = JSON.parse(localStorage.getItem('idUsuarioLogado'));
    listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios'));
    let dadosUsuario = listaUsuarios[idUsuarioLogado.id];

    document.querySelector("#menu_dados_usuario_nome").innerText = `${dadosUsuario.nome} ${dadosUsuario.sobrenome}`;
    let nascimento = dadosUsuario.nascimento;
    nascimento = mudarFormatoData(nascimento);
    document.querySelector("#menu_dados_usuario_cnpj").innerText = `${dadosUsuario.cnpj}`;
    document.querySelector("#menu_dados_usuario_nome_loja").innerText = `${dadosUsuario.nomeLoja}`;  
    document.querySelector("#menu_dados_usuario_nascimento").innerText = `${nascimento}`;
    document.querySelector("#menu_dados_usuario_nome_de_usuario").value = `${dadosUsuario.nomeUsuario}`;
    document.querySelector("#menu_dados_usuario_email").value = `${dadosUsuario.email}`;
    document.querySelector("#menu_dados_usuario_senha").value = `${dadosUsuario.senha}`;
    document.querySelector("#menu_dados_usuario_confirmar_senha_hide").style = "display: none";
    document.querySelector("#menu_dados_usuario_repetir_senha_hide").style = "display: none";
    document.querySelector("#menu_dados_usuario_senha_antiga_hide").style = "display: none";
    document.querySelector("#menu_dados_usuario_telefone").value = `${dadosUsuario.telefone}`;
    document.querySelector("#menu_dados_usuario_endereco").value = `${dadosUsuario.endereco}`;
    document.querySelector("#menu_dados_usuario_confirmar_senha").value = "";
    document.querySelector("#menu_dados_usuario_repetir_senha").value = "";
    document.querySelector("#menu_dados_usuario_senha_antiga").value = "";
    opcoesVendedor();
}

function abrirHistoricoUsuario() {
    idUsuarioLogado = JSON.parse(localStorage.getItem('idUsuarioLogado'));
    listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios'));
    let historico = listaUsuarios[idUsuarioLogado.id].historicoDePedidos;
    let listaHistorico = ``;
    if (historico.length == 1) {
        listaHistorico = `<div class="h4 text-center">Nenhum pedido realizado</div>`;
    }
    for (let i = (historico.length - 2); i >= 0; i--) {
    let pedido = listaUsuarios[idUsuarioLogado.id].historicoDePedidos[i];
    let indexPedido = pedido.numeroDoPedido - 1;
    listaHistorico += `
        <div class="layout_historico_box">
            <div class="layout_historico">
                <span class="h4_sub">Pedido n.º ${pedido.numeroDoPedido}</span>
                <span class="h4_text float-right">${pedido.dataCompra}</span>
                <br>
                <div class="layout_historico_info">
                    <span class="h4_text">Loja: ${pedido.nomeVendedor}</span>
                    <span class="h4_text">Valor total: ${pedido.valorDaCompra} R$</span>
                </div>
            </div>
            <div class="detalhes_pedido">
                <div class="h4_text" id="detalhesPedido${indexPedido}">
                    <div class="text-right">
                    Detalhes do pedido <button type="button" class="btn btn-transparent" onclick="mostrarDetalhesHistorico(${indexPedido}, 'open')"><i class="fas fa-caret-down fa-2x"></i></button>
                    </div>
                    <br>
                </div>
                <div class="bottom_border_dark text-right">
                <button type="button" class="btn btn-primary" id="botao_repetir_pedido" onclick="repetirPedido(${indexPedido})">Repetir este pedido</button>
                </div>
            </div>
        </div>
    `;
    }
    document.querySelector("#modal_historico").innerHTML = listaHistorico;
}
function mostrarDetalhesHistorico(indexPedido, openOrClose = "close") {
    idUsuarioLogado = JSON.parse(localStorage.getItem('idUsuarioLogado'));
    listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios'));
    let pedido = listaUsuarios[idUsuarioLogado.id].historicoDePedidos[indexPedido];
    if (openOrClose == "open") {
        document.querySelector(`#detalhesPedido${indexPedido}`).innerHTML = 
        `   
            <div class="text-right">
            Detalhes do pedido <button type="button" class="btn btn-transparent" onclick="mostrarDetalhesHistorico(${indexPedido}, 'close')"><i class="fas fa-caret-up fa-2x"></i></button>
            </div>
            <br>
            <div class="bottom_border_dark">
                ${pedido.detalhes}
            </div>
        `
    }
    else {
        document.querySelector(`#detalhesPedido${indexPedido}`).innerHTML = 
        `
        <div class="text-right">
                Detalhes do pedido <button type="button" class="btn btn-transparent" onclick="mostrarDetalhesHistorico(${indexPedido}, 'open')"><i class="fas fa-caret-down fa-2x"></i></button>
                <br>
        </div>
        `
    }
}

function repetirPedido(indexHistorico) {
    idUsuarioLogado = JSON.parse(localStorage.getItem('idUsuarioLogado'));
    listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios'));
    listaVendedores = JSON.parse(localStorage.getItem('listaVendedores'));
    let historicoRepetir = listaUsuarios[idUsuarioLogado.id].historicoDePedidos[indexHistorico];
    localStorage.setItem('lojaAtual', JSON.stringify(historicoRepetir.idLoja));

    let indexLoja = procurarIdLoja(historicoRepetir.idLoja);
    listaVendedores[indexLoja].carrinho = historicoRepetir.repetir;
    window.location = "mini-website-carrinho.html";

    updateLocalStorage();
}

function abrirFavoritosUsuario() {
    idUsuarioLogado = JSON.parse(localStorage.getItem('idUsuarioLogado'));
    listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios'));
    let favoritos = listaUsuarios[idUsuarioLogado.id].favoritos;
    let listaVendedoresFavoritos = ``;
    for (let i = (favoritos.vendedores.length -2); i >= 0; i--) {
        listaVendedoresFavoritos += favoritos.vendedores[i].info;
    }
    if (favoritos.vendedores.length == 1) {
        listaVendedoresFavoritos = 
        `
            <div class="center_padding">
                <span class="h4_sub">Nenhum vendedor favoritado</span>
            </div>
        `;
    }
    document.querySelector("#vendedores_favoritos").innerHTML = listaVendedoresFavoritos;
    let listaProdutosFavoritos = ``;
    for (let i = (favoritos.produtos.length -2); i >= 0; i--) {
        listaProdutosFavoritos += favoritos.produtos[i].info;
    }
    if (favoritos.produtos.length == 1) {
        listaProdutosFavoritos = 
        `
            <div class="center_padding">
                <span class="h4_sub">Nenhum produto favoritado</span>
            </div>
        `;
    }
    document.querySelector("#produtos_favoritos").innerHTML = listaProdutosFavoritos;
}

function favoritarVendedor() {
    idUsuarioLogado = JSON.parse(localStorage.getItem('idUsuarioLogado'));
    listaVendedores = JSON.parse(localStorage.getItem('listaVendedores'));
    listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios'));
    if (idUsuarioLogado.id != -1) {
        let lojaAtual = JSON.parse(localStorage.getItem('lojaAtual'));
        let indexLoja = procurarIdLoja(lojaAtual);
        let loja = listaVendedores[indexLoja];

        let vendedoresFavoritos = listaUsuarios[idUsuarioLogado.id].favoritos.vendedores;
        let indexFavorito = vendedoresFavoritos.findIndex(x => x.idLoja === lojaAtual);
        
        if (indexFavorito == -1) {
            let adicionarFavoritos = `
                    <div class="lista_favoritos lista_favoritos_vendedor"> 
                        <div class="card_vendedor_favoritos">
                            <img src="${loja.imagem}"><br><div class="h4_sub text-center">${loja.nome}</div>
                        </div><p class="descricao_busca_vendedores_favoritos"><b>Descrição:</b> ${loja.descricaoResumo}</p>
                        <button type="button" class="btn btn-secondary text-right" id="botao_remover_favoritos" onclick="removerFavorito('${loja.link}', 'vendedor')">Remover</button>
                        <a href="mini-website.html${loja.link}"><button type="button" class="btn btn-primary text-right">Ir para página</button></a>
                    </div>
                    `;
            vendedoresFavoritos[vendedoresFavoritos.length - 1].idLoja = lojaAtual;
            vendedoresFavoritos[vendedoresFavoritos.length - 1].info = adicionarFavoritos;
            vendedoresFavoritos.push({},);
            listaUsuarios[idUsuarioLogado.id].favoritos.vendedores = vendedoresFavoritos;
            window.alert("Vendedor adicionado aos favoritos!");
        }
        else {
            window.alert("Vendedor já favoritado anteriormente");
        }
        updateLocalStorage();
        }
    else {
        window.alert("Faça login para favoritar vendedores!");
    }
}

function favoritarProduto(idProduto = -1) {
    idUsuarioLogado = JSON.parse(localStorage.getItem('idUsuarioLogado'));
    listaVendedores = JSON.parse(localStorage.getItem('listaVendedores'));
    listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios'));
    if (idUsuarioLogado.id != -1) {
        let lojaAtual = JSON.parse(localStorage.getItem('lojaAtual'));
        let indexLoja = procurarIdLoja(lojaAtual);
        let loja = listaVendedores[indexLoja];
        if (idProduto == -1) {
            let nomeProduto = document.querySelectorAll(".informacoes_nome_produto")[0].innerText;
            idProduto = listaVendedores[indexLoja].catalogo.findIndex(x => x.nome === nomeProduto);
        }
        let produto = listaVendedores[indexLoja].catalogo[idProduto];

        let idLojaProduto = lojaAtual + produto.nome;
        let produtosFavoritos = listaUsuarios[idUsuarioLogado.id].favoritos.produtos;
        let indexFavorito = produtosFavoritos.findIndex(x => x.idProduto === idLojaProduto);

        if (indexFavorito == -1) {
            let adicionarFavoritos = `
                    <div class="lista_favoritos"> 
                        <div class="card_vendedor_favoritos_produto">
                            <img src="${produto.imagem}"><br><div class="h4_sub text-center">${produto.nome}</div>
                        </div><p class="descricao_busca"><b>Descrição:</b> ${produto.descricaoResumo} <br> <span class="h4_text">Loja: ${loja.nome}</span> </p>
                        <button type="button" class="btn btn-secondary text-right" id="botao_remover_favoritos" onclick="removerFavorito('${idLojaProduto}', 'produto')">Remover</button>
                        <button type="button" class="btn btn-primary text-right" onclick='redirectDetalhesProduto("${produto.nome}", "${loja.link}")'>Ir para produto</button>
                    </div>
                    `;
            produtosFavoritos[produtosFavoritos.length - 1].idProduto = idLojaProduto;                    
            produtosFavoritos[produtosFavoritos.length - 1].info = adicionarFavoritos;
            produtosFavoritos.push({},);
            listaUsuarios[idUsuarioLogado.id].favoritos.produtos = produtosFavoritos;
            window.alert("Produto adicionado aos favoritos!");
        }
        else {
            window.alert("Produto já favoritado anteriormente");
        }
        updateLocalStorage();
    }
    else {
        window.alert("Faça login para favoritar produtos!");
    }
}

function removerFavorito (idLojaOuProduto, vendedorOuProduto) {
    idUsuarioLogado = JSON.parse(localStorage.getItem('idUsuarioLogado'));
    if (vendedorOuProduto == "vendedor") {    
        let vendedoresFavoritos = listaUsuarios[idUsuarioLogado.id].favoritos.vendedores;
        idLojaOuProduto = idLojaOuProduto.replace("?loja=","");
        let indice = vendedoresFavoritos.findIndex(x => x.idLoja === idLojaOuProduto);
        vendedoresFavoritos.splice(indice, 1);
        listaUsuarios[idUsuarioLogado.id].favoritos.vendedores = vendedoresFavoritos;
    }
    else if (vendedorOuProduto == "produto") {    
        let produtosFavoritos = listaUsuarios[idUsuarioLogado.id].favoritos.produtos;
        let indice = produtosFavoritos.findIndex(x => x.idProduto === idLojaOuProduto);
        produtosFavoritos.splice(indice, 1);
        listaUsuarios[idUsuarioLogado.id].favoritos.produtos = produtosFavoritos;
    }
    updateLocalStorage();
    abrirFavoritosUsuario();
}

function redirectDetalhesProduto(nomeProduto, lojaUrl) {
    localStorage.setItem('redirectDetalhesProduto', nomeProduto);
    window.location = "mini-website-produtos.html" + lojaUrl;
}

function abrirCartoesUsuario() {
    idUsuarioLogado = JSON.parse(localStorage.getItem('idUsuarioLogado'));
    listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios'));
    let cartoes = listaUsuarios[idUsuarioLogado.id].cartoes;
    let listaCartoes =  ``;
    for (let i = 0; i < (cartoes.length); i++) {
        listaCartoes += `
        <div class="layout_historico">
            <span class="h4_sub">${cartoes[i].nome}</span>
        </div>
        <div class="bottom_border_dark">
            <br>
            <i class="far fa-credit-card fa-6x" id="credit_icon"></i>
            <div class="text-right">
                <button type="button" class="btn btn-secondary" id="botao_repetir_pedido" onclick="removerCartao(${i})">Remover cartão</button>    
            </div>            
        </div>
        `;
    }
    if (cartoes.length == 0) {
        listaCartoes = 
        `
        <div class="center_padding">
            <span class="h4_sub">Nenhum cartão salvo</span>
        </div>
        `;
    }
    document.querySelector("#cartoes_salvos").innerHTML = listaCartoes;
}

function adicionarCartao() {
    idUsuarioLogado = JSON.parse(localStorage.getItem('idUsuarioLogado'));
    listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios'));
    let cartoes = listaUsuarios[idUsuarioLogado.id].cartoes;
    let novoCartao = {};
    novoCartao.nome = "Cartão " + (cartoes.length + 1);
    cartoes.push(novoCartao,);
    listaUsuarios[idUsuarioLogado.id].cartoes = cartoes;
    updateLocalStorage();
    abrirCartoesUsuario();
}

function removerCartao(indexCartao) {
    idUsuarioLogado = JSON.parse(localStorage.getItem('idUsuarioLogado'));
    listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios'));
    let cartoes = listaUsuarios[idUsuarioLogado.id].cartoes;
    cartoes.splice(indexCartao, 1);
    listaUsuarios[idUsuarioLogado.id].cartoes = cartoes;
    updateLocalStorage();
    abrirCartoesUsuario();
}

function mudarFormatoData (data) {
    /* Muda o formato da data de AAAA-MM-DD para DD-MM-AAAA */
    let novaData = "";
    novaData += `${data.substr(8,2)}/${data.substr(5,2)}/${data.substr(0,4)}`;
    return novaData;
}

function mudarDadosPesoais(opcao) {
    idUsuarioLogado = JSON.parse(localStorage.getItem('idUsuarioLogado'));
    listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios'));
    switch (opcao) {
        case 1:
            listaUsuarios[idUsuarioLogado.id].nomeUsuario = document.querySelector("#menu_dados_usuario_nome_de_usuario").value;
            window.alert("Nome de usuário alterado!");
        break
        case 2:
                let senha = document.querySelector("#menu_dados_usuario_confirmar_senha").value;
                if (senha == listaUsuarios[idUsuarioLogado.id].senha) {
                listaUsuarios[idUsuarioLogado.id].email = document.querySelector("#menu_dados_usuario_email").value;
                document.querySelector("#menu_dados_usuario_confirmar_senha_hide").style = "display: none";
                window.alert("E-mail alterado!");
            }
            else {
                window.alert("Senha incorreta!");
            }
            document.querySelector("#menu_dados_usuario_confirmar_senha").value = "";
        break
        case 3:
            let senhaNova = document.querySelector("#menu_dados_usuario_senha").value;
            let repetirSenhaNova = document.querySelector("#menu_dados_usuario_repetir_senha").value;
            let senhaAntiga = document.querySelector("#menu_dados_usuario_senha_antiga").value;
            if (senhaAntiga == listaUsuarios[idUsuarioLogado.id].senha && senhaNova == repetirSenhaNova) {
                listaUsuarios[idUsuarioLogado.id].senha = document.querySelector("#menu_dados_usuario_senha").value;
                document.querySelector("#menu_dados_usuario_repetir_senha_hide").style = "display: none";
                document.querySelector("#menu_dados_usuario_senha_antiga_hide").style = "display: none";
                window.alert("Senha alterada!");
            }
            else {
                window.alert("Informações incorretas!");
            }
            document.querySelector("#menu_dados_usuario_repetir_senha").value = "";
            document.querySelector("#menu_dados_usuario_senha_antiga").value = "";
        break
        case 4:
            listaUsuarios[idUsuarioLogado.id].telefone = document.querySelector("#menu_dados_usuario_telefone").value;
            window.alert("Telefone alterado!");
        break
        case 5:
            enderecoAtual = document.querySelector("#menu_dados_usuario_endereco").value;
            atualizarEndereco();
            window.alert("Endereço atualizado!");
        break
        default:
    }
    updateLocalStorage();
}

function mostrarRepetirSenha() {
    document.querySelector("#menu_dados_usuario_repetir_senha_hide").style = "display: block";
    document.querySelector("#menu_dados_usuario_senha_antiga_hide").style = "display: block";  
}

function emailConfirmarSenha() {
    document.querySelector("#menu_dados_usuario_confirmar_senha_hide").style = "display: block";
}

function opcoesVendedor() {
    let opcoes = document.querySelectorAll(".opcao_vendedor");
    idUsuarioLogado = JSON.parse(localStorage.getItem('idUsuarioLogado'));
    if (idUsuarioLogado.tipo == "vendedor") {
        for (let element = 0; element < opcoes.length; element++) {
            opcoes[element].style = "display: block";   
        } 
    }
    else {
        for (let element = 0; element < opcoes.length; element++) {
            opcoes[element].style = "display: none";   
        }
    }
}

function procurarIdLoja(lojaAtual) {
    let linkDaLojaNaLista = "?loja=" + lojaAtual;
    listaVendedores = JSON.parse(localStorage.getItem('listaVendedores'));
    let indexLoja = listaVendedores.findIndex(x => x.link === linkDaLojaNaLista);
    return indexLoja;
}

function addHTTPS (link) {
    let checkHTTPS = link.substr(0,4);
    if (checkHTTPS != "http" && link != "") {
        checkHTTPS = link.substr(0,2);
        if (checkHTTPS != "//") {
            link = "//" + link;
        }
    }
    return link;
}
