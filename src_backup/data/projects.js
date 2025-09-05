// src/data/projects.js

export const PROJECT_TYPES = {
    SITE: 'site',
    ECOM: 'ecommerce',
    SISTEMA: 'sistema',
    JOGO: 'jogo',
  }
  
  export const projects = [
    {
      id: 'pix2path',
      title: 'Pix2Path — Editor Vetorial Interativo',
      type: PROJECT_TYPES.SISTEMA,
      description: 'Sistema: Editor vetorial interativo bidirecional para criação/edição de caminhos.',
      url: 'https://www.pix2path.com.br/',
      cover: 'https://i.pinimg.com/1200x/36/c7/e5/36c7e5c3c9de5e411b8a7bdf2b859eaf.jpg',
      tags: ['Editor', 'Interativo', 'Sistema'],
    },
    {
      id: 'eskimo',
      title: 'Eskimo Chapecó',
      type: PROJECT_TYPES.ECOM,
      description: 'Sistema de e-commerce modular com área administrativa.',
      url: 'https://www.eskimochapeco.com.br',
      cover: 'https://i.pinimg.com/1200x/cf/15/dc/cf15dc35fa6649ffc496a97cbe50b5f2.jpg',
      tags: ['E-commerce', 'Admin'],
    },
    {
      id: 'refugio',
      title: 'Refúgio Natural',
      type: PROJECT_TYPES.SITE,
      description: 'Um refúgio natural para quem busca liberdade, natureza e aventura ao ar livre.',
      url: 'https://site-6-six.vercel.app/',
      cover: 'https://i.pinimg.com/1200x/5c/b6/33/5cb633c64b98aee6f60d737d132edc56.jpg',
      tags: ['Ecoturismo', 'Landing'],
    },
    {
      id: 'pinguini',
      title: 'Jogo Pinguini',
      type: PROJECT_TYPES.JOGO,
      description: 'Jogo casual (detalhes e demo em breve).',
      url: null,
      cover: 'https://i.pinimg.com/1200x/b8/c6/e9/b8c6e98cf923bd1b7b27b00bc24ffd25.jpg',
      tags: ['Game'],
    },
    {
      id: 'funcoes',
      title: 'Funções para Sites',
      type: PROJECT_TYPES.SITE,
      description: 'Demonstração de funcionalidades para sites.',
      url: 'https://site-2-one-rose.vercel.app/',
      cover: 'https://i.pinimg.com/1200x/f1/e1/23/f1e1234c38a29e9be50e0fc6685a92de.jpg',
      tags: ['Demo', 'Features'],
    },
  ]
  