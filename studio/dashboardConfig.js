export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
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
                  buildHookId: '5f39ea181c84894521facd06',
                  title: 'Sanity Studio',
                  name: 'church-of-the-nativity-studio',
                  apiId: '7b7c5abd-a071-4c89-a939-bf8bb690b867'
                },
                {
                  buildHookId: '5f39ea18a068ceb9ed28bdbc',
                  title: 'Blog Website',
                  name: 'church-of-the-nativity',
                  apiId: '48b51b52-06fd-492d-8a2c-3d6f35542360'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/RawleSpringer/church-of-the-nativity',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://church-of-the-nativity.netlify.app', category: 'apps'}
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
