exports.loginpath = Promise.resolve({
  code: 20000,
  data: [
    {
      path: '/sddd',
      src: 'Layout',
      redirect: '/sddd/addroutertest',
      children: [
        {
          path: 'addroutertest',
          name: 'addroutertest',
          src: 'addroutertest',
          meta: { title: 'addroutertest', icon: 'user', login: true }
        }
      ]
    },
    {
      path: '/Temporary',
      src: 'Layout',
      children: [
        {
          path: 'Temporary1',
          name: 'Temporary',
          src: 'Temporary',
          meta: { title: 'Temporary', icon: 's-ticket' }
        }
      ]
    }
  ]
});
