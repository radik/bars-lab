Ext.define('Lib.controller.Book', {
  extend: 'Ext.app.Controller',
  models: ['Book'],
  stores: ['Book'],
  views: ['book.EditWindow', 'Main'],
  refs: [{
    selector: 'mainview #books',
    ref: 'booksGrid'
  }],

  init: function() {
    var me = this;

    me.control({
      '#books button[action=add]': {
        click: me.onAddBookBtnClick
      },
      'bookeditwin button[action=save]': {
        click: me.onSaveBookBtnClick
      }
    });

    me.callParent(arguments);
  },

  onAddBookBtnClick: function(btn) {
    Ext.create('Lib.view.book.EditWindow').show();
  },

  onSaveBookBtnClick: function(btn) {
    var me = this,
      form = btn.up('form'),
      record;
    if (form.isValid()) {
      record = Ext.create('Lib.model.Book', form.getValues());
      record.save({
        callback: function(records, operation, success) {
          if (success) {
            me.getBooksGrid().getStore().load();
            btn.up('window').close();
          } else {
            Ext.MessageBox.alert('Ошибка!', 'Произошла ошибка при сохранении.');
          }
        }
      });
    }
  }
});