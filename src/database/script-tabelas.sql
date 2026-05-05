-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE SoundMind;

USE SoundMind;


CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

create table estilo (
	id_estilo INT PRIMARY KEY AUTO_INCREMENT,
	estilo VARCHAR(50),
	fk_usuario INT,
	CONSTRAINT fk_usuario_estilo
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

Create table pergunta (
	id_pergunta INT PRIMARY KEY AUTO_INCREMENT,
	pergunta VARCHAR(100)
);

create table alternativa (
	id_alternativa INT PRIMARY KEY AUTO_INCREMENT,
	alternativa VARCHAR(45),
	caracteristica VARCHAR(45),
	fk_pergunta INT,
	CONSTRAINT fk_pergunta_alternativa
	FOREIGN KEY (fk_pergunta) REFERENCES pergunta(id_pergunta)
);

INSERT INTO pergunta (pergunta) VALUES
('Qual seu estilo musical favorito?'),
('O que uma Música precisa ter para te prender?'),
('Onde vc Mais gosta de ouvir sua playlist Favorita?'),
('Como seus amigos te descrevem?'),
('Qual emoção prefere sentir ao acordar?'),
('Qual elemento muda seu humor instantaneamente?'),
('Qual a melhor forma de colocar as emoções para fora?'),
('O que mais te atrai em um evento musical?'),
('Qual o seu "mood" ideal para uma tarde de domingo?'),
('Se você fosse um artista, como seria o seu palco?'),
('Qual dessas atividades mais ajuda você a recarregar as energias?'),
('Qual item não pode faltar no seu dia a dia?');


INSERT INTO alternativa (alternativa, caracteristica, fk_pergunta) VALUES
('MPB', null, 1),
('Pop', null, 1),
('Funk', null, 1),
('Trap', null, 1),
('Samba', null, 1),
('Gospel', null, 1),
('Raggae', null, 1),
('Sertanejo', null, 1),

('Paz/Positividade', 'Raggae', 2),
('Rimas/Atitude', 'Rap', 2),
('Profundidade/Poesia', 'MPB', 2),
('Refrão que gruda na cabeça', 'Pop', 2),

('Carro ecom volume máximo', 'Rap', 3),
('Quarto e Paz interior', 'Gospel', 3),
('Fone e enquanto caminha', 'Pop', 3),
('Saída com os amigos','Funk' ,3),

('Pessoa mais animada do grupo','Pop' ,4),
('Calmo e espiritualizado','Raggae' ,4),
('Fiel as raizes e tradições','Funk' ,4),
('Descontraído e de bem com a vida','MPB' ,4),

('Invencível/Focado','Rap' ,5),
('Energia/Felicidade','Pop' ,5),
('Tranquilidade/Calma','Raggae' ,5),
('Gratidão/Conforto','Gospel' ,5),

('Ritmo arrastado/Som apaixonado','Sertanejo' ,6),
('Flow rápido/Afiado','Rap' ,6),
('Linha relaxante/Devagar','Gospel' ,6),
('Som que não consegue ficar parado','Funk' ,6),

('Dançar até cansar','Sertanejo' ,7),
('Cantar a plenos pulmões','Pop' ,7),
('Ouvir rimas rápidas','Rap' ,7),
('Relaxar e ouvir vibrações positivas','Raggae' ,7);

('Dançar até cansar','Samba' ,8),
('Estilo ostentação e graves potentes','Trap',8),
('Letras inteligentes e voz e violão','MPB',8),
('Show de luzes e clima de balada','Sertanejo',8),

('Churrasquinho com os amigos e batucada','Samba',9),
('Focado no lifestyle e criando algo novo','Trap',9),
('Café e clássicos da música brasileira','MPB',9),
('Ouvindo um modão e curtindo a saudade','Sertanejo',9),

('Um quintal bem raiz e pé no chão','Samba',10),
('Cenário urbano com muito neon e fumaça','Trap',10),
('Um teatro intimista com luz quente','MPB',10),
('Um palco iluminado com coral e muita entrega', 'Gospel', 10),

('Limpar a casa ou treinar ouvindo batidões','Funk',11),
('Ler textos inspiradores ou ouvir louvores','Gospel',11),
('Cozinhar para a família com um som de fundo','Samba',11),
('Pegar a estrada ouvindo histórias cantadas','Sertanejo',11),

('Óculos escuros e chinelo no pé', 'Raggae', 12),
('Corrente pesada e tênis de marca', 'Trap', 12),
('Boné de aba reta e roupas largas', 'Trap', 12),
('Caixinha de som potente e Juliet', 'Funk', 12);