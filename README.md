# Controle de Gastos 💰

Um aplicativo mobile simples e eficiente para gerenciamento de despesas pessoais. Desenvolvido com **React Native** e **Expo**, utilizando banco de dados local com `expo-sqlite` para garantir que seus dados fiquem salvos direto no seu dispositivo de forma rápida e segura.

## 🛠️ Tecnologias Utilizadas
- **React Native** / **Expo**
- **Expo SQLite** (Banco de dados local)
- **React Navigation** (Navegação entre telas)

## 📋 Pré-requisitos
Antes de começar, você precisará ter as seguintes ferramentas instaladas na sua máquina:
- [Node.js](https://nodejs.org/) (recomendado versão LTS)
- [Java 17 (JDK 17)](https://learn.microsoft.com/pt-br/java/openjdk/download#openjdk-17) - *Importante: Versões mais novas do Java (como a 23) causam incompatibilidade na compilação do Android.*
- [Android Studio](https://developer.android.com/studio) configurado com um emulador ou dispositivo físico conectado.

## 🚀 Como instalar e executar

**1. Instale as dependências do projeto:**
Abra o terminal na pasta do projeto e rode o comando:
```bash
npm install
```

**2. Para rodar no Emulador / Dispositivo físico (Build Nativa):**
Este comando irá compilar o aplicativo para Android e instalá-lo automaticamente no seu emulador ou celular conectado via USB/Wi-Fi:
```bash
npx expo run:android
```
> *Dica: A primeira compilação pode demorar alguns minutos pois o sistema fará o download das dependências do Gradle e do Android.*

**3. Para rodar de forma leve e rápida via Expo Go:**
Se quiser apenas testar a interface pelo aplicativo do Expo Go:
```bash
npx expo start -c
```
*(O `-c` garante que o cache do servidor comece limpo para evitar erros antigos).*
