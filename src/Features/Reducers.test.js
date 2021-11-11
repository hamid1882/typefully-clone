import "@testing-library/jest-dom/extend-expect";
import reducer, { initialState, inputChange, deleteDraft, scrollBar, viewDraft, collapseDraft, saveDraft, addStyle } from "./InputSlice";
import { CollapseIn, lightMode, DarkMode } from "./Styles";

describe('Initial State', () => {
  it("should return the initial state of input", () => {
    expect(reducer(undefined, {}).input).toEqual(
      {
        item: "",
        id: 0,
      },
    );
  });

  it("should return the initial state of draft", () => {
    expect(reducer(undefined, {}).draftList).toEqual({0:""})
  })

  it("should return the initial state of theme", () => {
    expect(reducer(undefined, {}).style).toEqual(lightMode);
  });
  it("Check initial state of scroll", () => {
    expect(reducer(undefined, {}).scroll).toEqual(false);
  })
  it("Initial value of DraftView", () => {
    expect(reducer(undefined, {}).draftView).toEqual("d-block");
  })
});

describe('DraftList', () => {
  it("new draft should have empty text", () => {
    const action = saveDraft({ id: 0, item: "first"});
    let state = initialState;
    state = reducer(state, action);
    expect(state.draftList).toStrictEqual({
      0: "first"
    });

    const action2 = inputChange({ id: 0, item: "second" });
    state = reducer(state, action2);
    expect(state.draftList).toStrictEqual({
      0: "second" 
    });

    const action3 = inputChange({ id: 2, item: "third" });
    state = reducer(state, action3);
    expect(state.draftList).toStrictEqual({
      0: "second",
      2: "third"
    });

    const action4 = inputChange({ id: 2, item: "four" });
    state = reducer(state, action4);
    expect(state.draftList).toStrictEqual({
      0: "second",
      2: "four"
    });

    const action5 = inputChange({ id: 3, item: "five" });
    state = reducer(state, action5);
    expect(state.draftList).toStrictEqual({
      0: "second",
      2: "four",
      3: "five"
    });

    const action6 = deleteDraft({ id: 3});
    state = reducer(state, action6);
    expect(state.draftList).toStrictEqual({
      0: "second",
      2: "four",
    });
  })

});

describe('Input Change', () => {
  it("items should be added on draftList when typed", () => {
    const action = inputChange({ id: 2, item: "adsfhalsdjf" });
    const state = reducer(initialState, action);
    expect(state.input).toStrictEqual({ id: 2, item: "adsfhalsdjf" })
    expect(state.draftList).toStrictEqual({
      0:"",
      2: "adsfhalsdjf"
    })
  })
});

describe('Misc', () => {

  it("should toggle the themes", () => {
    expect(reducer(undefined, addStyle(DarkMode)).style).toEqual(DarkMode);
  })


  it("scroll bar toggles on click", () => {
    expect(reducer(undefined, scrollBar(false)).scroll).toEqual(false)
  })

  it("DraftView toggles from visible to hidden", () => {
    expect(reducer(undefined, viewDraft("d-none")).draftView).toEqual("d-none");
  })

  it("Collapse toggles from visible to hidden", () => {
    expect(reducer(undefined, collapseDraft(CollapseIn)).draftCollapse).toEqual(CollapseIn);
  })

});

