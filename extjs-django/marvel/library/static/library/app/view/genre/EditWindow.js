Ext.define('Lib.view.genre.EditWindow', {
  extend: 'Ext.window.Window',
  requires: [
    'Ext.button.Button',
    'Ext.form.field.Text'
  ],
  width: 400,
  height: 300,
  closeAction: 'destroy',
  items: [{
    xtype: 'form',
    items: [{
      xtype: 'textfield',
      name: 'title'
    }, {
      xtype: 'button',
      text: 'Сохранить'
    }]
  }]
});