import { assert } from 'chai'; // Using Assert style
import { expect } from 'chai'; // Using Expect style
import { should } from 'chai'; // Using Should style
import chai from 'chai';
import chaiHttp from 'chai-http';

should();
expect();
assert();

const url = 'http://localhost:4000';

describe('Testing de tests: ', function () {
    it('Should get all products from DB: ', function () {
        {
            chai.request(url)
                .get('/products')
                // .send({ id: 0, country: 'Croacia', year: 2017, days: 10 })
                .end(function (err, res) {
                    console.log(res.body);
                    expect(res).to.have.status(200);
                    done();
                });
        }
    });
});

describe('Testing for products', () => {
    it('Should create a product?', (done) => {
        chai.request(url)
            .post('/new-product')
            .send({
                title: 'New product',
                description: 'Very good product',
                price: 200,
            })
            .end(function (err, res) {
                console.log(res.body);
                expect(res).to.have.status(500);
                done();
            });
    });
});

describe('Update a product found by name', () => {
    it('should update the price', (done) => {
        chai.request(url)
            .put('update-product')
            .send({
                title: 'New product',
                price: 400, //Price goes from 200 to 400?
            })
            .end(function (err, res) {
                console.log(res.body);
                expect(res.body).to.have.property('days').to.be.equal(20);
                expect(res).to.have.status(200);
                done();
            });
    });
});
