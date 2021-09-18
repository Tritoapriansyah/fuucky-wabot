# Fuucky Wabot
<p style="text-align:center">
  <img src="./.github/rm/20210821_110622.jpg">
</p>

# Como instalar

<details>
<summary>Como instalar o Termux</summary>

### Clonagem
Digite o comando :

```sh
> apt-get update && apt-get install upgrade -y
> apt-get install git
> git clone https://github.com/fuucky/fuucky-wabot
```

### Installing Package & Dependencies
Type command :

```sh
> cd fuucky-wabot
> bash install.sh
```

### Start
Digite o comando :

```sh
> npm start
```

</details>

<details>
<summary>Como instalar no Ubuntu</summary>
Digite o comando :

```sh
> apt-get update
> apt-get install sudo -y
> sudo apt-get install git
> cd fuucky-wabot
```

### Installing Package & Dependencies

```sh
> sudo apt-get install nodejs -y
> sudo apt-get install wget -y
> sudo apt-get install libwebp-dev -y
> sudo apt-get install tesseract-ocr -y
> npm install && echo "[*] All dependencies have been installed, please run the command \"npm start\" to immediately start the script"
```

#### Alternative
This is an alternative command to install Package & Dependencies

```sh
sudo apt-get install nodejs wget libwebp-dev tesseract-ocr -y && npm install && echo "[*] All dependencies have been installed, please run the command \"npm start\" to immediately start the script"
```

### Start
digite o comando :

```sh
> npm start
```

</details>

<details>
<summary>Como instalar no Windows</summary>

#### Instalando Git
- Baixe o arquivo [aqui] (https://git-scm.com/download/win)
- Depois disso, execute o arquivo baixado como Administrador.
- Conclua a instalação.
- Verifique o `git`
- Agora que você instalou o Tesseract, verifique se está funcionando executando este comando para ver o número da versão::

```cmd
> git --version
```

#### Instalando Libwebp
- Baixe o arquivo [aqui] (https://storage.googleapis.com/downloads.webmproject.org/releases/webp/libwebp-1.2.1-windows-x64.zip).
- Extraia o arquivo para o caminho `C: \`.
- Renomeie a pasta extraída para `libwebp`.
- Execute o Prompt de Comando como Administrador.
- Execute este comando:

```cmd
> setx /m PATH "C:\libwebp\bin;%PATH%"
```

#### Instalando Tesseract
- Baixe o arquivo x64 [aqui] (https://s.id/vftesseract).
- Depois disso, execute o arquivo baixado como Administrador.
- Conclua a instalação.
- Execute o Prompt de Comando como Administrador.
- Execute este comando:
```cmd
> setx / m PATH "C: \ Arquivos de programas \ Tesseract-OCR;% PATH%"
```
Isso nos dará um retorno de chamada como `SUCCESS: o valor especificado foi salvo`.
- Agora que você instalou o Tesseract, verifique se está funcionando executando este comando para ver o número da versão:

```
> tesseract -version
```

#### Installing FFmpeg
- Download one of the available versions of FFmpeg by clicking [this link](https://www.gyan.dev/ffmpeg/builds/).
- Extract the file to `C:\` path.
- Rename the extracted folder to `ffmpeg`.
- Run Command Prompt as Administrator.
- Run this command:
```cmd
> setx /m PATH "C:\ffmpeg\bin;%PATH%"
```
It will give us a callback like `SUCCESS: specified value was saved`.

</details>

# Editing File 📝

## Editing [setting.json](https://github.com/moo-d/baileys-wabot/blob/main/lib/setting.json)
```json
{
  "prefix":"!",
  "ownernum": "19971389807",
  "removebgApiKey": "Your-ApiKey",
  "botname": "fuucky-wabot",
  "ownername": "fuucky",
  "pttmode": "true"
}
```

- `prefixo`: se você não quiser mudar o prefixo, você pode mudá-lo como quiser Exemplo:` "prefixo": "#" `.
- `ownernum`: 19971389807.
- `removebgApiKey`: RemoveBg ApiKey. Você deve fazer o login / inscrição primeiro [aqui] (https://www.remove.bg/upload). Então você pode obtê-lo [aqui] (https://www.remove.bg/api)
- `botname`: o nome do seu bot
- `ownername`: seu nome
- `pttmode`: Se você quiser usar` pttmode`, mude para `true`

## Editando bot de linguagem
Se você quiser alterar o idioma para inglês ou árabe, substitua `const txtlang = pt` por` eng` ou `arab`.

Example:

```js
const txtlang = pt
```

To:
```js
const txtlang = eng
```

# Como executar o bot 24 horas 🕓
Você pode executar bot 24 horas com o site [Replit] (replit.com)

Leia Replit [README.md] (https://github.com/fuucky/fuucky-wabot/blob/main/replit/README.md) para saber como ativar Replit Keep Alive e outros.

# Recursos

|      Sticker     | Yes |
|:----------------:|:---:|
| Sticker Maker    | ✔️  |
| Sticker To Image | ✔️  |

| News/Information | Yes |
|:----------------:|:---:|
| Covid-19 Help    | ✔️  |

|   Fun       | Yes |
|:-----------:|:---:|
| Meme (Indo) | ✔️  |

| Education | Yes |
|:---------:|:---:|
| Brainly   | ✔️  |

|     Anime/Manga     | Yes |
|:-------------------:|:---:|
| Random Anime (NSFW) | ✔️  |

|           Grupo           | Yes |
|:-------------------------:|:---:|
| Ver Lista de Adm          | ✔️  |
| Link do Grupo             | ✔️  |
| Responder Mensagem Falsa  | ✔️  |
| Check Level               | ✔️  |

|         Admin Group              | Yes |
|:--------------------------------:|:---:|
| Promover Membros                 | ✔️  |
| Rebaixar Membros                 | ✔️  |
| Add Members                      | ✔️  |
| Kick Members                     | ✔️  |
| Dar boas vindas aos membros      | ✔️  |
| Info Privada dos Grupos          | ✔️  |
| Mandar bot Sair do Grupo         | ✔️  |
| Fechar Grupo                     | ✔️  |
| Abrir Grupo                      | ✔️  |
| Excluir Mensagem do Bot          | ✔️  |
| Mudar Nome do Grupo              | ✔️  |
| Mudar Descrição do Grupo         | ✔️  |
| Definir permissão de NSFW        | ✔️  |
| Ativar Level                     | ✔️  |

|             Dono           | Yes |
|:---------------------------:|:---:|
| Mudar prefixo do bot        | ✔️  |
| Mudar foto de perfil do bot | ✔️  |
| Broadcast                   | ✔️  |
| Transmissão em Grupo        | ✔️  |
| Alterar MSG para PTT        | ✔️  |

|          Sem Categoria        | Yes |
|:-----------------------------:|:---:|
| WA-ME Link                    | ✔️  |
| Check Block List              | ✔️  |
| Video To MP 3                 | ✔️  |
| Set Command to Private/Public | ✔️  |

</details>

# Social Media 📱

## Discord
- Coming soon

## Grupo
* <a href=""><img alt="WhatsApp" src="https://img.shields.io/badge/WhatsApp%20Group-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"/></a>

# Thanks To:
- [`@fuucky`](https://github.com/fuucky/fuucky)
