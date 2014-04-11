Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'Library',

    appFolder: '/static/library/app',
    controllers: [
        'Autors'
    ],

    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: {
                    xtype: 'autorlist' 
                }
        });
    }
});