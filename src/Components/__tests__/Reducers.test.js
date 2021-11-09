import "@testing-library/jest-dom/extend-expect";
import reducer, { scrollBar, viewDraft, collapseDraft, saveDraft, addStyle } from "../../Features/InputSlice";
import { CollapseIn, lightMode, DarkMode } from "../../Features/Styles";

test("should return the initial state of input", () => {
  expect(reducer(undefined, {}).input).toEqual([
    {
      item: "",
      id: 0,
    },
  ]);
});

test("should return the initial state of draft", () => {
  expect(reducer(undefined, {}).draftList).toEqual([])
})

test("items should be added on draftList when typed", () => {
  expect(reducer(undefined, saveDraft("Hamid Hussain")).draftList).toEqual(["Hamid Hussain"])
})

test("should return the initial state of theme", () => {
  expect(reducer(undefined, {}).style).toEqual(lightMode);
});

test("should toggle the themes", () => {
  expect(reducer(undefined, addStyle(DarkMode)).style).toEqual(DarkMode);
})

test("Check initial state of scroll", () => {
  expect(reducer(undefined, {}).scroll).toEqual(false);
})

test("scroll bar toggles on click", () => {
  expect(reducer(undefined, scrollBar(false)).scroll).toEqual(false)
})

test("Initial value of DraftView", () => {
  expect(reducer(undefined, {}).draftView).toEqual("d-block");
})

test("DraftView toggles from visible to hidden", () => {
  expect(reducer(undefined, viewDraft("d-none")).draftView).toEqual("d-none");
})

test("Collapse toggles from visible to hidden", () => {
  expect(reducer(undefined, collapseDraft(CollapseIn)).draftCollapse).toEqual(CollapseIn);
})
