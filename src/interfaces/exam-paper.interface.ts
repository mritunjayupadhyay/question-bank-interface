export interface IExamPaper {
    createdAt: string; // ISO 8601 date string
    durationMinutes: number;
    examTypeId: string;
    id: string;
    title: string;
    totalMarks: number;
    updatedAt: string; // ISO 8601 date string
}
// Maybe we need the following
export interface IExamPaperWithType extends IExamPaper {
    examTypeName: string;
}

export interface IExamPaperSection { }