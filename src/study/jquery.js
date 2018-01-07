function $(id) {
  var element = document.getElementById(id);
  return {
    on: function(eventName, callback) {
      element.addEventListener(eventName, function() {
        callback.call(element, {
          event: 'click'
        });
      });
      /*setTimeout(function() {
        var event = {
          type: 'click',
          x: 50,
          y: 100
        };
        callback(event);
      }, 1000);*/
    }
  }
}

$('btn').on('click', function(e){
  console.log(e);
  console.log(this);
});