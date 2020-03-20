"use strict";

$(document).ready(function() {
  $("span.sendmail").each(function() {
    var $span = $(this),
      data = $(this)
        .text()
        .split("+");
    data[3] = data[3] || data[0] + "@" + data[1] + "." + data[2];
    $span
      .after(
        '<a href="mailto:' +
          data[0] +
          "@" +
          data[1] +
          "." +
          data[2] +
          '">' +
          data[3] +
          "</a>"
      )
      .remove();
  });
});
