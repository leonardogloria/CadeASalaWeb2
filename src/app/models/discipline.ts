export class Discipline {
  id: number;
  course_id: number;
  discipline_name: string;
  course: string;
  presencial_tutor: string;
  tutorship_time: string;
  tutorship_room: string;
  tutorship_weekday: string;
  updated: number;
  ad1_deadline: string;
  ad2_deadline: string;
  ap1: {
    date: string;
    time: string;
  };
  ap2: {
    date: string;
    time: string;
  };
  ap3: {
    date: string;
    time: string;
  };
}
