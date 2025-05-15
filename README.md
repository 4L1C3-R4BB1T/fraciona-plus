## 🎓 Sobre

Aplicativo desenvolvido para o TCC intitulado "Desenvolvimento de um aplicativo móvel para auxiliar o ensino em frações matemáticas na educação fundamental baseado em gamificação".

O TCC completo pode ser conferido em [https://repositorio.ifes.edu.br/handle/123456789/5492](https://repositorio.ifes.edu.br/handle/123456789/5492).

---

## ⚙️ Como executar o projeto

Clone esse repositório:

```bash
git clone https://github.com/4L1C3-R4BB1T/fraciona-plus.git
```

Instale as dependências do projeto:

```bash
npm install
```

Crie o arquivo ```environment.ts``` em ```src\environments``` com a seguinte estrutura: 

```ts
export const environment = {
  production: false,
  firebaseConfig: { // configuração do firebase
    projectId: "",
    appId: "",
    storageBucket: "",
    apiKey: "",
    authDomain: "",
    messagingSenderId: "",
    measurementId: ""
  },
  apiUrl: "" // url onde está rodando a api backend
};
```

Execute o projeto:

```bash
ng serve
```

Acesse o projeto pelo link:

```bash
http://localhost:4200
```

---

## ⚙️ Build APK

❗Para fazer a build do APK é preciso ter a API backend online. É necessário também possuir o Android Studio.

Crie o arquivo ```environment.prod.ts``` em ```src\environments``` com a mesma estrutura do aquivo ```environment.ts```, porém em ```apiUrl``` com a url da API online.


Execute o comando:

```bash
npm run android-build
```

Será aberto o Android Studio. No menu superior, vá em ```Build > Build App Bundle(s) / APK(s) > Build APK(s)```.

![Build APK](https://github.com/4L1C3-R4BB1T/fraciona-plus/blob/feature/race-challenge/build_apk.png)

---

## 🎞️ Demonstração

https://github.com/user-attachments/assets/49460bca-ed69-40f0-826b-2f9ba32573cc


