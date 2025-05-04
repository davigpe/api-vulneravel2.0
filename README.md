# API-Vulnerável - Projeto de Estudo de Pentesting em Aplicações Node.js (Versão 2.0 - Segura)

Esta é a segunda versão do projeto API-Vulnerável, agora aprimorada para corrigir as vulnerabilidades encontradas na versão 1.0.  
Foram implementadas práticas de segurança para mitigar ataques como **NoSQL Injection**, **XSS**, e **CSRF**.  
Além disso, a API agora conta com sistema de autenticação e autorização baseado em **JWT (JSON Web Tokens)** e criptografia de senhas com **bcrypt**.

---

## 📌 Instalação das Dependências

```bash
npm install
```

ou

```bash
yarn install
```

---

## 🚀 Como Rodar a Aplicação Localmente

1. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```
PORT=3000
MONGODB_URI=mongodb+srv://admin:adminsenha@cluster0.ddytvld.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=sua_chave_secreta
```

2. Inicie o servidor:

```bash
node app.js
```

A aplicação estará disponível em:

```
http://localhost:3000
```

---

## 📚 Rotas Disponíveis

### Registro de Usuário

**POST** `/register`

```json
{
  "username": "novoUsuario",
  "email": "email@exemplo.com",
  "password": "senha123"
}
```

**Proteções implementadas**:
- Senha é criptografada com bcrypt.
- Dados são validados.

---

### Login de Usuário

**POST** `/login`

```json
{
  "email": "email@exemplo.com",
  "password": "senha123"
}
```

**Resposta**:

```json
{
  "token": "seu_token_jwt"
}
```

O token deve ser usado no cabeçalho `Authorization` para rotas protegidas:

```
Authorization: Bearer seu_token_jwt
```

---

### Listar Todos os Usuários

**GET** `/users`

**Proteção**:
- Apenas usuários autenticados podem acessar.

---

### Atualizar Usuário

**PUT** `/users/:id`

```json
{
  "username": "usuarioAtualizado"
}
```

**Proteção**:
- Apenas usuários autenticados podem acessar.
- Dados validados.

---

### Deletar Usuário

**DELETE** `/users/:id`

**Proteção**:
- Apenas usuários autenticados podem acessar.

---

## 🔐 Proteções Implementadas

### ✅ NoSQL Injection

- Validação e sanitização de todas as entradas com `express-validator`.

### ✅ XSS (Cross Site Scripting)

- Sanitização de entradas para impedir que scripts sejam armazenados.
- Uso do Helmet para adicionar cabeçalhos HTTP que previnem ataques XSS.

### ✅ CSRF (Cross Site Request Forgery)

- Utilização de **JWT no cabeçalho Authorization** → como o token não é armazenado em cookies, ataques CSRF são mitigados.

### ✅ Senhas

- Criptografadas com bcrypt antes de serem armazenadas.

### ✅ Boas Práticas Gerais

- Uso do `helmet` para adicionar cabeçalhos de segurança.
- Proteção das rotas PUT, DELETE e GET com autenticação.

---

## 📄 Relatórios

### 📌 Sumário Executivo

Esta versão da API foi aprimorada para corrigir as vulnerabilidades anteriormente demonstradas.  
Com a adoção de autenticação JWT, validação e sanitização de entradas, criptografia de senhas e cabeçalhos de segurança, a aplicação agora segue boas práticas para mitigar ameaças comuns em ambientes web.

---

### 📌 Relatório Técnico

| Vulnerabilidade | Correção aplicada |
|-----------------|------------------|
| NoSQL Injection | Validação e sanitização com express-validator |
| XSS | Sanitização de entradas e uso de Helmet |
| CSRF | Autenticação com JWT → proteção natural contra CSRF |
| Senhas | Criptografadas com bcrypt |
| Acesso não autorizado | Proteção de rotas com JWT |

---

## 👨‍💻 Autores

- Andressa Lopes
- Davi Pereira
- Gustavo Marcelino
- Rebeca Lara
- Stefani Santana

