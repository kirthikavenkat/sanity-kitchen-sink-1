export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60dafac3d18596add82407b3',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-bzrb5j4o',
                  apiId: 'ebc54cb2-9ff2-40a8-99f8-bc75fa87a083'
                },
                {
                  buildHookId: '60dafac3fc0719a03660aaa9',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-cnhbfpgh',
                  apiId: 'a8e98633-96c2-4bd8-bb38-a6afb1362ae5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Gayathiri00/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-cnhbfpgh.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
