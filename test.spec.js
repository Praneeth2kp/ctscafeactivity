const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
  it('should return 200 status code', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });

  it('should render the index page', async () => {
    const response = await request(app).get('/');
    expect(response.text).toContain('The Content');
  });

});

describe('GET /birds', () => {
    it('should respond with status 500', async () => {
      const res = await request(app).get('/birds');
      expect(res.statusCode).toEqual(500);
    });
});

describe('GET /plants', () => {
    it('should respond with status 500', async () => {
      const res = await request(app).get('/plants');
      expect(res.statusCode).toEqual(500);
    });
});

describe('GET /', () => {
    it('should render the index page with correct styles and content', async () => {
      const res = await request(app).get('/');
      expect(res.statusCode).toEqual(200);
      expect(res.text).toContain('<style>');
      expect(res.text).toContain('background-color: black;');
      expect(res.text).toContain('<h1 style="text-align: center;">The Content</h1>');
      expect(res.text).toContain('Introduction:');
      expect(res.text).toContain('Parameters of the Single Column of a CSV in Spark');
    });

});
