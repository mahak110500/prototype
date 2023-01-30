export interface UserData {
    success: boolean,
    dataList: {
        address: string;
        completePercent: number;
        email: string;
        endDate: number;
        firstName: string;
        lastName: string;
        orderId: number;
        phone: number;
        projectDescription: string;
        projectName: string;
        startDate: number;
    }
    message: string;
}