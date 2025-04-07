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

    app.get('/students', httpHandler.getAllStudents.bind(httpHandler));

  });

  describe('GET /students', () => {
    it('should return all students', async () => {

        const students = [
            { id: 'A01234354', name: 'Miguel Mendoza', grade: 10, debt: 100 },
            { id: 'A01234355', name: 'Fernando Monroy', grade: 10, debt: 0 },
            { id: 'A01234356', name: 'Regina Cavazos', grade: 5 , debt: 50},
            { id: 'A01234357', name: 'Jorge Salcedo', grade: 4, debt: 0 }
        ];

        
        mockController.getAll.mockResolvedValue(students);

        const response = await request(app)
            .get('/students')
            .expect(200);

        expect(response.body).toEqual(students);
        expect(mockController.getAll).toHaveBeenCalled();
    });
  });

});
