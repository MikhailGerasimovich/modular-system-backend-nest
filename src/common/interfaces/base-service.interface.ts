import { ReadAllResult } from '../read-all/read-all/types/read-all.type';
import { IBaseDto } from './base-dto';

export interface IBaseService<T> {
  create(createDto: IBaseDto): Promise<T>;
  readAll(readAllOptions: IBaseDto): Promise<ReadAllResult<T>>;
  readById(id: string): Promise<T>;
  update(id: string, updateDto: IBaseDto): Promise<T>;
  delete(id: string): Promise<void>;
}
