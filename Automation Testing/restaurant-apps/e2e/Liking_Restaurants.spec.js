Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/home');
});

Scenario('Like and Unlike a Restaurant', ({ I }) => {
  I.amOnPage('/#/detail-restaurant/dy62fuwe6w8kfw1e867');

  I.waitForElement('.resto-detail');

  I.waitForClickable('.like');
  I.click('.like');
  I.seeInPopup('Berhasil menyimpan restaurant ke daftar favorit.');

  I.waitForClickable('.unlike');
  I.click('.unlike');
  I.seeInPopup('Berhasil menghapus restaurant dari daftar favorit.');
});
