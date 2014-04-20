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
          text: 'Добавить'
        }]
      }]
    }]
  }]
});