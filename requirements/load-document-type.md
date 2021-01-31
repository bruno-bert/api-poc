# Listar tipos de documento

> ## Caso de sucesso

1. ✅ Recebe uma requisição do tipo **GET** na rota **/api/document-type**
2. ✅ Valida se a requisição foi feita por um **usuário logado**
3. ✅ Retorna **204** se não tiver nenhum tipo de documento
4. ✅ Retorna **200** com os dados dos tipos de documento

> ## Exceções

1. ✅ Retorna erro **404** se a API não existir
2. ✅ Retorna erro **403** se não for um usuário logado
3. ✅ Retorna erro **500** se der erro ao tentar listar os tipos de documento