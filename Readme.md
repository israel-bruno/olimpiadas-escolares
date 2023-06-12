## Olimpiadas escolares

### Requisitos para rodar o projeto

1 - Docker e docker compose -> https://docs.docker.com/desktop/install/windows-install/

### Como rodar o projeto:

    1 - Clonar repositório
        Comando: git clone https://github.com/israel-bruno/olimpiadas-escolares.git

    2 - Rodar o comando docker-compose up -d

### Como testar os endpoints:

Url base: http://localhost:3000

    #### Metodo 1 (Client http)

    1 - Baixar algum client http (Postman / Insomnia /Httpie etc.)

    2 - Configurar uma requisição para um endpoint

    3 - Enviar requisição

    Tutorial: https://www.youtube.com/watch?v=uImHd39Rmyg

    ### Metodo 2 - Usar o axios (React Native)

    1 - Instalar axios
       npm i axios

    Executar o codigo abaixo:

    Exemplo:

        const axios = require('axios')

        axios
        .post('http://localhost:3000/login', {
            username: 'teste',
            password: '123',
        })
        .then((response) => console.log(response.data))
