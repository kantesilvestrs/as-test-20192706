import { AppPage } from "./app.po";

describe("angular-weather App", () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it("should initiate with no data", async () => {
    expect(page);

    await page.navigateTo();

    const emptyRow = await page.getWeatherListRowFirstColumnData(1);

    expect(emptyRow.length).toBe(0);
  });

  it("should have enabled search button when input is provided", async () => {
    expect(page);

    await page.navigateTo();

    const searchButton = await page.getSearchButton();
    expect(searchButton.length).toBe(1);
    expect(searchButton[0].getAttribute("disabled")).toBe("true");
  });

  it("should have disabled search button when input is provided", async () => {
    const SEARCH_INPUT = "Some value";
    expect(page);

    await page.navigateTo();
    await page.sendKeysToSeachInput(SEARCH_INPUT);

    const searchButton = await page.getSearchButton();
    expect(searchButton.length).toBe(1);
    expect(searchButton[0].getAttribute("disabled")).toBeFalsy();
  });

  it("should have disabled search button when results are fetched", async () => {
    const VALID_CITY = "London";

    expect(page);

    await page.navigateTo();
    await page.submitSearch(VALID_CITY);

    const searchButton = await page.getSearchButton();
    expect(searchButton.length).toBe(1);
    expect(searchButton[0].getAttribute("disabled")).toBe("true");
  });

  it("should search for valid city and show correct amount of columns in results", async () => {
    const VALID_CITY = "London";

    expect(page);

    await page.navigateTo();
    await page.submitSearch(VALID_CITY);

    const rowData = await page.getWeatherListRowData(1);
    expect(rowData.length).toBe(5);
  });

  it("should search for valid cities and add them to the list", async () => {
    const CITY_LIST = ["London", "Riga"];

    expect(page);

    await page.navigateTo();
    await page.submitSearch(CITY_LIST[0]);
    await page.submitSearch(CITY_LIST[1]);

    const firstRow = await page.getWeatherListRowFirstColumnData(1);
    expect(firstRow[0]).toEqual(CITY_LIST[0]);

    const secondRow = await page.getWeatherListRowFirstColumnData(2);
    expect(secondRow[0]).toEqual(CITY_LIST[1]);
  });

  it("should search valid cities and show correct amount of rows in results", async () => {
    const VALID_CITIES = ["London", "New York", "Riga", "Berlin"];

    expect(page);

    await page.navigateTo();
    for (let i = 0; i < VALID_CITIES.length; i++) {
      await page.submitSearch(VALID_CITIES[i]);
    }

    const data = await page.getWeatherListData();
    expect(data.length).toBe(4);
  });

  /**
   * Notes:
   *  - Due to time constraints I didn't implement mock http response which I could control
   */
  it("should search a valid city and show correct data", () => {});

  it("should search invalid city, show error on screen and display no data", async () => {
    const CITY = "London is my city";
    const ERROR_MESSAGE = "city not found";

    expect(page);

    await page.navigateTo();
    await page.submitSearch(CITY);

    const data = await page.getWeatherListRowFirstColumnData(1);
    expect(data.length).toEqual(0);

    const errorMessage = await page.getErrorMessage();
    expect(errorMessage[0]).toBe(ERROR_MESSAGE);
  });

  it("should search invalid city, then search valid city, show no error and display data", async () => {
    const INVALID_CITY = "London is my city";
    const VALID_CITY = "London";
    const ERROR_MESSAGE = "city not found";

    expect(page);

    await page.navigateTo();
    await page.submitSearch(INVALID_CITY);

    const errorMessage = await page.getErrorMessage();
    expect(errorMessage[0]).toBe(ERROR_MESSAGE);

    await page.submitSearch(VALID_CITY);

    const data = await page.getWeatherListRowFirstColumnData(1);
    expect(data[0]).toEqual(VALID_CITY);

    const noErrorMessage = await page.getErrorMessage();
    expect(noErrorMessage.length).toBe(0);
  });
});
