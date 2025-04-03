const StudentController = require('../controllers/student');

describe('StudentController', () => {
  let mockService;
  let controller;

  beforeEach(() => {
    mockService = {
      getAllStudents: jest.fn(),
    };
    controller = new StudentController(mockService);
  });

  test('should get all students', async () => {
    const students = [
        
        { matricula: 'A01234354', nombre: 'Miguel Mendoza', estatus: "Reestructura" },
        { matricula: 'A01234355', nombre: 'Fernando Monroy', estatus: "Aprobado" },
        { matricula: 'A01234356', nombre: 'Regina Cavazos', estatus: "Expulsado"},
        { matricula: 'A01234357', nombre: 'Jorge Salcedo', estatus: "Pendiente" }
    ];

    mockService.getAllStudents.mockResolvedValue(students);

    const result = await controller.getAll();
    expect(result).toEqual(students);
    expect(mockService.getAllStudents).toHaveBeenCalledTimes(1);
  });

});
