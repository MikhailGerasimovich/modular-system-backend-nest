import { IPaginationOptions } from 'src/common/read-all/pagination/interfaces/pagination.interface';

export const defaultPagination: IPaginationOptions = {
  page: 1,
  size: 20,
  get offset(): number {
    return (this.page - 1) * this.size;
  },
};
