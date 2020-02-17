export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e4a4a60d96359199c2aab75',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-vznirnhq',
                  apiId: 'c3065318-c705-4e4b-8315-c7e81ae35acf'
                },
                {
                  buildHookId: '5e4a4a60a48184c27289abfa',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-kzerm7yo',
                  apiId: '28917603-8cb7-4814-a610-03e9a35d61ac'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mmintel/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-kzerm7yo.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
