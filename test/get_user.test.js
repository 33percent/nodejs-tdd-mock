const expect = require('chai').expect;
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const request = require('request');
const getUsers = require('../src/get_users');
chai.should();
chai.use(sinonChai);

describe('get users tests', ()=> {
    var spy;
    beforeEach(function() {
        spy = sinon.spy();
        sinon.stub(request, 'get').callsFake((url, callback) => {
            callback({}, {body:JSON.stringify({users:['user1','user2']})})
        });
    });
    afterEach (function() {
        sinon.restore();
    });
    // it('can hget users', () => {
    //     getUsers()
    // });
    it('calls the callbackl', () => {
        getUsers(spy);
        spy.should.have.been.calledOnce;
    });
    it('calls the correct url', () => {
        getUsers(spy);
        request.get.should.have.been.calledWith('https://www.mysite.com/api/users');

    });
    it('returns correect data', () => {
        getUsers(spy);
        spy.should.have.been.calledWith({users:['user1', 'user2']});
    })
})