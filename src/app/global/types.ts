export interface AccountTable {
  account: {
    img: string;
    name: string;
  };
  data_items: string;
  disk_space_used: string;
  sync_frequency: string;
  sync_type: string;
  last_sync: string;
  next_sync: string;
}
export enum Sync_Frequency {
  Monthly = "Monthly",
  Weekly = "Weekly"
}
export enum Sync_Type {
  Manual = "Manual",
  Automated = "Automated"
}

export interface AccountItems {
  img: string;
  name: string;
}

/**
 * Purchase Table
 */
export interface PurchaseTable {
  name:string;
  price:number;
  purchase_date:string;
}

/**
 * Repository Table
 */

export interface RepositoryTable {
  repo:string;
  latest_commit:Date;
}

/**
 *  links to display in navbar like breadcrumps
 */
export interface HeaderLinks {
  image:string;
  label:string;
  url:string;
  selected?:boolean;
}

/**
 *  links to display in sidebar
 */
export interface SidebarLinks {
  image:string;
  label:string;
  url:string;
  selected?:boolean;
}