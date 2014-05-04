Ext.define('Library.controller.Autors', {
    extend: 'Ext.app.Controller',
    views: [
        'autor.List',
        'autor.Add'
    ],
    stores: [
    	'Autors'
    ],
    models: [
    	'Autor'
    ],

    init: function() {
        this.control({
            'autoradd button[action=save]' : {
                click : this.addAutor
            }
        });
    },

    addAutor: function(button) {
        var win = button.up('window'),
            form = win.down('form'),
            values = form.getValues();

            console.log(values);
    }
});