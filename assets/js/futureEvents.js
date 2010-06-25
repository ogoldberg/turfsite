 $(document).ready(function(){
                    $.ajax({
                        url: 'http://bookablevenue.com/turf/event/futureEvents',
                        dataType: 'jsonp',
                        success: function(data)  {
                            $("#futureEvents").html(data.result.futureEvents)
                        }
                        });
                    });
