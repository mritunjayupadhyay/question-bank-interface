export interface IQuestionOption {
    id: string;
    optionText: string;
    isCorrect: boolean;
}
export interface IQuestionImage {
    id: string;
    imageUrl: string;
}

export interface IQuestionListItem {
    id: string;
    questionText: string;
    marks: number;
    difficultyLevel: string;
    questionType: string;
}

export interface IQuestionDB extends IQuestionListItem {
    subjectId: string;
    topicId: string;
    classId: string;
}

export interface IQuestion extends IQuestionListItem {
    subject: string;
    topic: string;
    className: string;
}

export interface IQuestionFullDetails extends IQuestion {
    questionText: string;
    questionOptions: IQuestionOption[];
    questionImages: IQuestionImage[];
}