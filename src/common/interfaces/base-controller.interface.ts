import { ReadAllResult } from '../read-all/read-all/types/read-all.type';
import { IBaseDto } from './base-dto';

export interface IBaseController<T> {
  create(createDto: IBaseDto): Promise<T>;
  readAll(readAllDto: IBaseDto): Promise<ReadAllResult<T>>;
  readById(id: string): Promise<T>;
  update(id: string, updateDto: IBaseDto): Promise<T>;
  delete(id: string): Promise<void>;
}
