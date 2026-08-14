import type { RewardSupplier } from "../reward/RewardSupplier";
import type { RewardSupplierNotFoundException } from "./RewardSupplierNotFoundException";

export interface RewardSupplierService {
    findAll(): RewardSupplier[];
    /**
     * @throws {RewardSupplierNotFoundException}
     */
    getById(rewardSupplierId: string): RewardSupplier;
    getRewardValueDisplay(rewardSupplier: RewardSupplier): string;
}
