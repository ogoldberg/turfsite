var pbar3 = new Ext.ProgressBar({
        id:'pbar3',
        width:300,
        renderTo:'p3'
    });
    pbar3.on('update', function(val){
        //You can handle this event at each progress interval if
        //needed to perform some other action
        Ext.fly('p3text').dom.innerHTML += '.';
    });
    var btn3 = Ext.get('btn3');
    btn3.on('click', function(){
        Ext.fly('p3text').update('Working');
        btn3.dom.disabled = true;
        pbar3.wait({
            interval:200,
            duration:5000,
            increment:15,
            fn:function(){
                btn3.dom.disabled = false;
                Ext.fly('p3text').update('Done');
            }
        });
    });
