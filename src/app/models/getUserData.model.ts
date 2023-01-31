export interface UserData {
    success: boolean,
    content: {
        dataList: [{
            address: string;
            complete_percent: number;
            document_id: ""
            email: string;
            end_date: number;
            filename :  ""
            first_name: string;
            id: number;
            last_name: string;
            order_id : number;
            path: ""
            phone: number;
            project_description: string;
            project_id: number;
            project_name :string;
            start_date: number;
        }]
    },
    message: string;
}