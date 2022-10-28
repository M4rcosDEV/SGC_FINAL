/*drop schema sgc;*/
create schema SGC;
use SGC;

create table cliente (
	id_cliente integer auto_increment primary key,
	nome varchar(50) not null,
	matricula varchar(15) not null,
	senha varchar(255) not null,
    tipo_func varchar(55) not null, 
    email varchar(55) not null
);

create table administrador (
	id_administrador integer auto_increment primary key,
	id_funcionario integer,
	nome varchar(200) not null,
	matricula varchar(15) not null,
	senha varchar(255) not null,
	tipo_func varchar(55) not null, 
    email varchar(55) not null
);

create table predio ( 
	idPredio integer primary key
); 

/*
SITUAÇÕES CHAVE:
0 - DISPONIVEL
1 - EM USO
2 - MANUTENÇÃO
*/
create table chave ( 
	idChave integer primary key,  
	situacao integer not null,  
	idPredio integer not null,
    descricao varchar(50) not null,
    foreign key(idPredio) references predio(idPredio)
    
);

/*Sala vai ser criada de acordo a Chave que vai ser criada,
ou seja, cria a chave e automáticamente a sala é criada

create table sala ( 
	idSala integer,
	foreign key (idSala) references chave(idChave),  
	idPredio integer not null,
	foreign key (idPredio) references predio(idPredio),
	primary key(idSala, idPredio)
); 
*/
create table agendar (
	idChave integer,
    id_cliente integer, 
	turno integer not null, 
    data_agendar integer not null,  
    hora integer not null,
	foreign key(idChave) references chave(idChave),
    foreign key(id_cliente) references cliente(id_cliente),
    primary key(idChave, id_cliente)
);

create table emprestimo (
	id_emprestimo integer auto_increment primary key,
    idChave integer,
    id_cliente integer,
    id_funcionario integer,
	foreign key(idChave, id_cliente) references agendar(idChave, id_cliente),
    foreign key(id_funcionario) references administrador(id_administrador)
);