export class Discipline {
  id: number;
  course_id: number;
  discipline_name: string;
  course: string;
  presencial_tutor: string;
  tutorship_time: string; // Ver tipo
  tutorship_room: string; // Ver tipo
  tutorship_weekday: string;
  updated: number;
  ad1_deadline: string; // Ver tipo
  ad2_deadline: string; // Ver tipo
  ap1: {
    date: string; // Ver tipo
    time: string; // Ver tipo
  };
  ap2: {
    date: string; // Ver tipo
    time: string; // Ver tipo
  };
  ap3: {
    date: string; // Ver tipo
    time: string; // Ver tipo
  };
}

// {"Items":[
//   {
//     "ap1":{"date":"09/set","time":"09:30"}
//   },
//   "tutorship_weekday":"Quarta-feira",
//   "ap3":{"date":"09/dez","time":"09:30"},
//   "ad2_deadline":"-",
//   "ap2":{"date":"28/out","time":"09:30"},
//   "tutorship_room":"-",
//   "ad1_deadline":"-",
//   "presencial_tutor":"FABRÃCIA ANDRADE",
//   "updated":1500478265895,
//   "tutorship_time":"20:00 Ã s 22:00",
//   "course":"Tecnologia em GestÃ£o de TurÃ­smo",
//   "discipline_name":"Economia e Turismo",
//   "course_id":3,
//   "id":115}
