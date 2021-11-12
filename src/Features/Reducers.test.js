import "@testing-library/jest-dom/extend-expect";
import reducer, {
  initialState,
  scrollBar,
  viewDraft,
  collapseDraft,
  saveDraft,
  addStyle,
  inputChange,
  deleteDraft,
} from "./InputSlice";
import { CollapseIn, lightMode, DarkMode } from "./Styles";

describe("initial states", () => {
  it("should return the initial state of draft", () => {
    expect(reducer(undefined, {}).draftList).toEqual({ 0: "" });
  });

  it("should return the initial state of theme", () => {
    expect(reducer(undefined, {}).style).toEqual(lightMode);
  });
  it("Check initial state of scroll", () => {
    expect(reducer(undefined, {}).scroll).toEqual(false);
  });
  it("Initial value of DraftView", () => {
    expect(reducer(undefined, {}).draftView).toEqual("d-block");
  });
});

describe("draftlist", () => {
  it("Input data should be added to draft list", () => {
    const action = saveDraft({ id: 0, item: "first" });
    let state = initialState;
    state = reducer(state, action);
    expect(state.draftList).toStrictEqual({
      0: "first",
    });

    const action2 = inputChange({ id: 0, item: "second" });
    state = reducer(state, action2);
    expect(state.draftList).toStrictEqual({
      0: "second",
    });

    const action3 = inputChange({ id: 1, item: "third" });
    state = reducer(state, action3);
    expect(state.draftList).toStrictEqual({
      0: "second",
      1: "third",
    });

    const action4 = inputChange({ id: 1, item: "fourth" });
    state = reducer(state, action4);
    expect(state.draftList).toStrictEqual({
      0: "second",
      1: "fourth",
    });

    const action5 = deleteDraft({ id: 1 });
    state = reducer(state, action5);
    expect(state.draftList).toStrictEqual({
      0: "second",
    });

    const action6 = saveDraft({id: 2, item: "new item"})
    state= reducer(state, action6);
    expect(state.draftList).toStrictEqual({
      0: "second",
      2: "new item"
    })

  });
});

describe("misk", () => {

  it("should toggle the themes", () => {
    expect(reducer(undefined, addStyle(DarkMode)).style).toEqual(DarkMode);
  });

  it("scroll bar toggles on click", () => {
    expect(reducer(undefined, scrollBar(false)).scroll).toEqual(false);
  });

  it("DraftView toggles from visible to hidden", () => {
    expect(reducer(undefined, viewDraft("d-none")).draftView).toEqual("d-none");
  });

  it("Collapse toggles from visible to hidden", () => {
    expect(reducer(undefined, collapseDraft(CollapseIn)).draftCollapse).toEqual(
      CollapseIn
    );
  });
});