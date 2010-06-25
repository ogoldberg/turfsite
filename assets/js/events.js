 $(document).ready(function(){
          $.ajax({
                        url: 'events/todaysEvent.json',
                        dataType: 'json',
                        success: function(data) {
                            $("#todaysEvent").html(data.result.todaysEvent)
                        }
                        });
          $.ajax({
                        url: 'events/featuredEvents.json',
                        dataType: 'json',
                        success: function(data)  {
                            $("#featuredEvents").html(data.result.featuredEvents)
                        }
                        });
 });
                        
                
