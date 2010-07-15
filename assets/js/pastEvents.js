 $(document).ready(function(){
          $.ajax({
                        url: 'http://localhost:8080/turf/event/pastEvents',
                        dataType: 'jsonp',
                        success: function(data) {
                            $("#pastEvents").html(data.result.pastEvents)
                        }
                        });
      
 });
                        
                
