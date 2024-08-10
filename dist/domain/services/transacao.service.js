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
exports.TransacaoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const conta_entity_1 = require("../entities/conta.entity");
const transacao_entity_1 = require("../entities/transacao.entity");
const date_fns_1 = require("date-fns");
const locale_1 = require("date-fns/locale");
let TransacaoService = class TransacaoService {
    constructor(contaRepository, transacaoRepository) {
        this.contaRepository = contaRepository;
        this.transacaoRepository = transacaoRepository;
    }
    async depositar(contaId, valor) {
        const conta = await this.contaRepository.findOne({ where: { id: contaId } });
        if (!conta) {
            throw new Error('Conta não encontrada');
        }
        conta.saldo += valor;
        await this.contaRepository.save(conta);
        const transacao = this.transacaoRepository.create({
            conta,
            valor,
            tipo: 'deposito',
            data: new Date(),
        });
        return this.transacaoRepository.save(transacao);
    }
    async sacar(contaId, valor) {
        const conta = await this.contaRepository.findOne({ where: { id: contaId } });
        if (!conta) {
            throw new Error('Conta não encontrada');
        }
        if (conta.saldo < valor) {
            throw new Error('Saldo insuficiente');
        }
        conta.saldo -= valor;
        await this.contaRepository.save(conta);
        const transacao = this.transacaoRepository.create({
            conta,
            valor,
            tipo: 'saque',
            data: new Date(),
        });
        return this.transacaoRepository.save(transacao);
    }
    async transferir(contaOrigemId, contaDestinoId, valor) {
        const contaOrigem = await this.contaRepository.findOne({ where: { id: contaOrigemId } });
        const contaDestino = await this.contaRepository.findOne({ where: { id: contaDestinoId } });
        if (!contaOrigem || !contaDestino) {
            throw new Error('Conta origem ou destino não encontrada');
        }
        if (contaOrigem.saldo < valor) {
            throw new Error('Saldo insuficiente na conta de origem');
        }
        contaOrigem.saldo -= valor;
        contaDestino.saldo += valor;
        await this.contaRepository.save(contaOrigem);
        await this.contaRepository.save(contaDestino);
        const transacao = this.transacaoRepository.create({
            conta: contaOrigem,
            contaDestino,
            valor,
            tipo: 'transferencia',
            data: new Date(),
        });
        return this.transacaoRepository.save(transacao);
    }
    async getExtrato(contaId) {
        const conta = await this.contaRepository.findOne({ where: { id: contaId }, relations: ['transacoes'] });
        if (!conta) {
            throw new Error('Conta não encontrada');
        }
        return conta.transacoes.map((transacao) => ({
            ...transacao,
            data: (0, date_fns_1.format)(transacao.data, 'dd/MM/yyyy HH:mm:ss', { locale: locale_1.ptBR }),
        }));
    }
};
exports.TransacaoService = TransacaoService;
exports.TransacaoService = TransacaoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(conta_entity_1.Conta)),
    __param(1, (0, typeorm_1.InjectRepository)(transacao_entity_1.Transacao)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], TransacaoService);
//# sourceMappingURL=transacao.service.js.map