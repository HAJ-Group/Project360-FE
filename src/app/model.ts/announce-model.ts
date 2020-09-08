export class AnnounceModel {

  constructor(
    public id: number,
    public title: string,
    public type: string,
    public description: string,
    public price: number,
    public address: string,
    public city: string,
    // tslint:disable-next-line:variable-name
    public position_map: string,
    public status: string,
    public rent: string,
    public premium: boolean,
    public announcerId: number
  ){}
}
