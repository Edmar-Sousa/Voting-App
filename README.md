# Voting App
<p>
Voting app é um sistema web feito em Vue3 e Firebase. No app é possivel criar votações e compartilhar o link para 
os participantes da votação. Além disso é possivel encerrar ou re-abrir a votação a qualquer momento. 
Quando uma votação é encerrada o resultado é compartilhado com os participantes.
</p>


## design
![gif-mostrando-o-app](https://github.com/Edmar-Sousa/Voting-App/blob/master/img/voting-app.gif)

## fluxograma
![fluxograma-do-app](https://github.com/Edmar-Sousa/Voting-App/blob/master/img/fluxograma.png)

## Tecnologias usadas
- Vite
- Vue 3
- Firebase
- HTML/CSS/JavaScript

## Como executar o projeto
<p>
É necessário criar um app no cosole do firebase, apos isso altere os valores das variaveis a 
seguir, de acordo com o seu app do firebase, no arquivo.
</p>

` src/services/firebase/index.ts `
```typescript
const firebaseConfig : FirebaseOptions = {
    apiKey: "AIzaSyAmBQ7ijasGVaLhZ0mu4aWO3ZIGhM70FfE",
    authDomain: "voting-app-48e87.firebaseapp.com",
    projectId: "voting-app-48e87",
    storageBucket: "voting-app-48e87.appspot.com",
    messagingSenderId: "855882360930",
    appId: "1:855882360930:web:461465789455536fae493b",
    databaseURL: 'https://voting-app-48e87-default-rtdb.firebaseio.com/'
};
```

```bash
  # Clone o projeto para sua maquina local
  git clone https://github.com/Edmar-Sousa/Voting-App.git
  
  # No diretorio do projeto
  cd voting-app
  
  # Inicie a instalação das dependências com npm ou yarn
  npm install
  
  # Por fim basta executar o servirdor de desenvolvimento
  npm run dev
```

## Deploy
[link para o app](https://voiting-app.herokuapp.com/)

## Author
- Edmar Sousa. <br><br>
[![linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/edmar-sousa-9666b0201/)
[![github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Edmar-Sousa)
