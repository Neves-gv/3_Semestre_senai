const documentacao = {
    openapi: '3.0.3',
    info: {
        title: 'API ordem de servicos',
        description: 'Documentação da API de ordens de serviços',
        version: '1.0.0',
    },
    servers: [
        {
            url: 'http://localhost:3000',
        },
    ],
    tags: [
        { name: 'Usuarios', description: 'Operações relacionadas aos usuários' },
        { name: 'Departamentos', description: 'Operações relacionadas aos departamentos' },
        { name: 'Ordens de Serviços', description: 'Operações relacionadas às ordens de serviços' },
    ],
    paths: {
        '/usuarios': {
            get: {
                tags: ['Usuarios'],
                summary: 'Listar usuários',
                responses: {
                    200: {
                        description: 'Dados obtidos com sucesso',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'array',
                                    items: { $ref: '#/components/schemas/Lista_Usuarios' },
                                },
                            },
                        },
                    },
                },
            },
            post: {
                tags: ['Usuarios'],
                summary: 'Criar um novo usuário',
                description: 'Endpoint para criar um novo usuário na base de dados',
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: { $ref: '#/components/schemas/Cadastro_Usuario' },
                        },
                    },
                },
                responses: {
                    201: {
                        description: 'Usuário criado com sucesso',
                        content: {
                            'application/json': {
                                schema: { $ref: '#/components/schemas/Usuario_Criado' },
                            },
                        },
                    },
                },
            },
        },
        '/usuarios/{id_usuario}': {
            put: {
                tags: ['Usuarios'],
                summary: 'Atualizar um usuário existente',
                parameters: [
                    { name: 'id_usuario', in: 'path', required: true, schema: { type: 'integer', example: 1 } },
                ],
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: { $ref: '#/components/schemas/Atualizacao_Usuario' },
                        },
                    },
                },
                responses: {
                    200: { description: 'Usuário atualizado com sucesso' },
                },
            },
        },
        '/departamentos': {
            get: {
                tags: ['Departamentos'],
                summary: 'Listar departamentos',
                responses: {
                    200: {
                        description: 'Dados obtidos com sucesso',
                        content: {
                            'application/json': {
                                schema: { type: 'array', items: { $ref: '#/components/schemas/Lista_Departamentos' } },
                            },
                        },
                    },
                },
            },
            post: {
                tags: ['Departamentos'],
                summary: 'Cadastrar novo departamento',
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: { $ref: '#/components/schemas/Cadastro_Departamento' },
                        },
                    },
                },
                responses: { 201: { description: 'Departamento criado com sucesso' } },
            },
        },
        '/departamentos/{id_departamento}': {
            put: {
                tags: ['Departamentos'],
                summary: 'Atualizar departamento',
                parameters: [{ name: 'id_departamento', in: 'path', required: true, schema: { type: 'integer' } }],
                requestBody: {
                    required: true,
                    content: { 'application/json': { schema: { $ref: '#/components/schemas/Cadastro_Departamento' } } },
                },
                responses: { 200: { description: 'Departamento atualizado com sucesso' } },
            },
        },
        '/ordens_servicos': {
            get: {
                tags: ['Ordens de Serviços'],
                summary: 'Listar ordens de serviços',
                responses: {
                    200: {
                        description: 'Dados obtidos com sucesso',
                        content: {
                            'application/json': {
                                schema: { type: 'array', items: { $ref: '#/components/schemas/Lista_Ordens_Servicos' } },
                            },
                        },
                    },
                },
            },
            post: {
                tags: ['Ordens de Serviços'],
                summary: 'Criar ordem de serviço',
                requestBody: {
                    required: true,
                    content: { 'application/json': { schema: { $ref: '#/components/schemas/Cadastro_Ordem_Servico' } } },
                },
                responses: { 201: { description: 'Ordem criada com sucesso' } },
            },
        },
        '/ordens_servicos/{id_ordem}': {
            put: {
                tags: ['Ordens de Serviços'],
                summary: 'Atualizar ordem de serviço',
                parameters: [{ name: 'id_ordem', in: 'path', required: true, schema: { type: 'integer' } }],
                requestBody: {
                    required: true,
                    content: { 'application/json': { schema: { $ref: '#/components/schemas/Cadastro_Ordem_Servico' } } },
                },
                responses: { 200: { description: 'Ordem atualizada com sucesso' } },
            },
        },
    },
    components: {
        schemas: {
            Lista_Usuarios: { type: 'object', properties: { id: { type: 'integer' }, nome: { type: 'string' }, email: { type: 'string' } } },
            Lista_Departamentos: { type: 'object', properties: { id: { type: 'integer' }, nome: { type: 'string' } } },
            Lista_Ordens_Servicos: { type: 'object', properties: { numero_ordem: { type: 'integer' }, titulo: { type: 'string' } } },
            Cadastro_Usuario: { type: 'object', required: ['nome', 'email', 'senha'], properties: { nome: { type: 'string' }, email: { type: 'string' }, senha: { type: 'string' } } },
            Atualizacao_Usuario: { type: 'object', properties: { nome: { type: 'string' }, email: { type: 'string' }, senha: { type: 'string' } } },
            Usuario_Criado: { type: 'object', properties: { id: { type: 'integer' }, nome: { type: 'string' } } },
            Cadastro_Departamento: { type: 'object', required: ['nome'], properties: { nome: { type: 'string' }, descricao: { type: 'string' } } },
            Cadastro_Ordem_Servico: { type: 'object', required: ['numero_ordem', 'titulo', 'id_usuario', 'id_departamento'], properties: { numero_ordem: { type: 'integer' }, titulo: { type: 'string' }, descricao: { type: 'string' }, prioridade: { type: 'string' }, status: { type: 'string' }, data: { type: 'string' }, id_usuario: { type: 'integer' }, id_departamento: { type: 'integer' } } }
        },
    },
};

export default documentacao;