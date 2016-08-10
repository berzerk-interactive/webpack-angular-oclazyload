let sleep = browser.params.sleep
let baseUrl = browser.params.baseUrl

describe('Page 2 \n', () => {
  it('should load page2', function () {
    element(by.cssContainingText('md-icon', 'menu')).click();
    browser.sleep(sleep);
    element(by.linkText('Page 2')).click()
    browser.sleep(sleep);
    expect(browser.getCurrentUrl()).toMatch(baseUrl + '#!/page2')
    expect(element(by.tagName('h1')).getText()).toBe('Page 2')
    element(by.tagName('md-backdrop')).click();


  });

  it('should open left sidenav', function () {
      element(by.cssContainingText('md-icon', 'menu')).click();
      expect(element(by.cssContainingText('h2', 'Sidenav Left')).isPresent())
        .toBe(true)
  });
});
