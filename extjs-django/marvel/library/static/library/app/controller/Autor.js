Ext.define('Lib.controller.Autor', {
  extend: 'Ext.app.Controller',
  models: ['Autor'],
  stores: ['Autor'],
  views: ['autor.EditWindow', 'Main'],
  refs: [{
    selector: 'mainview #autors',
    ref: 'autorsGrid'
  }],

  init: function() {
    var me = this;

    me.control({
      '#autors button[action=addAutor]': {
        click: me.onAddAutorBtnClick
      },
      'autoritwin button[action=saveAutor]': {
        click: me.onSaveAutorBtnClick
      }
    });

    me.callParent(arguments);
  },

  onAddAutorBtnClick: function(btn) {
    Ext.create('Lib.view.autor.EditWindow').show();
  },

  onSaveAutorBtnClick: function(btn) {
    var me = this,
      form = btn.up('form'),
      record;
    if (form.isValid()) {
      record = Ext.create('Lib.model.Autor', form.getValues());
      record.save({
        callback: function(records, operation, success) {
          if (success) {
            me.getAutorsGrid().getStore().load();
            btn.up('window').close();
          } else {
            Ext.MessageBox.alert('Ошибка!', 'Произошла ошибка при сохранении.');
          }
        }
      });
    }
  }
});