 $(document).ready(function(){
                    $.ajax({
                        url: 'http://bookablevenue.com/turf/event/todaysEvent',
                        dataType: 'jsonp',
                        success: function(data) {
                            $("#todaysEvent").html(data.result.todaysEvent)
                        }
                        });
                    });
