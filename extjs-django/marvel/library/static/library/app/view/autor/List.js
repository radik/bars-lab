Ext.define('Library.view.autor.List' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.autorlist',

    title: 'Autors',
    store: 'Autors',
    dockedItems: {
        xtype: 'toolbar',
        dock: 'top',
        items: {
        text: 'Добавить',
        handler: function(){
            var view = Ext.widget('autoradd');

            view.down('form');
        }
    }
    },

    initComponent: function() {
        this.store = {
            fields: ['first_name', 'middle_name', 'last_name'],
            data  : [
                {first_name: 'Ed',    middle_name: 'ed@sencha.com', last_name: 'Last'},
                {first_name: 'Tommy', middle_name: 'tommy@sencha.com', last_name: 'Last'}
            ]
        };

        this.columns = [
            {header: 'FisrtName',  dataIndex: 'first_name',  flex: 1},
            {header: 'MiddleName', dataIndex: 'middle_name', flex: 1},
            {header: 'LastName', dataIndex: 'last_name', flex: 1}
        ];

        this.callParent(arguments);
    }
});