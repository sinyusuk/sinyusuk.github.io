var Link = {
    setColor:function (color){
        var alist = document.querySelectorAll('a');
        var i = 0;
        while(i < alist.length){
            alist[i].style.color = color;
            i = i+1;
        }
    }
}

var Body ={
    setColor:function (color){
        document.querySelector('body').style.color = color;
    },
    setBackgroundColor:function (color){
        document.querySelector('body').style.backgroundColor = color;
    }
}

function setColorMode(self){
    var target = document.querySelector('body');
    if(self.value === 'night'){
        Body.setBackgroundColor('black');
        Body.setColor('black');
        self.value = 'day';

        Link.setColor('white');
    }
    else{
        Body.setBackgroundColor('white');
        Body.setColor('white');
        self.value = 'night';

        Link.setColor('blue');
    }
    
}
    

function init(){

};
init();