module.exports = {
    title: 'VuePress',
    description: 'A demo documentation using VuePress',
    themeConfig: {
      nav: [
        { text: 'Counter', link: '/counter/' },
        { text: 'DigitalCV', link: '/digitalcv/' }
      ],
      sidebar: [
        {
          title: 'Counter',
          collapsable: false,
          children: [
            ['/counter/usage', 'Usage'],
            ['/counter/see-also', 'See Also']
          ]
        },
        {
          title: 'DigitalCV',
          collapsable: false,
          children: [
            ['/digitalcv/about', 'About'],
            ['/digitalcv/experience', 'Experience'],
            ['/digitalcv/education', 'Education'],
            ['/digitalcv/skills', 'Skills'],
            ['/digitalcv/Project', 'Project']
          ]
        }
      ]
    }
  }