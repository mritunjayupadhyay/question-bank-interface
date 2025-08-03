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

// The IExamPaperSection interface is currently empty.

export interface IExamPaperSection { }

export interface IExamSectionCreatePayload {
  sectionNumber: number;
  title: string;
  instructions?: string;
  marksPerQuestion: number;
  questionsToAnswer: number;
  totalQuestions: number;
}

export interface IExamSectionPayloadPartial {
  title?: string;
  instructions?: string;
  marksPerQuestion?: number;
  questionsToAnswer?: number;
  totalQuestions?: number;
}

export interface IExamSectionAddQuestionPayload {
  questionId: string;
  questionNumber: number;
  isOptional?: boolean;
}

export interface IExamSectionUpdateQuestionPayload {
  questionNumber: number;
  isOptional?: boolean;
}