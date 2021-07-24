import { EarningsService } from './earnings.service';
export declare class InvestmentController {
    private readonly earningsService;
    constructor(earningsService: EarningsService);
    addInvestment(name: string, ammount: number): any;
    getInvestment(investId: string): any;
}
