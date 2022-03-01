import puppeteer from 'puppeteer';

let browser, page;
const baseUrl = 'http://localhost:3000';

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 200
  });

  page = await browser.newPage();
});

test('home loads correctly', async () => {
  await page.goto(`${baseUrl}/`);

  const title = await page.$eval('h1', el => el.textContent);

  expect(title).toBe('STEM Swift Academy');
});

test('contacts loads correctly', async () => {
  await page.goto(`${baseUrl}/contacts`);

  const contactsSection = await page.$eval('article.contacts', el => el.textContent.includes('Blagoevgrad, Bulgaria, ul. PirovPlovdiv, Bulgaria, ul. BonevVarna, Bulgaria, ul. Podvis+3598 636 217 12alex.mehandzhiyska@sat.academy.comAlexandrina Mehandzhiyska'));
  expect(contactsSection).toBe(true);

  const mapSection = await page.$eval('iframe', el => el.tagName);
  expect(mapSection).toBe('IFRAME');
});

// test('register works correctly', async () => {
//   await page.goto(`${baseUrl}/auth/register`);

//   await page.waitForSelector('form');

//   await page.click('input[name="name"]');
//   await page.type('input[name="name"]', 'random guy');

//   await page.click('input[name="email"]');
//   await page.type('input[name="email"]', 'random@abv.bg');

//   await page.click('input[name="password"]');
//   await page.type('input[name="password"]', "randpass");

//   await page.click('input[type="submit"]');
//   await page.waitForSelector('h2.swal2-title');

//   const successTitle = await page.$eval('h2.swal2-title', el => el.textContent);
//   expect(successTitle).toBe('Successfully created account!');
// }, 60000);

test('login works correctly when passed valid data', async () => {
  await page.goto(`${baseUrl}/auth/login`);

  await page.waitForSelector('form');

  await page.click('input[name="email"]');
  await page.type('input[name="email"]', 'alexandrina.mehandzhiyska1@gmail.com');

  await page.click('input[name="password"]');
  await page.type('input[name="password"]', "asdasd");

  await page.click('input[type="submit"]');

  await page.waitForTimeout(5000);

  const title = await page.$eval('h1', el => el.textContent);
  expect(title).toBe('STEM Swift Academy');
}, 60000);

test('login throws an error when passed invalid data', async () => {
  await page.waitForSelector('li.logout-btn');
  await page.click('li.logout-btn');

  await page.goto(`${baseUrl}/auth/login`);

  await page.waitForSelector('form');

  await page.click('input[name="email"]');
  await page.type('input[name="email"]', 'alexandrina.mehandzhiyska1@gmail.com');

  await page.click('input[name="password"]');
  await page.type('input[name="password"]', "test");

  await page.click('input[type="submit"]');
  await page.waitForSelector('h2.swal2-title');

  const errorName = await page.$eval('h2.swal2-title', el => el.textContent);
  expect(errorName).toContain('Invalid username or password');
}, 60000);

test('subject page loads correctly', async () => {
  await page.goto(`${baseUrl}/auth/login`);

  await page.waitForSelector('form');

  await page.click('input[name="email"]');
  await page.type('input[name="email"]', 'alexandrina.mehandzhiyska1@gmail.com');

  await page.click('input[name="password"]');
  await page.type('input[name="password"]', "asdasd");

  await page.click('input[type="submit"]');

  await page.waitForTimeout(5000);

  const title = await page.$eval('h1', el => el.textContent);
  expect(title).toBe('STEM Swift Academy');

  await page.goto(`${baseUrl}/exams`);
  await page.waitForSelector('button.english-choice');
  await page.waitForSelector('button.math-choice');

  const englishBtn = await page.$eval('button.english-choice', el => el.textContent);
  const mathBtn = await page.$eval('button.math-choice', el => el.textContent);

  expect(englishBtn).toBe('English');
  expect(mathBtn).toBe('Math');
}, 60000);

test('exams page loads correctly', async () => {
  await page.goto(`${baseUrl}/exams/english`);
  await page.waitForSelector('h1.exams-heading');

  const examsHeading = await page.$eval('h1.exams-heading', el => el.textContent);
  expect(examsHeading).toBe('english Practice Tests');
}, 60000);

test('exam details page loads correctly', async () => {
  await page.waitForSelector('section.test');

  await page.click('button.start-btn');
  await page.waitForSelector('h3.directions-heading');

  const directionsHeading = await page.$eval('h3.directions-heading', el => el.textContent);
  expect(directionsHeading).toBe('DIRECTIONS');
}, 60000);

test('question page loads correctly', async () => {
  await page.goto(`${baseUrl}/exams/english/1/questions`);

  await page.waitForSelector('section.questions');
}, 60000);

test('courses page loads correctly', async () => {
  await page.goto(`${baseUrl}/courses`);
  await page.waitForSelector('h1.courses-heading');

  const coursesHeading = await page.$eval('h1.courses-heading', el => el.textContent);
  expect(coursesHeading).toBe('Choose a Course');
}, 60000);

test('course details page loads correctly', async () => {
  await page.goto(`${baseUrl}/courses/1?userId=45`);

  await page.waitForSelector('section.course-details');
}, 60000);

test('users page loads correctly', async () => {
  await page.goto(`${baseUrl}/users`);

  await page.waitForSelector('h1.users-heading');

  const usersHeading = await page.$eval('h1.users-heading', el => el.textContent);
  expect(usersHeading).toBe('All Users');
}, 60000);

test('calendar page loads correctly', async () => {
  await page.goto(`${baseUrl}/calendar`);

  await page.waitForSelector('.calendar');
}, 30000);

afterAll(async () => {
  browser.close();
});
