export interface IExamPaper {
    classId: string;
    createdAt: string; // ISO 8601 date string
    durationMinutes: number;
    examTypeId: string;
    id: string;
    subjectId: string;
    title: string;
    totalMarks: number;
    updatedAt: string; // ISO 8601 date string
}

export interface IExamPaperSection { }