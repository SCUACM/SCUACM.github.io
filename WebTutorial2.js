/// <reference path="typings/jquery/jquery.d.ts"/>
//This is our javascript file. It is executing when the HTML page finishes loading.
//(document).ready() is a function that ensures the javascript executes after the HTML loads
$( document ).ready(function() {
   $("#SantaClara").click(function() {
      $.ajax({
         url: "http://api.wunderground.com/api/2b38dcff93aa3dff/conditions/q/CA/Santa_Clara.json",
         type: "GET",
         dataType: "json",
         success: function(data) {
            var dayData = data.current_observation;
             alert(dayData.temp_c + " Degrees cell see us");
         }
      });
   });
   $("#SanFrancisco").click(function() {
      $.ajax({
         url: "http://api.wunderground.com/api/2b38dcff93aa3dff/conditions/q/CA/San_Francisco.json",
         type: "GET",
         dataType: "json",
         success: function(data) {
            var dayData = data.current_observation;
             alert(dayData.temp_f + " Degrees Fair in height");
             alert(dayData.relative_humidity + " Humidity");
         }
      });
   });
});