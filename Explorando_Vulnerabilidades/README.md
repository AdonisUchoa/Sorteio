# Sorteio de Email - README

Este projeto é um sorteio de email simples desenvolvido com HTML, CSS e JavaScript. No entanto, durante a análise do código, foram identificadas algumas possíveis vulnerabilidades que devem ser corrigidas para garantir a segurança adequada do aplicativo.

## Vulnerabilidades Identificadas

### 1. Injeção de código
O campo de texto `emailList` permite que os usuários insiram emails manualmente. No entanto, não há uma validação adequada implementada, o que pode permitir a injeção de código malicioso. É necessário implementar uma validação rigorosa para evitar a execução de código não autorizado.

### 2. Upload de arquivo inseguro
O campo de upload de arquivo `fileInput` permite que os usuários anexem um arquivo .xlsx. No entanto, não há uma filtragem ou validação adequada implementada para verificar a segurança do arquivo enviado. É fundamental implementar uma verificação de tipo de arquivo adequada e realizar uma análise de segurança no arquivo antes de processá-lo.

### 3. Falta de sanitização de dados
Os nomes dos ganhadores são exibidos diretamente na página sem passar por um processo de sanitização adequado. Isso pode permitir a inserção de caracteres especiais ou código malicioso pelos atacantes. É essencial aplicar uma sanitização adequada nos dados antes de exibi-los na página para evitar ataques de Cross-Site Scripting (XSS) e outros problemas relacionados.

### 4. Cross-Site Scripting (XSS)
Se os nomes dos ganhadores não forem devidamente sanitizados, isso pode levar a ataques de XSS. Atacantes podem explorar essa vulnerabilidade para inserir scripts maliciosos que serão executados no navegador dos usuários. É crucial implementar a sanitização correta para evitar esse tipo de ataque.

### 5. Falta de controle de acesso
O código atual não implementa nenhum mecanismo de autenticação ou controle de acesso. Isso significa que qualquer pessoa que acesse o site pode realizar o sorteio ou visualizar o nome do ganhador. Recomenda-se implementar mecanismos de autenticação adequados para restringir o acesso e garantir que apenas usuários autorizados possam realizar ações no aplicativo.

## Medidas de Segurança Recomendadas

- Implementar uma validação rigorosa para as entradas do usuário, incluindo os emails inseridos manualmente.
- Realizar uma verificação cuidadosa do tipo de arquivo e analisar os arquivos enviados pelos usuários.
- Aplicar sanitização adequada aos dados antes de exibi-los na página para evitar ataques de XSS.
- Implementar mecanismos de autenticação e controle de acesso para restringir o acesso ao aplicativo.
- Manter-se atualizado com as melhores práticas de segurança web e aplicar patches de segurança regularmente.

## Aviso

Este projeto serve apenas como exemplo e não deve ser implantado em um ambiente de produção sem a implementação de medidas de segurança adequadas.

