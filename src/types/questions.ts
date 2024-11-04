export type answerT ={
    questionId:number;
    answerId:number;
    isCorrect:boolean;
}

type correctOptionT ={
    id:number;
}

export type OptionT={
    title:string;
    id:number;
    questionId:number;
}

export type questionT={
    id:number;
    title:string;
    options:OptionT[];
    correctOption:correctOptionT;
}