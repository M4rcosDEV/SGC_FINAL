create schema SGC;
use SGC;

/*A senha precisa ser 255 pq é uma hash com muitos caracteres*/
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
	nome varchar(200) not null,
	matricula varchar(15) not null,
	senha varchar(255) not null,
	tipo_func varchar(55) not null, 
    email varchar(55) not null
);


create table predio ( 
	idPredio integer primary key
); 

create table sala ( 
	id_sala integer,
	foreign key (id_sala) references chave(id_chave),  
	idPredio integer not null,
	foreign key (idPredio) references predio(ìdPredio),
	primary key(id_sala, idPredio)
); 


create table chave ( 
	id_chave integer primary key,  
	situacao integer not null,  
	idPredio integer not null,
    descricao varchar(50) not null,
    foreign key(idPredio) references predio(idPredio)
    
);

create table agendar (
	id_chave integer,
    id_cliente integer, 
	turno integer not null, 
    data_agendar integer not null,  
    hora integer not null,
	foreign key(id_chave) references chave(id_chave),
    foreign key(id_cliente) references cliente(id_cliente),
    primary key(id_chave, id_cliente)
);

create table emprestimo (
	id_emprestimo integer auto_increment primary key,
    id_chave integer,
    id_cliente integer,
    id_funcionario integer,
	foreign key(id_chave, id_cliente) references agendar(id_chave, id_cliente),
    foreign key(id_funcionario) references administrador(id_administrador)
);