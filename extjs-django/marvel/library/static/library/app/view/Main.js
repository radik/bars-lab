Ext.define('Lib.view.Main', {
  extend: 'Ext.container.Container',
  requires: [
    'Ext.grid.Panel',
    'Ext.tab.Panel',
    'Ext.button.Button',
    'Lib.view.NavigationTree'
  ],
  alias: 'widget.mainview',
  layout: {
    type: 'border',
    align: 'stretch'
  },
  items: [{
    xtype: 'navtree',
    region: 'west',
    width: 300
  }, {
    xtype: 'tabpanel',
    region: 'center',
    items: [{
      title: 'Жанры',
      xtype: 'grid',
      itemId: 'genres',
      store: 'Genre',
      columns: [{
        text: 'Название',
        dataIndex: 'title',
        flex: 1
      }],
      dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
          xtype: 'button',
          action: 'add',
          text: 'Добавить'
        }]
      }]
    }, { 
      title: 'Авторы',
      xtype: 'grid',
      itemId: 'authors',
      store: 'Author',
      columns: [{
        text: 'Имя',
        dataIndex: 'first_name',
        flex: 1
      }, {
        text: 'Фамилия',
        dataIndex: 'last_name',
        flex: 2
      }, {
        text: 'Отчество',
        dataIndex: 'middle_name',
        flex: 3
      }],
      dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
          xtype: 'button',
          action: 'add',
          text: 'Добавить'
        }]
      }]
    }]
  }]
});