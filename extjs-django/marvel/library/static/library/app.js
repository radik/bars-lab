Ext.application({
  name: 'Lib',
  appFolder: '/static/library/app',
  controllers: ['Main', 'Genre', 'Autor'],
  views: ['Main'],
  models: ['Genre', 'Autor'],

  launch: function() {
    Ext.create('Ext.container.Viewport', {
      layout: 'fit',
      items: {
        xtype: 'mainview'
      }
    });
  }
});