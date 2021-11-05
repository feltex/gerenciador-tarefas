# Gerencidor de Tarefas

- Criar o Projeto em Angular
- Criar  um componente
- Explicando os arquivos html, css, spec e ts
- Listando as tarefas
- Configurando o CSS
- Operações sobre tarefas
    - Adicionar
    - Deletar
    - Concluir 
- Usando o LocalStorage


Assista o vídeo como o passo a passo para construir este projeto https://youtu.be/lWrjC83G7yI

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
