import { AccountItems, Sync_Frequency, Sync_Type, AccountTable, PurchaseTable, RepositoryTable } from "./types";
import { ValidatorFn, AbstractControl } from "@angular/forms";
/**
 *  Accounts table 
 */
export const ACCOUNTS_DISPLAYED_COLUMNS = [
  "ACCOUNT",
  "DATA ITEMS",
  "DISK SPACE USED",
  "SYNC FREQUENCY",
  "SYNC TYPE",
  "LAST SYNC",
  "NEXT SYNC"
];
export const ACCOUNTS_DATA: AccountTable[] = [
  {
    account: { img: "assets/icons/google3.svg", name: "prakriti.malik" },
    data_items: "3431 Emails yo hey hello",
    disk_space_used: "17GB",
    sync_frequency: Sync_Frequency.Monthly,
    sync_type: Sync_Type.Manual,
    last_sync: "20 July 2019",
    next_sync: "Reminder on 20 August 2019"
  },
  {
    account: { img: "assets/icons/github.svg", name: "prakritimalik" },
    data_items: "37 Repositories",
    disk_space_used: "1.1GB",
    sync_frequency: Sync_Frequency.Weekly,
    sync_type: Sync_Type.Automated,
    last_sync: "24 July 2019",
    next_sync: "31 July 2019"
  },
  {
    account: {
      img: "assets/icons/twitter-with-circle.svg",
      name: "@praktweets"
    },
    data_items: "400 Tweets",
    disk_space_used: "100MB",
    sync_frequency: Sync_Frequency.Weekly,
    sync_type: Sync_Type.Automated,
    last_sync: "23 July 2019",
    next_sync: "30 July 2019"
  }
];
/**
 * Accounts to display below the account table as buttons
 */
export const ACCOUNTS: AccountItems[] = [
  {
    img: "https://img.icons8.com/color/48/000000/whatsapp.png",
    name: "WhatsApp"
  },
  {
    img: "https://img.icons8.com/color/48/000000/linkedin.png",
    name: "LinkedIn"
  },
  {
    img: "https://img.icons8.com/color/48/000000/facebook-messenger.png",
    name: "Messenger"
  },
  {
    img: "https://img.icons8.com/color/48/000000/ios-photos.png",
    name: "iPhotos"
  },
  {
    img: "https://img.icons8.com/cute-clipart/48/000000/instagram-new.png",
    name: "Instagram"
  },
  {
    img: "https://img.icons8.com/color/48/000000/ms-outlook.png",
    name: "Outlook"
  },
  {
    img: "assets/icons/hangouts.png",
    name: "Hangouts"
  }
];

/**
 *  Purchases table 
 */
export const PURCHASE_COLUMNS = [
  "Name",
  "Price",
  "Purchase Date"
];

export const PURCHASE_DATA: PurchaseTable[] = [
  {
    name:"Don’t Make Me Think",
    price:3.20,
    purchase_date:"June 25, 2019"
  },
  {
    name:"JBL CS-100SI Earphon",
    price:5.99,
    purchase_date:"June 6, 2019"
  },
  {
    name:"Ravenna Garden Stool",
    price:99.99,
    purchase_date:"April 25, 2019"
  },
  {
    name:"Adidas Diablo Duffel Bag",
    price:15.99,
    purchase_date:"March 7, 2019"
  },
  {
    name:"Echo Dot - 3rd Gen",
    price:29.5,
    purchase_date:"May 28, 2019"
  },
  {
    name:"Echo Dot - 3rd Gen",
    price:29.5,
    purchase_date:"May 28, 2019"
  },
  {
    name:"Echo Dot - 3rd Gen",
    price:29.5,
    purchase_date:"May 26, 2019"
  },
  {
    name:"Echo Dot - 3rd Gen",
    price:29.5,
    purchase_date:"May 25, 2019"
  }
];





/**
 *  Purchases table 
 */
export const REPOSITORY_COLUMN = [
  "Blank-1",
  "Latest Commit",
  "Blank-2"
];

export const REPOSITORY_DATA: RepositoryTable[] = [
  {
    repo:"malikankit/pod-assets/1",
    latest_commit: new Date('June 16, 2019 03:24:00')
  },
  {
    repo:"malikankit/pod-assets/2",
    latest_commit: new Date('June 17, 2019 03:24:00')
  },
  {
    repo:"malikankit/pod-assets/3",
    latest_commit: new Date('June 18, 2019 03:24:00')
  },
  {
    repo:"malikankit/pod-assets/4",
    latest_commit: new Date('June 19, 2019 03:24:00')
  },
  {
    repo:"malikankit/pod-assets/5",
    latest_commit: new Date('June 20, 2019 03:24:00')
  },
  {
    repo:"malikankit/pod-assets/6",
    latest_commit: new Date('July 2, 2019 03:24:00')
  },
  {
    repo:"malikankit/pod-assets/7",
    latest_commit: new Date('July 22, 2019 03:24:00')
  },
  {
    repo:"malikankit/pod-assets/8",
    latest_commit: new Date('August 16, 2019 03:24:00')
  },
  {
    repo:"malikankit/pod-assets/9",
    latest_commit: new Date('August 25, 2019 03:24:00')
  },
  {
    repo:"malikankit/pod-assets/10",
    latest_commit: new Date('September 8, 2019 03:24:00')
  },
  {
    repo:"malikankit/pod-assets/11",
    latest_commit: new Date('Octobar 16, 2019 03:24:00')
  },
].reverse();



export function passValidator(
  regex: RegExp,
  errorName:string
): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
      const forbidden = regex.test(control.value), errorObj={};
      errorObj[errorName] = {value: control.value}
      return !forbidden ? errorObj : null;
  };
}
