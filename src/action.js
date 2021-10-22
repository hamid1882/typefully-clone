const actionCreator = (type) => (val) => ({
  type: type,
  payload: val
})

export const updateTextCount = actionCreator("update_textcount");
export const changeInput = actionCreator("input_change");