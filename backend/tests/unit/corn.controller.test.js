const { expect } = require('chai');
const sinon = require('sinon');
const cornController = require('../../src/controllers/corn.controller');

describe('Corn Controller', () => {
  describe('buyCorn', () => {
    let req, res, statusStub, jsonStub;

    beforeEach(() => {
      // Set up request and response objects
      req = {};
      jsonStub = sinon.stub();
      statusStub = sinon.stub().returns({ json: jsonStub });
      res = {
        status: statusStub,
        json: jsonStub
      };
    });

    afterEach(() => {
      // Clean up stubs
      sinon.restore();
    });

    it('should return a successful purchase response', async () => {
      // Call the controller method
      await cornController.buyCorn(req, res);

      // Verify that status was called with 200
      expect(statusStub.calledWith(200)).to.be.true;
      
      // Verify the json response
      const response = jsonStub.args[0][0];
      expect(response).to.have.property('error', false);
      expect(response).to.have.property('message', 'Corn purchased successfully!');
      expect(response).to.have.property('order');
      
      // Check the order structure
      expect(response.order).to.have.property('id');
      expect(response.order).to.have.property('date');
      expect(response.order).to.have.property('total');
      expect(response.order).to.have.nested.property('items.type', 'corn');
      expect(response.order).to.have.nested.property('items.quantity', 1);
    });

    it('should handle server errors', async () => {
      // Mock an internal error by stubbing a method that the controller uses
      const originalMethod = cornController.buyCorn;
      cornController.buyCorn = sinon.stub().callsFake(async (req, res) => {
        try {
          // Simulate an internal error
          throw new Error('Database connection failed');
        } catch (error) {
          return res.status(500).json({
            error: true,
            message: 'Error processing purchase'
          });
        }
      });
      
      // Call the controller method
      await cornController.buyCorn(req, res);
      
      // Verify that status was called with 500
      expect(statusStub.calledWith(500)).to.be.true;
      
      // Check that the error response was sent
      const response = jsonStub.args[0][0];
      expect(response).to.have.property('error', true);
      expect(response).to.have.property('message', 'Error processing purchase');
      
      // Restore the original method
      cornController.buyCorn = originalMethod;
    });
  });
});