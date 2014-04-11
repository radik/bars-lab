Ext.define('Library.store.Autors', {
	extend: 'Ext.data.Store',
	model: 'Library.model.Autor',
	data: [
		{first_name: 'Ed', middle_name: 'Middle', last_name: 'Last'}
	]
});