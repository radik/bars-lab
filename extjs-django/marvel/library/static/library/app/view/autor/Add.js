Ext.define('Library.view.autor.Add', {
    extend: 'Ext.window.Window',
    alias: 'widget.autoradd',

    title: 'Add new autor',
    layout: 'fit',
    autoShow: true,

    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                items: [
                    {
                        xtype: 'textfield',
                        name : 'first_name',
                        fieldLabel: 'FirstName',
                        style: 'margin: 5px'
                    },
                    {
                        xtype: 'textfield',
                        name : 'middle_name',
                        fieldLabel: 'MiddleName',
                        style: 'margin: 5px'
                    },
                    {
                        xtype: 'textfield',
                        name: 'last_name',
                        fieldLabel: 'LastName',
                        style: 'margin: 5px'
                    }
                ]
            }
        ];

        this.buttons = [
            {
                text: 'Save',
                action: 'save'
            },
            {
                text: 'Cancel',
                scope: this,
                handler: this.close
            }
        ];

        this.callParent(arguments);
    }
});