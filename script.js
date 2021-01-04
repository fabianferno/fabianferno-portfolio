$('#darkSwitch').click(function(){
    if($(this).prop("checked") == true){
        $('body').addClass("bg-dark");
        $('body').addClass("text-white");
    }
    else if($(this).prop("checked") == false){
        $('body').removeClass("bg-dark");
        $('body').removeClass("text-white");
    }
});


var typed = new Typed('.typed',{
    strings:["Super Skywalker","Fabian Ferno"],
    backSpeed: 100,
    typeSpeed: 100,
    loop:true,
  });