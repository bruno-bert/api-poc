# Adicionar documento

> ## Caso de sucesso

1. Recebe uma requisição do tipo **POST** na rota **/api/documents**
2. Valida se a requisição foi feita por um **usuário logado**
3. Valida dados obrigatórios **tipo de documento**, **nome da pasta**,**nome do documento**,  **caminho do arquivo do documento**
4. Valida se documento é do tipo **pdf, doc, docx**
5. Valida se **tipo de documento** está previamento criado
6. Se **nome da pasta** não for informado, incluir valor padrão **geral**
7. **Cria** um documento com os dados fornecidos (incluir **usuário logado** e **data de criação/atualização**)
8. Retorna **201**, com dados do documento criado

> ## Exceções

1. Retorna erro **404** se a API não existir
2. Retorna erro **403** se o usuário não estiver **logado**
3. Retorna erro **400** se campos não informados: **tipo de documento**, **nome do documento**,  **caminho do arquivo do documento**
4. Retorna erro **400** se **arquivo do documento** não for dos tipos permitidos: **pdf, doc, docx**
5. Retorna erro **400** se **tipo de documento** não estiver previamente criado
6. Retorna erro **500** se der erro ao tentar criar o documento

✅