export class User {
   
    constructor(
        public first_name: string,
        public last_name: string,
        public start_date: number,
        public end_date: number,
        public order_id: number,
        public complete_percent: string,
        private _token: string
    ) {}

    get token(){
        return this._token;
    }
}

// export interface Users {
//     success: boolean,
//     content:{
//         dataList:[{
//             end_date: number;
//             first_name: string;
//             last_name: string;
//             order_id: number;
//             project_name: string;
//             start_date: number;
//         }]
//     }
    
//     message: string;
// }