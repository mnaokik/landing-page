# PRD - Landing Page Dr. Lucas Mecatti - Direito Previdenciário

## Problema Original
Criação de landing page profissional para advogado especialista em direito previdenciário, replicando exatamente o design e estrutura de https://previdenciariomecatti.base44.app/

## Informações do Cliente
- **Nome**: Dr. Lucas Mecatti
- **Especialidade**: Direito Previdenciário e Tributário
- **Experiência**: 20+ anos
- **Contato**: (19) 3542-5237 / WhatsApp: 551935425237
- **Email**: mecatti@rmnadvogados.com
- **Atendimento**: 100% online, todo território nacional

## Design Implementado
- **Paleta de cores**: Dark theme com slate-900 (#0f172a) de fundo
- **Cor de destaque**: Amber-500 (#f59e0b) para CTAs e elementos importantes
- **Tipografia**: Sans-serif, títulos em negrito
- **Estilo**: Profissional, tradicional, com cards glassmorphism

## Estrutura da Landing Page

### 1. Header (Fixed)
- Logo/Nome do advogado
- Menu de navegação: Sobre, Serviços, Como Funciona, FAQ, Contato
- Botão WhatsApp (amarelo/dourado)
- Scroll fixo com fundo dark

### 2. Hero Section
- Badge "Advocacia Especializada em Direito Previdenciário"
- Título principal com palavra "Previdenciários" em amarelo
- Subtítulo descritivo
- 2 CTAs: "Solicite sua Análise Gratuita" (amarelo) e telefone (outline branco)
- 4 stats cards: 20+ anos, 3 especializações, 1000+ clientes, 100% online

### 3. Sobre o Dr. Lucas Mecatti
- Foto profissional com overlay de informações
- Badge "SOBRE"
- Biografia completa
- 4 highlights com ícones: Atuação Nacional, Atendimento Personalizado, Experiência Comprovada, Você em Boas Mãos
- Citação em destaque

### 4. Serviços (12 serviços)
- Fundo dark (slate-900)
- Cards com glassmorphism effect
- Ícones dourados
- Grid 3 colunas
- Serviços: Aposentadorias (tempo, idade, especial, deficiência, rural, professor), Revisão, Auxílios, BPC/LOAS, Pensão, Isenção IR, Planejamento

### 5. Como Funciona (4 etapas)
- Fundo branco
- 4 steps numerados com círculos amarelos
- Layout horizontal

### 6. Diferenciais (6 cards)
- Fundo dark
- Cards glassmorphism
- 6 diferenciais

### 7. FAQ (8 perguntas)
- Fundo branco
- Accordion com shadcn UI
- Borda amber no hover

### 8. Contato
- Fundo dark
- 2 colunas: Informações + Formulário
- Integrado com backend MongoDB
- Formulário: nome, email, telefone, mensagem
- Lista de benefícios da análise gratuita

### 9. Footer
- Links rápidos
- Serviços principais
- Informações de contato
- Redes sociais

## API Contracts

### POST /api/contact/
```json
Request:
{
  "name": "string (2-200 chars)",
  "email": "string (email format)",
  "phone": "string (8-20 chars)",
  "message": "string (10-2000 chars)"
}

Response (201):
{
  "id": "uuid",
  "name": "string",
  "email": "string",
  "phone": "string",
  "message": "string",
  "created_at": "datetime",
  "status": "pending"
}
```

### GET /api/contact/
```json
Response (200):
[
  {
    "id": "uuid",
    "name": "string",
    "email": "string",
    "phone": "string",
    "message": "string",
    "created_at": "datetime",
    "status": "pending|contacted|resolved"
  }
]
```

### GET /api/contact/{id}
### PATCH /api/contact/{id}
### DELETE /api/contact/{id}

## Stack Tecnológica
- **Frontend**: React 19, TailwindCSS, shadcn/UI, Axios
- **Backend**: FastAPI, Python 3.11
- **Database**: MongoDB (Motor async driver)
- **Deployment**: Supervisor, ambiente Docker

## Implementado
✅ Header fixo com navegação dark theme
✅ Hero section com design exato da referência
✅ Seção Sobre com foto e biografia
✅ 12 Serviços em cards dark glassmorphism
✅ Seção Como Funciona (4 etapas)
✅ Seção Diferenciais (6 cards)
✅ FAQ com accordion (8 perguntas)
✅ Formulário de contato integrado com backend
✅ Footer completo
✅ Backend completo com CRUD de contatos
✅ MongoDB integration
✅ Responsive design
✅ Smooth scroll navigation
✅ WhatsApp CTAs

## Próximos Passos Sugeridos
- [ ] Adicionar animações de entrada (scroll animations)
- [ ] Implementar analytics (Google Analytics / Meta Pixel)
- [ ] SEO optimization (meta tags, structured data)
- [ ] Adicionar depoimentos de clientes
- [ ] Blog section para conteúdo sobre direito previdenciário
- [ ] Sistema de agendamento online
- [ ] Integração com email marketing
- [ ] Chat ao vivo ou chatbot

## Data de Criação
09/02/2026
