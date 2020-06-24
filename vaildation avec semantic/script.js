$('.ui.form')
  .form({
    fields: {
      name: {
        identifier: 'name',
        rules: [
          {
            type   : 'empty',
            prompt : 'Please enter your name'
          }
        ]
      },
      first_name: {
        identifier: 'first_name',
        rules: [
          {
            type   : 'minCount[2]',
            prompt : 'Please select at least two skills'
          }
        ]
      },
    }
  })
;
