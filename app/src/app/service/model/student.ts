export interface Student {
    id: number | string;
    firstname: string;
    lastname: string;
    email: string;
    subject: 'English' | 'Geography' | 'Maths' | 'Science';
    grade: number;
}