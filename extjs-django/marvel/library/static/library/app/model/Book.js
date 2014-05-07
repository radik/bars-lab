Ext.define('Lib.model.Book', {
  extend: 'Ext.data.Model',
  idProperty: 'id',
  fields: [{
    name: 'genre',
    type: 'models.Genre'
  }, {
    name: 'authors',
    type: 'models.Author'
  }, {
    name: "description",
    type: 'string'
  }, {
      name: "title",
      type: 'string'
  }],
  proxy: {
    type: 'rest',
    url: '/library/books/',
    reader: {
      type: 'json',
      root: 'results'
    }
  }
});