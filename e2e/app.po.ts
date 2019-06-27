import { browser, by, element } from "protractor";

export class AppPage {
  navigateTo() {
    return browser.get("/");
  }

  async submitSearch(city: string) {
    await this.sendKeysToSeachInput(city);
    await element(by.css("[data-testid='search-component-submit")).click();
  }

  async sendKeysToSeachInput(city: string) {
    await element(by.css("[data-testid='search-component-input']")).sendKeys(
      city
    );
  }

  getWeatherListRowFirstColumnData(row: number) {
    return element
      .all(by.css(`tr:nth-child(${row}) > td:nth-child(1)`))
      .getText();
  }

  getWeatherListRowData(row: number) {
    return element.all(by.css(`tr:nth-child(${row}) td`));
  }

  getWeatherListData() {
    return element.all(by.css(`tr[data-testid*='city__']`));
  }

  getErrorMessage() {
    return element
      .all(by.css("[data-testid='search-component-error-message']"))
      .getText();
  }

  getSearchButton() {
    return element.all(by.css("[data-testid='search-component-submit']"));
  }
}
