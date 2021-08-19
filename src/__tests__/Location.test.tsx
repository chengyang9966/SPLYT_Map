import React from "react";
import locationName from "../utils/locationName";
import distance from "../utils/FindDistance";
import { SING_LOCATION, LONDON_LOCATION } from "../constant/Location";
describe("check Location", () => {
  test("when give true ,should return Splyt (London)", () => {
    let result = locationName(true);
    expect(result).toEqual("Splyt (London)");
  });
  test("when give false,should return Splyt Singapore Pte. Ltd", () => {
    let result = locationName(false);
    expect(result).toEqual("Splyt Singapore Pte. Ltd");
  });
});
describe("location distance", () => {
  test("when give same location, it should return 0", () => {
    let result = distance(
      SING_LOCATION[0],
      SING_LOCATION[1],
      SING_LOCATION[0],
      SING_LOCATION[1],
      "K"
    );
    expect(result).toEqual(0);
  });
  test("when give 2 locations,it should return correct distance in KM", () => {
    let result = distance(
      SING_LOCATION[0],
      SING_LOCATION[1],
      LONDON_LOCATION[0],
      LONDON_LOCATION[1],
      "K"
    );
    expect(result).toEqual(10853.35512464598);
  });
});
