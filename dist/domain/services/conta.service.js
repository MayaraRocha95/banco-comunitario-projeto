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
exports.ContaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const conta_entity_1 = require("../entities/conta.entity");
const cliente_entity_1 = require("../entities/cliente.entity");
const transacao_entity_1 = require("../entities/transacao.entity");
let ContaService = class ContaService {
    constructor(contaRepository, clienteRepository, transacaoRepository) {
        this.contaRepository = contaRepository;
        this.clienteRepository = clienteRepository;
        this.transacaoRepository = transacaoRepository;
    }
    async create(createContaDto) {
        const cliente = await this.clienteRepository.findOne({ where: { id: createContaDto.clienteId } });
        if (!cliente) {
            throw new common_1.NotFoundException(`Cliente com ID ${createContaDto.clienteId} não encontrado`);
        }
        const conta = this.contaRepository.create({
            ...createContaDto,
            titular: cliente,
            numeroConta: this.generateAccountNumber(),
            dataAbertura: new Date(),
            status: 'ativa',
            saldo: createContaDto.saldoInicial,
        });
        return this.contaRepository.save(conta);
    }
    async findAll() {
        return this.contaRepository.find({ relations: ['titular'] });
    }
    async findOne(id) {
        const conta = await this.contaRepository.findOne({ where: { id }, relations: ['titular'] });
        if (!conta) {
            throw new common_1.NotFoundException(`Conta com ID ${id} não encontrada`);
        }
        return conta;
    }
    generateAccountNumber() {
        return Math.floor(Math.random() * 1000000000).toString().padStart(9, '0');
    }
};
exports.ContaService = ContaService;
exports.ContaService = ContaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(conta_entity_1.Conta)),
    __param(1, (0, typeorm_1.InjectRepository)(cliente_entity_1.Cliente)),
    __param(2, (0, typeorm_1.InjectRepository)(transacao_entity_1.Transacao)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ContaService);
//# sourceMappingURL=conta.service.js.map