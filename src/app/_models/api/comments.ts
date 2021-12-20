export class CommentsDetail {
    title: string = '';
    comment: string = '';
    productId: number = 0;
    firstName: string = '';
    lastName: string = '';
    date: string = '';
    sentimentAnalysis: SentimentAnalysis = new SentimentAnalysis();
}

export class SentimentAnalysis {
    positive: number = 0;
    negative: number = 0;
    neutral: number = 0;
    compound: number = 0;
}

export class CommentsAddModel {
    title: string = '';
    comment: string = '';
    productId: number = 0;
    firstName: string = '';
    lastName: string = '';
    mail: string = '';

}