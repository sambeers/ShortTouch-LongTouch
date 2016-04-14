(function($,w){
  $(w).on("mousedown",function(){
    console.log("short touch");
    w.t=setTimeout(function(){
      console.log("long touch");
    },2500);
  });
  $(w).on("mouseup",function(){
    clearTimeout(w.t);
  });
  $(w).contextmenu(function(e){
    e.preventDefault();
    return false;
  });
})(jQuery,window)
