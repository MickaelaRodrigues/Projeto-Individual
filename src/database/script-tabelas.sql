CREATE DATABASE SoundMind;
USE SoundMind;

CREATE TABLE usuario (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    email VARCHAR(50),
    senha VARCHAR(50)
);

CREATE TABLE estilo (
    id_estilo INT PRIMARY KEY AUTO_INCREMENT,
    estilo VARCHAR(50)
);


CREATE TABLE usuario_estilo (
    fk_usuario INT,
    fk_estilo INT,
    data DATE,
    pontos INT, 
    PRIMARY KEY (fk_usuario, fk_estilo, data),
    CONSTRAINT fk_usuario_resultado FOREIGN KEY (fk_usuario) REFERENCES usuario(id),
    CONSTRAINT fk_estilo_resultado FOREIGN KEY (fk_estilo) REFERENCES estilo(id_estilo)
);

CREATE TABLE pergunta (
    id_pergunta INT PRIMARY KEY AUTO_INCREMENT,
    pergunta VARCHAR(100)
);

CREATE TABLE alternativa (
    id_alternativa INT PRIMARY KEY AUTO_INCREMENT,
    alternativa VARCHAR(45),
    fk_pergunta INT,
    CONSTRAINT fk_pergunta_alternativa FOREIGN KEY (fk_pergunta) REFERENCES pergunta(id_pergunta)
);

CREATE TABLE caracteristica (
    id_caracteristica INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45), 
    fk_alternativa INT,
    CONSTRAINT fk_alternativa_carac FOREIGN KEY (fk_alternativa) REFERENCES alternativa(id_alternativa)
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



INSERT INTO alternativa (alternativa, fk_pergunta) VALUES
('MPB', 1), ('Pop', 1), ('Funk', 1), ('Trap', 1), 
('Samba', 1), ('Gospel', 1), ('Raggae', 1), ('Sertanejo', 1),

('Paz/Positividade', 2),
 ('Rimas/Atitude', 2), 
('Profundidade/Poesia', 2),
 ('Refrão que gruda na cabeça', 2),

('Carro ecom volume máximo', 3),
 ('Quarto e Paz interior', 3), 
('Fone e enquanto caminha', 3),
 ('Saída com os amigos', 3),

('Pessoa mais animada do grupo', 4),
 ('Calmo e espiritualizado', 4), 
('Fiel as raizes e tradições', 4),
 ('Descontraído e de bem com a vida', 4),

('Invencível/Focado', 5),
 ('Energia/Felicidade', 5), 
('Tranquilidade/Calma', 5),
 ('Gratidão/Conforto', 5),

('Ritmo arrastado/Som apaixonado', 6),
 ('Flow rápido/Afiado', 6), 
('Linha relaxante/Devagar', 6),
 ('Som que não consegue ficar parado', 6),

('Dançar até cansar', 7),
 ('Cantar a plenos pulmões', 7), 
('Ouvir rimas rápidas', 7),
 ('Relaxar e ouvir vibrações positivas', 7),

('Dançar até cansar', 8),
 ('Estilo ostentação e graves potentes', 8), 
('Letras inteligentes e voz e violão', 8),
 ('Show de luzes e clima de balada', 8),

('Churrasquinho com os amigos e batucada', 9),
 ('Focado no lifestyle e criando algo novo', 9), 
('Café e clássicos da música brasileira', 9),
 ('Ouvindo um modão e curtindo a saudade', 9),

('Um quintal bem raiz e pé no chão', 10),
 ('Cenário urbano com muito neon e fumaça', 10), 
('Um teatro intimista com luz quente', 10),
 ('Um palco iluminado com coral e muita entrega', 10),

('Limpar a casa ou treinar ouvindo batidões', 11),
('Ler textos inspiradores ou ouvir louvores', 11), 
('Cozinhar para a família com um som de fundo', 11),
('Pegar a estrada ouvindo histórias cantadas', 11),

('Óculos escuros e chinelo no pé', 12),
('Corrente pesada e tênis de marca', 12), 
('Boné de aba reta e roupas largas', 12),
('Caixinha de som potente e Juliet', 12);



INSERT INTO caracteristica (nome, fk_alternativa) VALUES
('Raggae', 9),
('Rap', 10),
('MPB', 11),
('Pop', 12),

('Rap', 13),
('Gospel', 14),
('Pop', 15),
('Funk', 16),

('Pop', 17), 
('Raggae', 18),
('Funk', 19),
('MPB', 20),

('Rap', 21),
('Pop', 22),
('Raggae', 23),
('Gospel', 24),

('Sertanejo', 25),
('Rap', 26),
('Gospel', 27), 
('Funk', 28),

('Sertanejo', 29),
('Pop', 30), ('Rap', 31), 
('Raggae', 32),

('Samba', 33),
('Trap', 34),
('MPB', 35),
('Sertanejo', 36),

('Samba', 37), 
('Trap', 38), 
('MPB', 39), 
('Sertanejo', 40),

('Samba', 41),
('Trap', 42),
('MPB', 43),
('Gospel', 44),

('Funk', 45),
('Gospel', 46), 
('Samba', 47), 
('Sertanejo', 48),

('Raggae', 49),
 ('Trap', 50),
 ('Trap', 51), 
 ('Funk', 52);


INSERT INTO estilo (estilo) VALUES 
('MPB'), ('Pop'), ('Funk'), ('Trap'), ('Samba'), 
('Gospel'), ('Raggae'), ('Sertanejo'), ('Rap');