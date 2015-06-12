$("#modal-1").on "change", ->
  if $(this).is(":checked")
    $("body").addClass "modal-open"
  else
    $("body").removeClass "modal-open"
    window.location.replace("/")

$(".modal-window").on "click", ->
  $(".modal-state:checked").prop("checked", false).change()

$(".modal-inner").on "click", (e) ->
  e.stopPropagation()
