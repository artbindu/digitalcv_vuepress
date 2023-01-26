module.exports = {
    title: 'Biswasindhu Mandal',
    description: 'A passionate Full Stack developer from India',
    themeConfig: {
      nav: [
        { text: 'DigitalCV', link: '/digitalcv/' }
      ],
      sidebar: [
        {
          title: 'DigitalCV',
          collapsable: false,
          children: [
            ['/digitalcv/about', 'About'],
            ['/digitalcv/experience', 'Experience'],
            ['/digitalcv/education', 'Education'],
            ['/digitalcv/skills', 'Skills'],
            ['/digitalcv/Project', 'Project'],
            ['/digitalcv/activities', 'Activities'],
            ['/digitalcv/blogs', 'Blog & Article']
          ]
        }
      ]
    }
  }