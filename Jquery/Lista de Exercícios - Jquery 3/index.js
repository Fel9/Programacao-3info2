var mensagem = $("<span> 55-47-8888-4567-jQuery-aerolinhas </span>")

$(document).ready(() => {
  $(".book").before(mensagem)
})

$(document).ready(() => {
  $("li.usa").append(mensagem)
})


$(document).ready(() => {
  $("li.usa>.book").remove()
})

$(document).ready(() => {
  $("li.usa>.book").on("click", () => {
    $("li.usa>.book").remove()
  });
})

$("li.tour").on("click", () => {
  $("li.usa>.book").remove()
});

$(document).ready(() => {
  $("li.tour").on("click", () => {
    $("li.usa>.book").remove()
  });
})