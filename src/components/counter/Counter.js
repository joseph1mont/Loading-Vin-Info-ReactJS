import React from 'react';
import $ from 'jquery';

var timeleft = 30; // start counter of 60 sec
var downloadTimer = setInterval(function(){
  document.getElementById("countdown").innerHTML = "Approximately " + timeleft + " seconds remaining";
  timeleft -= 1;
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Finished"
  }
}, 1000);

$(function () {
  var timerId = 0;
  var ctr=0;
  var max=10;

  timerId = setInterval(function () {
    // interval function
    ctr++;
    $('#blips > .progress-bar').attr("style","width:" + ctr*max + "%");

    // max reached?
    if (ctr===max){
      clearInterval(timerId);
    }
  }, 3000); // Change total time here
});

const counter = () => <div id="countdown"></div>


export default counter;