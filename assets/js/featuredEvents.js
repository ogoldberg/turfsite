 $(document).ready(function(){
                    $.ajax({
                        url: 'http://bookablevenue.com/turf/event/featuredEvents',
                        dataType: 'jsonp',
                        success: function(data)  {
                            $("#featuredEvents").html(data.result.featuredEvents)
                        }
                        });
                    });
