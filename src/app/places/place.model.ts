export class Place {

  constructor(
    public id: string, // TS syntax - automatically binds to the class fields making them public
    public title: string,
    public description: string,
    public imageUrl: string,
    public price: number
  ) { }
}