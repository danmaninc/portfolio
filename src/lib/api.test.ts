import { fetchComic, fetchComicId } from "./api";
import { describe, test, expect } from "@jest/globals";

describe("Comic ID fetching should work correctly", () => {
  test("fetches correct comic id", () => {
    fetchComicId({ email: "d.nikulin@innopolis.university" }).then((data) => {
      expect(data).toEqual(340);
    });
  });
  test("should catch comic id fetch errors", async () => {
    await expect(fetchComicId({ email: "" })).rejects.toThrow(
      new Error("Failed to fetch Comic id"),
    );
  });
});

describe("Comic fetching should work correctly", () => {
  test("fetches correct comic", () => {
    fetchComic({ id: "340" }).then((data) => {
      expect(data).toEqual({
        month: "11",
        num: 340,
        link: "",
        year: "2007",
        news: "",
        safe_title: "Fight",
        transcript:
          "[[Text: We had a fight last night.]]\n[[A guy is sitting in a sofa, head in both hands, feeling upset.]]\n[[Text: I guess she's still mad.]]\n[[A girl is standing with arms crossed in front of her chest, with the same mood.]]\n[[Text: I woke up to find she'd written a sappy love note]]\n[[The guy is standing in front of a computer, with a cup in his hand.]]\n[[Text: to my boot sector.]]\n[[The cup now lies on the floor, the guy is looking at the computer with disbelief.]]\nComputer: Operating system not found\n{{title-text: And she put sweet nothings in all my .conf files.  It'll take me forever to get X working again.}}",
        alt: "And she put sweet nothings in all my .conf files.  It'll take me forever to get X working again.",
        img: "https://imgs.xkcd.com/comics/fight.png",
        title:
          'Fight<img src="" onerror="alert(\'You\\\'ve been hacked! Should have used safe_title instead of title and textContent instead of innerHTML ¯\\\\_(ツ)_/¯\');this.parentNode.removeChild(this);">',
        day: "9",
      });
    });
  });
  test("should catch comic fetch errors", async () => {
    await expect(fetchComic({ id: "" })).rejects.toThrow(
      new Error("Failed to fetch Comic image"),
    );
  });
});
