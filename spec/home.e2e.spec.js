let sleep = browser.params.sleep
let baseUrl = browser.params.baseUrl

describe('description', () => {
  it('should load home page', function () {
    browser.get(baseUrl);
    browser.sleep(sleep);
    expect(browser.getCurrentUrl()).toMatch(baseUrl + '#!/page1')
    expect(element(by.tagName('h1')).getText()).toBe('Page 1')

  });

  it('should open left sidenav', function () {
      element(by.cssContainingText('md-icon', 'menu')).click();
      expect(element(by.cssContainingText('h2', 'Sidenav Left')).isPresent())
        .toBe(true)
  });
  it('should close side nav when clicking off', function () {
    browser.sleep(sleep);
    browser.pause()
      element(by.tagName('md-backdrop')).click();
      browser.sleep(sleep);
      expect(element(by.tagName('md-backdrop')).isPresent()).toBe(false)
  });
});
