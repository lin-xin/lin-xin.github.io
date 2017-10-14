layui.use('element', function () {
    var element = layui.element(); 
    element.on('nav', function (elem) {
        var index = parseInt(elem[0].getAttribute('data-index'));
        if(index === -1) {
            return false;
        }
        var main = document.querySelectorAll('.schart-main');
        for(var i = 0, l = main.length; i < l; i++) {
            if(i === index){
                main[i].style.display = 'block';
            }else{
                main[i].style.display = 'none';
            }
        }
    });
});
layui.use('code', function(){
    layui.code({
        encode: true,
        about: false
    });
});