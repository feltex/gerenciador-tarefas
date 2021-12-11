# Gerencidor de Tarefas
- Criar o Projeto em Angular
- Criar um componente
- Explicando os arquivos html, css, spec e ts
- Listando as tarefas
- Configurando o CSS
- Operações sobre tarefas
    - Adicionar
    - Deletar
    - Concluir 
- Usando o LocalStorage


Assista o vídeo como o passo a passo para construir este projeto 

- Como instalar o Angular https://youtu.be/G9mzNoqJJgw
- Criando um Gerenciador de Tarefas https://youtu.be/lWrjC83G7yI
- Aplicação no Docker https://youtu.be/m34C6Hz0qF4
- Deploy na AWS https://youtu.be/KdOAX3pd9jE
- Deploy na plataforma Heroku - https://youtu.be/bCS1hNdjiWY
- Usando uma API Java e Springboot - https://youtu.be/svv5MlMjupY


- Deploy da aplicação na Azure - https://youtu.be/trOfCPgk5zA


# Veja imagem do Sistema
![Gerenciador de Taredas](https://github.com/feltex/gerenciador-tarefas/blob/main/gerenciador-tarefas.png)



# Configuração do Docker


Criar a imagem docker

    docker build -t andrefelix/gerenciador-tarefas:v1 .

Publicar a imagem no DockerHub

    docker push andrefelix/gerenciador-tarefas:v1 

Rodando via Docker 

### Comando Docker 

    docker run -d --name gerenciador-tarefas -p 8099:80 andrefelix/gerenciador-tarefas:v1

### Comando Docker-compose

    docker-compose -f docker/docker-compose.yaml up -d
