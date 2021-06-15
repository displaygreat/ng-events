export class Events {
    private id: string;
    private name: string;
    private author: string;
    private date: string;
    private time: string;
    private slots: number

    public constructor(id: string, name: string, author: string, date: string, time: string, slots: number) {
        this.id = id;
        this.name = name;
        this.author = author;
        this.date = date;
        this.time = time;
        this.slots = slots;
    }

    public get _id(){
        return this.id;
    }

    public get _name(){
        return this.name;
    }

    public get _author(){
        return this.author;
    }

    public get _slots(){
        return this.slots;
    }

    public get _time(){
        return this.time;
    }

    public get _date(){
        return this.date;
    }

    public set _id(id: string){
        this.id = id;
    }

    public set _name(name: string){
        this.name = name;
    }

    public set _author(author: string){
        this.author = author;
    }

    public set _date(date: string){
        this.date = date;
    }

    public set _time(time: string){
        this.time = time;
    }
    
    public set _slots(slots: number){
        this.slots = slots;
    }
}