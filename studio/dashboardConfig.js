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
                  buildHookId: '5ffa406bfce2f3e0b9e93abf',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-idhgfuv7',
                  apiId: 'f8fec8e4-bd76-470b-ac34-edc6a1bb6b0b'
                },
                {
                  buildHookId: '5ffa406beb91b7cfb228e0ae',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-gq54fji7',
                  apiId: 'f0709859-cad3-4744-88f4-da93af89e5bb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/guptaofficial17/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-gq54fji7.netlify.app', category: 'apps'}
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
