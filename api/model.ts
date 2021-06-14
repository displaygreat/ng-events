export class Events {
    private _id: string;
    private _name: string;
    private _author: string;
    private _date: string;
    private _time: string;
    private _slots: number

    public constructor(id: string, name: string, author: string, date: string, time: string, slots: number) {
        this._id = id;
        this._name = name;
        this._author = author;
        this._date = date;
        this._time = time;
        this._slots = slots;
    }

    public get id(){
        return this._id;
    }

    public get name(){
        return this._name;
    }

    public get author(){
        return this._author;
    }

    public get slots(){
        return this._slots;
    }

    public get time(){
        return this._time;
    }

    public get date(){
        return this._date;
    }

    public set id(id: string){
        this._id = id;
    }

    public set name(name: string){
        this._name = name;
    }

    public set author(author: string){
        this._author = author;
    }

    public set date(date: string){
        this._date = date;
    }

    public set time(time: string){
        this._time = time;
    }
    
    public set slots(slots: number){
        this._slots = slots;
    }
}