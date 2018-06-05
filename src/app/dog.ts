import Walk from './walk';

export class Dog {
    public id: number;
    public name: string;
    public birthDate: Date;
    public weight: number;
    public owner: string;
    public walks: Array<Walk> = new Array<Walk>()
    constructor() { }
}
