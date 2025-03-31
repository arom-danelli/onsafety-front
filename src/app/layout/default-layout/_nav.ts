import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    name: 'Gestão de Pessoas',
    iconComponent: { name: 'cil-user' },
    children: [
      {
        name: 'Criar',
        url: '/gestao-pessoas/form',
        iconComponent: { name: 'cil-user-follow' }
      },
      {
        name: 'Listagem',
        url: '/gestao-pessoas/list',
        iconComponent: { name: 'cil-list' }
      }
    
    ]
  },
  {
    title: true,
    name: 'Links',
    class: 'mt-auto'
  },
  {
    name: 'Repo Backend',
    url: 'https://github.com/arom-danelli/onsafety-back',
    iconComponent: { name: 'cil-description' },
    attributes: { target: '_blank' }
  },
  {
    name: 'Repo Frontend',
    url: 'https://github.com/arom-danelli/onsafety-front.git',
    iconComponent: { name: 'cil-description' },
    attributes: { target: '_blank' }
  }
];
