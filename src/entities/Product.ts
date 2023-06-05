import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('product', { synchronize: false })
export class Product {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    sku: number
    @Column()
    name: string
}