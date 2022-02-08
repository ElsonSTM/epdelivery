Instruções de instalação no windows

Resquisitos de sofware para testar as rotas e ver a persistencia dos dados no BD.

* Postman [Baixar](https://www.postman.com/downloads/)
* Pgadmin - Postgres [Baixar](https://www.pgadmin.org/download/)
* Google Chorme [Instalar](https://www.google.com/chrome/)

# Para verificar a persistencia no BD

<ol>
<li> Baixar o workBench e fazer as seguintes configurações do BD na nuvem do heroku, como na figura abaixo:

* Aba General </br>
<p>
 -- Nome do bd sugestivo: EpDelivery-Heroku 

* Aba Connection </br>
<p>  Host name: ec2-44-198-24-0.compute-1.amazonaws.com </p> 
<p>-- Port: 5432 </p> 
<p>-- Database: d20j83effp82t9 </p> 
<p>-- Username: wlorecngsufeim </p> 
                
* Aba advanced </br>

<p> -- Db restriction: d20j83effp82t9 </P>
</br>

<h2>Criar a tabela no banco de dados</h2>

`````
create table tb_order (id int8 generated by default as identity, address varchar(255), latitude float8, longitude varchar(255), moment timestamp, status int4, primary key (id));
create table tb_order_product (order_id int8 not null, product_id int8 not null, primary key (order_id, product_id));
create table tb_product (id int8 generated by default as identity, description varchar(255), image_uri varchar(255), name varchar(255), price float8, primary key (id));
create table tb_role (id int8 generated by default as identity, autority varchar(255), primary key (id));
create table tb_user (id int8 generated by default as identity, email varchar(255), name varchar(255), password varchar(255), primary key (id));
create table tb_user_role (user_id int8 not null, role_id int8 not null, primary key (user_id, role_id));
alter table if exists tb_order_product add constraint FKsu03ywlcvyqg5y78qey2q25lc foreign key (product_id) references tb_product;
alter table if exists tb_order_product add constraint FK40anaevs16kmc2tbh7wc511fq foreign key (order_id) references tb_order;
alter table if exists tb_user_role add constraint FKea2ootw6b6bb0xt3ptl28bymv foreign key (role_id) references tb_role;
alter table if exists tb_user_role add constraint FK7vn3h53d0tqdimm8cp45gc0kl foreign key (user_id) references tb_user;
`````

</br>

<h2> Popular o banco de dados <h2>

````
INSERT INTO tb_user (name, email, password) VALUES ('Paulo Afonso', 'paulo.afonso@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (name, email, password) VALUES ('Elson Pinheiro', 'engelp@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (name, email, password) VALUES ('Maria Alice', 'malice@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (name, email, password) VALUES ('Gabriel Nunes', 'gnunes@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');

INSERT INTO tb_role (autority) VALUES ('ROLE_ADMIN');
INSERT INTO tb_role (autority) VALUES ('ROLE_COZINHEIRO');
INSERT INTO tb_role (autority) VALUES ('ROLE_CLIENTE');
INSERT INTO tb_role (autority) VALUES ('ROLE_MOTOBOY');

INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 2);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 3);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 4);
INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 2);
INSERT INTO tb_user_role (user_id, role_id) VALUES (3, 3);
INSERT INTO tb_user_role (user_id, role_id) VALUES (4, 4);

INSERT INTO tb_product (name, price, image_Uri, description) VALUES ('Churrasquinho', 10.0, 'https://raw.githubusercontent.com/ElsonSTM/epdelivery/main/imagens/espetinho.jpg', 'Espetinho de frango com mussarela, orégano, molho especial e tempero da casa.');
INSERT INTO tb_product (name, price, image_Uri, description) VALUES ('Copo Amendoin', 9.0, 'https://raw.githubusercontent.com/ElsonSTM/epdelivery/main/imagens/amendoin.jpg', 'Copo de amendoin, bem torradinho.');
INSERT INTO tb_product (name, price, image_Uri, description) VALUES ('Suco de lanranja', 8.0, 'https://raw.githubusercontent.com/ElsonSTM/epdelivery/main/imagens/suco_laranja.png', 'Suco de laranja, geladinho e bem doce');
INSERT INTO tb_product (name, price, image_Uri, description) VALUES ('Pastel de frango', 7.0, 'https://raw.githubusercontent.com/ElsonSTM/epdelivery/main/imagens/pastel_de_frango.jpg', 'Pastel frito com recheio cremoso de frango');
INSERT INTO tb_product (name, price, image_Uri, description) VALUES ('Tapioca comum', 5.0, 'https://raw.githubusercontent.com/ElsonSTM/epdelivery/main/imagens/tapioca_simples.png', 'Tapioca finininha com manteiga');
INSERT INTO tb_product (name, price, image_Uri, description) VALUES ('Tapica com queijo', 7.0, 'https://raw.githubusercontent.com/ElsonSTM/epdelivery/main/imagens/tapioca_queijo.jpg', 'Tapioca com queijo derretido');
INSERT INTO tb_product (name, price, image_Uri, description) VALUES ('Tapioca com carne seca', 15.0, 'https://raw.githubusercontent.com/ElsonSTM/epdelivery/main/imagens/tapioca_carne_seca.jpg', 'Tapioca com recheio de carne seca.');
INSERT INTO tb_product (name, price, image_Uri, description) VALUES ('Tapioca com queijo e presunto', 7.90, 'https://raw.githubusercontent.com/ElsonSTM/epdelivery/main/imagens/tapioca_queijo_presunto.jpg', 'Tapioca com queijo e presunto');

INSERT INTO tb_order (status, latitude, longitude, address, moment) VALUES (0, -23.561680, -46.656139, 'Avenida Mendonça furtado, 1300', TIMESTAMP WITH TIME ZONE '2021-01-01T10:00:00Z');
INSERT INTO tb_order (status, latitude, longitude, address, moment) VALUES (1, -22.946779, -43.217753, 'Avenida Mendonça furtado, 1300', TIMESTAMP WITH TIME ZONE '2021-01-01T15:00:00Z');
INSERT INTO tb_order (status, latitude, longitude, address, moment) VALUES (0, -25.439787, -49.237759, 'Avenida Mendonça furtado, 1300', TIMESTAMP WITH TIME ZONE '2021-01-01T16:00:00Z');
INSERT INTO tb_order (status, latitude, longitude, address, moment) VALUES (0, -23.561680, -46.656139, 'Avenida Mendonça furtado, 1300', TIMESTAMP WITH TIME ZONE '2021-01-01T12:00:00Z');
INSERT INTO tb_order (status, latitude, longitude, address, moment) VALUES (1, -23.561680, -46.656139, 'Avenida Mendonça furtado, 1300', TIMESTAMP WITH TIME ZONE '2021-01-01T08:00:00Z');
INSERT INTO tb_order (status, latitude, longitude, address, moment) VALUES (0, -23.561680, -46.656139, 'Avenida Mendonça furtado, 1300', TIMESTAMP WITH TIME ZONE '2021-01-01T14:00:00Z');
INSERT INTO tb_order (status, latitude, longitude, address, moment) VALUES (0, -23.561680, -46.656139, 'Avenida Mendonça furtado, 1300', TIMESTAMP WITH TIME ZONE '2021-01-01T09:00:00Z');

INSERT INTO tb_order_product (order_id, product_id) VALUES (1 , 1);
INSERT INTO tb_order_product (order_id, product_id) VALUES (1 , 4);
INSERT INTO tb_order_product (order_id, product_id) VALUES (2 , 2);
INSERT INTO tb_order_product (order_id, product_id) VALUES (2 , 5);
INSERT INTO tb_order_product (order_id, product_id) VALUES (2 , 8);
INSERT INTO tb_order_product (order_id, product_id) VALUES (3 , 3);
INSERT INTO tb_order_product (order_id, product_id) VALUES (3 , 4);
INSERT INTO tb_order_product (order_id, product_id) VALUES (4 , 2);
INSERT INTO tb_order_product (order_id, product_id) VALUES (4 , 6);
INSERT INTO tb_order_product (order_id, product_id) VALUES (5 , 4);
INSERT INTO tb_order_product (order_id, product_id) VALUES (5 , 6);
INSERT INTO tb_order_product (order_id, product_id) VALUES (6 , 5);
INSERT INTO tb_order_product (order_id, product_id) VALUES (6 , 1);
INSERT INTO tb_order_product (order_id, product_id) VALUES (7 , 7);
INSERT INTO tb_order_product (order_id, product_id) VALUES (7 , 5);

````
</br>

# Para testar as rotas

2- Dpois de instalado o postman, testar as seguintes rotas com seus respetivos avros.

<b> User </b> </br>
<b> Rota: New user </b> </br>
Endpoint: (POST) http://localhost:8080/users
````
{
  "name": "Pedro Paulo",
  "email": "pp@hotmail.com.br",
  "password": "joao123",
  "roles": [
    {
     "id": 1   
    }
  ]
}
````

<b> Rota: Update User </b> </br>
Endpoint: (PUT) http://localhost:8080/users/1
````
{
"name": "João Tadeu",
"email": "joão.tadeu@gmail.com",
"password": "j.tadeu30",
"roles": [
    {
     "id": 2   
    }
  ]
}
````

<b> Rota: Delete user </b> </br>
Endpoint: (DEL) http://localhost:8080/users/1

<b> Rota: User paged (lista paginada) </b></br>
Endpoint: (GET) http://localhost:8080/users?page=0&size=12&sort=name 

<b> Rota: User id (busca de usuário por id) </b></br>
Endpoint: (GET) http://localhost:8080/users/1

<br>

<b>Product</b> </br>
<b> Rota: Lista de protudos </b> </br> 
Endpoint: (GET) http://localhost:8080/products

<b>Order</b> </br>
<b> Rota: Lista de pedidos </b> </br> 
Endpoint: (GET) http://localhost:8080/orders

</br>
<b> Rota: New Order </b> </br> 
Endpoint: (POST) http://localhost:8080/orders

</br>


````
{
    "address": "Avenida Magalhãoes, 852",
    "latitude": -23.56168,
    "longitude": "-46.656139",
    "products": [
        {
            "id": 1
        },
        {
            "id": 3
        }
    ]
}
````
</br>
<b> Rota: Set - saiu Para Entrega </b> </br> 
Endpoint: (PUT) http://localhost:8080/orders/10/saiuparaentrega

</br>

<b> Rota: Set - Entregue </b> </br> 
Endpoint: (PUT) http://localhost:8080/orders/10/saiuparaentrega

</br>


