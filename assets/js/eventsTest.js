 $(document).ready(function(){
          $.ajax({
                        url: 'http://localhost:8080/turf/event/todaysEvent',
                        dataType: 'jsonp',
                        success: function(data) {
                            $("#todaysEvent").html(data.result.todaysEvent)
                        }
                        });
          $.ajax({
                        url: 'http://localhost:8080/turf/event/featuredEvents',
                        dataType: 'jsonp',
                        success: function(data)  {
                            $("#featuredEvents").html(data.result.featuredEvents)
                        }
                        });
 });
                        
                
