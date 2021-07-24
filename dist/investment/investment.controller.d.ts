import { InvestmentService } from './investment.service';
export declare class InvestmentController {
    private readonly investmentService;
    constructor(investmentService: InvestmentService);
    addInvestment(investName: string, investAmount: number): any;
    getInvestment(investId: string): any;
}
