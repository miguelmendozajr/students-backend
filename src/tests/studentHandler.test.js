const request = require('supertest');
const express = require('express');
const StudentHttpHandler = require('../handlers/students');

jest.mock('../controllers/student');

describe('StudentHttpHandler', () => {
  let app;
  let mockController;

  beforeEach(() => {
    app = express();
    app.use(express.json());

    mockController = {
      getAll: jest.fn()
    };

    const httpHandler = new StudentHttpHandler(mockController);

    app.get('/students', httpHandler.getAllCustomers(httpHandler));

  });

  describe('GET /students', () => {
    it('should return all students', async () => {


        const students = [
            { id: 'A01234354', name: 'Miguel Mendoza', estatus: "Reestructura" },
            { id: 'A01234355', name: 'Fernando Monroy', estatus: "Aprobado" },
            { id: 'A01234356', name: 'Regina Cavazos', estatus: "Expulsado"},
            { id: 'A01234357', name: 'Jorge Salcedo', estatus: "Pendiente" }
        ];

        
        mockController.getAll.mockResolvedValue(students);

        const response = await request(app)
            .get('/customers')
            .expect(200);

        expect(response.body).toEqual(students);
        expect(mockController.getAll).toHaveBeenCalled();
    });
  });

});
