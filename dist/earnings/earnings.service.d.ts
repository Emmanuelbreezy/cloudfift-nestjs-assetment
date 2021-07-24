import { Earnings } from './earnings.model';
export declare class EarningsService {
    earning: Earnings[];
    insertInvestment(name: string, amount: number): string;
    getSingleInvestment(earningId: string): {
        id: string;
        name: string;
        amount: number;
    };
}
