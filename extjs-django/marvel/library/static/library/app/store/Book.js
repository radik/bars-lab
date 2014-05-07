Ext.define('Lib.store.Book', {
  extend: 'Ext.data.Store',
  requires: ['Lib.model.Book'],
  model: 'Lib.model.Book',
  autoLoad: true
});
