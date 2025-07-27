export interface IExamPaper {
    createdAt: string; // ISO 8601 date string
    durationMinutes: number;
    examTypeId: string;
    id: string;
    title: string;
    totalMarks: number;
    updatedAt: string; // ISO 8601 date string
}

export interface IExamPaperWithType extends IExamPaper {
    examTypeName: string;
}

export interface IExamPaperSection { }