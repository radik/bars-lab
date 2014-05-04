Ext.define('Lib.store.Autor', {
  extend: 'Ext.data.Store',
  requires: ['Lib.model.Autor'],
  model: 'Lib.model.Autor',
  autoLoad: true
});