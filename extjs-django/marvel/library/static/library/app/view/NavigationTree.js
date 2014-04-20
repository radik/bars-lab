Ext.define('Lib.view.NavigationTree', {
  extend: 'Ext.tree.Panel',
  alias: 'widget.navtree',
  initComponent: function() {
    var me = this,
      store = Ext.create('Ext.data.TreeStore', {
        root: {
          text: 'Библиотека',
          expanded: true,
          children: [{
            text: "Жанры",
            leaf: true
          }, {
            text: "Авторы",
            leaf: true
          }]
        }
      });

    Ext.apply(me, {
      store: store
    });

    me.callParent(arguments);
  }
});