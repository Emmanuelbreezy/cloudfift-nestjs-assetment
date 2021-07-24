import { Investments } from './investment.model';
export declare class InvestmentService {
    investments: Investments[];
    insertInvestment(name: string, amount: number): string;
    getSingleInvestment(investId: string): {
        id: string;
        name: string;
        amount: number;
    };
}
