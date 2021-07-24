"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvestmentController = void 0;
const common_1 = require("@nestjs/common");
const earnings_service_1 = require("./earnings.service");
let InvestmentController = class InvestmentController {
    constructor(earningsService) {
        this.earningsService = earningsService;
    }
    addInvestment(name, ammount) {
        const generatedID = this.earningsService.insertInvestment(name, ammount);
        return { id: generatedID };
    }
    getInvestment(investId) {
        return this.earningsService.getSingleInvestment(investId);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body('name')),
    __param(1, common_1.Body('amount')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Object)
], InvestmentController.prototype, "addInvestment", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], InvestmentController.prototype, "getInvestment", null);
InvestmentController = __decorate([
    common_1.Controller('api/earnings'),
    __metadata("design:paramtypes", [earnings_service_1.EarningsService])
], InvestmentController);
exports.InvestmentController = InvestmentController;
//# sourceMappingURL=earnings.controller.js.map