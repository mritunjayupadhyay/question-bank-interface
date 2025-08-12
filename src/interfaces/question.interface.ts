export enum DifficultyLevel {
    LOW = 'low',
    MEDIUM = 'medium',
    HARD = 'hard'
  }
  
  export enum QuestionType {
    MULTIPLE_CHOICE = 'multiple_choice',
    DESCRIPTIVE = 'descriptive'
  }

export interface IQuestinOptionPayload {
     optionText: string;
    isCorrect: boolean;
}

export interface IQuestionOption extends IQuestinOptionPayload {
    id: string;
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
    subjectId: string;
    topicId: string;
    classId: string;
    questionText: string;
    questionOptions: IQuestionOption[];
    questionImages: IQuestionImage[];
}

export interface IQuestionFilter {
    subjectId?: string;
    topicIds?: string[];
    classId?: string;
    difficultyLevel?: DifficultyLevel;
    questionType?: QuestionType;
    minMarks?: number;
    maxMarks?: number;
  }

  export interface ICreateQuestionRequest {
  questionText: string;
  marks: number;
  difficultyLevel: DifficultyLevel;
  questionType: QuestionType;
  subjectId: string;
  topicId: string;
  classId: string;
  options?: IQuestinOptionPayload[];
}

export interface IUpdateQuestionRequest {
  questionText?: string;
  marks?: number;
  difficultyLevel?: DifficultyLevel;
  questionType?: QuestionType;
  subjectId?: string;
  topicId?: string;
  classId?: string;
}
export interface IUpdateQuestionOptionsRequest {
  options: IQuestionOption;
}