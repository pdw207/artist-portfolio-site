(($, W, D) ->
  JQUERY4U = {}
  JQUERY4U.UTIL = setupFormValidation: ->
    $('#form1').validate
      rules:
        Field16: 'required'
      messages:
        Field16: 'You forgot to enter a message'
      submitHandler: (form) ->
        $('#modal-1').prop 'checked', true
        form.submit()
  $(D).ready ($) ->
    JQUERY4U.UTIL.setupFormValidation()
) jQuery, window, document
