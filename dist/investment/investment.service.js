"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvestmentService = void 0;
const common_1 = require("@nestjs/common");
const investment_model_1 = require("./investment.model");
let InvestmentService = class InvestmentService {
    constructor() {
        this.investments = [];
    }
    insertInvestment(name, amount) {
        const invesId = Math.random().toString();
        const newInvest = new investment_model_1.Investments(invesId, name, amount);
        this.investments.push(newInvest);
        return invesId;
    }
    getSingleInvestment(investId) {
        const invest = this.investments.find((item) => item.id === investId);
        if (!invest) {
            throw new common_1.NotFoundException('Could not find investment');
        }
        return Object.assign({}, invest);
    }
};
InvestmentService = __decorate([
    common_1.Injectable()
], InvestmentService);
exports.InvestmentService = InvestmentService;
//# sourceMappingURL=investment.service.js.map