import React from 'react';
import $ from 'jquery';

import './LoadingBar.css'

// Loading bar 30Sec
    var current_progress = 0;
    var interval = setInterval(function() {
        current_progress += 1;
        $("#dynamic")
        .css("width", current_progress + "%")
        .attr("aria-valuenow", current_progress)
        .text(current_progress + "% Complete");
        if (current_progress >= 100)
            clearInterval(interval);
    }, 300);

    const loadingBar = () => {
        return (
            <div className="Progress mt-4">
            <div id="dynamic" className="progress-bar progress-bar-success progress-bar-striped active" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" >
              <span id="current-progress"></span>
            </div>
           </div> 
        )
    }

    export default loadingBar;