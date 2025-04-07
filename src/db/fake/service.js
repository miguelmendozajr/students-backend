const DBService = require('../dbService');

class FakeService extends DBService {
  constructor() {
    super();
    this.students = new Map();
    const dummyStudents = [
      { id: 'A01234354', name: 'Miguel Mendoza', grade: 10, debt: 100 },
      { id: 'A01234355', name: 'Fernando Monroy', grade: 10, debt: 0 },
      { id: 'A01234356', name: 'Regina Cavazos', grade: 5 , debt: 50},
      { id: 'A01234357', name: 'Jorge Salcedo', grade: 4, debt: 0 }
    ];

    dummyStudents.forEach((student) => {
      this.students.set(student.id, student);
    });
  }

  async getAllStudents() {
    return Array.from(this.students.values());
  }

}

module.exports = FakeService;
