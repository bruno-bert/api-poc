# Criar tipo de documento

> ## Caso de sucesso

1. Recebe uma requisição do tipo **POST** na rota **/api/document-type**
2. Valida se a requisição foi feita por um **admin**
3. Valida dados obrigatórios **descricao**
4. Valida range para  **descricao** entre 5 e 20
4. **Cria** um  tipo de documento
5. Retorna **201**, com dados do tipo de documento criado

> ## Exceções

1. Retorna erro **404** se a API não existir
2. Retorna erro **403** se o usuário não for admin
3. Retorna erro **400** se **descrição** não for fornecidas pelo client
4. Retorna erro **400** se **descrição** tiver menos de 5 ou mais de 20 caracteres
5. Retorna erro **400** se **descrição** já existir
6. Retorna erro **500** se der erro ao tentar criar o tipo de documento

✅