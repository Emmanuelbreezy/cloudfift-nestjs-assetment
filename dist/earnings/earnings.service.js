"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EarningsService = void 0;
const common_1 = require("@nestjs/common");
const earnings_model_1 = require("./earnings.model");
let EarningsService = class EarningsService {
    constructor() {
        this.earning = [];
    }
    insertInvestment(name, amount) {
        const invesId = Math.random().toString();
        const newInvest = new earnings_model_1.Earnings(invesId, name, amount);
        this.earning.push(newInvest);
        return invesId;
    }
    getSingleInvestment(earningId) {
        const earn = this.earning.find((item) => item.id === earningId);
        if (!earn) {
            throw new common_1.NotFoundException('Could not find earning');
        }
        return Object.assign({}, earn);
    }
};
EarningsService = __decorate([
    common_1.Injectable()
], EarningsService);
exports.EarningsService = EarningsService;
//# sourceMappingURL=earnings.service.js.map